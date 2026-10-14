#!/usr/bin/env bash
set -euo pipefail

video_path="${1:-}"

if [[ -z "$video_path" ]]; then
  echo "Usage: bun run verify:render -- <path-to-final.mp4>" >&2
  exit 1
fi

if [[ ! -f "$video_path" ]]; then
  echo "Final render not found: $video_path" >&2
  exit 1
fi

stream_types="$(ffprobe -v error -show_entries stream=codec_type -of csv=p=0 "$video_path")"

if ! grep -qx 'video' <<<"$stream_types"; then
  echo "Rejected: the file has no video stream." >&2
  exit 1
fi

if ! grep -qx 'audio' <<<"$stream_types"; then
  echo "Rejected: final renders require the supplied ElevenLabs narration audio stream." >&2
  exit 1
fi

container_duration="$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$video_path")"
video_duration="$(ffprobe -v error -select_streams v:0 -show_entries stream=duration -of csv=p=0 "$video_path")"
audio_duration="$(ffprobe -v error -select_streams a:0 -show_entries stream=duration -of csv=p=0 "$video_path")"

if [[ "$video_duration" == "N/A" || -z "$video_duration" ]]; then
  video_duration="$container_duration"
fi

if [[ "$audio_duration" == "N/A" || -z "$audio_duration" ]]; then
  audio_duration="$container_duration"
fi

if ! awk -v video="$video_duration" -v audio="$audio_duration" 'BEGIN {
  if (video <= 0 || audio <= 0) exit 1;
  difference = video - audio;
  if (difference < 0) difference = -difference;
  exit(difference > 0.25);
}'; then
  echo "Rejected: video/audio duration mismatch (${video_duration}s video vs ${audio_duration}s audio)." >&2
  exit 1
fi

printf 'Render verified: %ss with video and narration audio streams.\n' "$container_duration"
