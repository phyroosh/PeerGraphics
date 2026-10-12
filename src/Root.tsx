import React from 'react';
import { Composition } from 'remotion';
import { Theme3_SwissBauhaus } from './themes/Theme3_SwissBauhaus';
import { Theme1_CyberHUD } from './themes/Theme1_CyberHUD';
import { Theme2_VintageBlueprint } from './themes/Theme2_VintageBlueprint';
import { Theme4_RenaissanceCodex } from './themes/Theme4_RenaissanceCodex';
import { Theme5_CosmicGlass } from './themes/Theme5_CosmicGlass';
import { Theme6_IsometricClay } from './themes/Theme6_IsometricClay';
import { Theme7_PhosphorTerminal } from './themes/Theme7_PhosphorTerminal';
import { Theme8_JapaneseUkiyoE } from './themes/Theme8_JapaneseUkiyoE';
import { Theme9_EditorialCollage } from './themes/Theme9_EditorialCollage';
import { Theme10_BioluminescentDarkfield } from './themes/Theme10_BioluminescentDarkfield';

export const RemotionRoot: React.FC = () => {
  const commonProps = {
    durationInFrames: 300,
    fps: 30,
    width: 1080,
    height: 1920,
  };

  return (
    <>
      {/* Primary Default Theme for PeerGraphics: Theme 3 (Swiss Bauhaus & Neo-Brutalist) */}
      <Composition id="ExplanationVideo" component={Theme3_SwissBauhaus} {...commonProps} />
      <Composition id="Theme-Default" component={Theme3_SwissBauhaus} {...commonProps} />
      <Composition id="Theme-03-SwissBauhaus" component={Theme3_SwissBauhaus} {...commonProps} />

      {/* Alternative Visual Themes */}
      <Composition id="Theme-01-CyberHUD" component={Theme1_CyberHUD} {...commonProps} />
      <Composition id="Theme-02-VintageBlueprint" component={Theme2_VintageBlueprint} {...commonProps} />
      <Composition id="Theme-04-RenaissanceCodex" component={Theme4_RenaissanceCodex} {...commonProps} />
      <Composition id="Theme-05-CosmicGlass" component={Theme5_CosmicGlass} {...commonProps} />
      <Composition id="Theme-06-IsometricClay" component={Theme6_IsometricClay} {...commonProps} />
      <Composition id="Theme-07-PhosphorTerminal" component={Theme7_PhosphorTerminal} {...commonProps} />
      <Composition id="Theme-08-JapaneseUkiyoE" component={Theme8_JapaneseUkiyoE} {...commonProps} />
      <Composition id="Theme-09-EditorialCollage" component={Theme9_EditorialCollage} {...commonProps} />
      <Composition id="Theme-10-BioluminescentDarkfield" component={Theme10_BioluminescentDarkfield} {...commonProps} />
    </>
  );
};
