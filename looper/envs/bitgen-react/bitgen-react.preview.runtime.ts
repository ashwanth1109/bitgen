import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { Aspect, RuntimeDefinition } from '@teambit/harmony';

import { ThemeProvider } from '@ashwanth1109/looper.providers.theme';

import { BitgenReactAspect } from './bitgen-react.aspect';

export class BitgenReactPreviewMain {
  static runtime: RuntimeDefinition = PreviewRuntime;
  static dependencies: Aspect[] = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const bitgenReactPreviewMain = new BitgenReactPreviewMain();
    // uncomment the line below to register a new provider to wrap all compositions using this environment with a custom theme.
    react.registerProvider([ThemeProvider]);

    return bitgenReactPreviewMain;
  }
}

BitgenReactAspect.addRuntime(BitgenReactPreviewMain);
