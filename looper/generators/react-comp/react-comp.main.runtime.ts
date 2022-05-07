import { MainRuntime } from '@teambit/cli';
import { GeneratorMain, GeneratorAspect } from '@teambit/generator';
import { Aspect, RuntimeDefinition } from '@teambit/harmony';

import { ReactCompAspect } from './react-comp.aspect';
import Files from './files';

export class ReactCompMain {
  static slots = [];
  static dependencies: Aspect[] = [GeneratorAspect];
  static runtime: RuntimeDefinition = MainRuntime;
  static async provider([generator]: [GeneratorMain]) {
    /**
     * Array of templates. Add as many templates as you want
     * Separate the templates to multiple files if you prefer
     * Modify, add or remove files as needed
     * See the docs file of this component for more info
     */

    generator.registerComponentTemplate([
      {
        name: 'react-story',
        description: 'Custom generator for react component',
        generateFiles: Files.GenerateReactComponentWithStory,
      },
      {
        name: 'app-with-s3',
        description: 'Custom generator for react app',
        generateFiles: Files.GenerateReactApp,
      },
    ]);

    return new ReactCompMain();
  }
}

ReactCompAspect.addRuntime(ReactCompMain);
