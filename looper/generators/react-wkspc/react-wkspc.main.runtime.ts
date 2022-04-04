import { MainRuntime } from '@teambit/cli';
import { GeneratorMain, GeneratorAspect } from '@teambit/generator';
import { Aspect, RuntimeDefinition } from '@teambit/harmony';
import { ReactWkspcAspect } from './react-wkspc.aspect';
import { workspaceTemplate } from './template';

export class ReactWkspcMain {
  static slots = [];

  static dependencies: Aspect[] = [GeneratorAspect];
  static runtime: RuntimeDefinition = MainRuntime;

  static async provider([generator]: [GeneratorMain]) {
    generator.registerWorkspaceTemplate([workspaceTemplate]);
    return new ReactWkspcMain();
  }
}

ReactWkspcAspect.addRuntime(ReactWkspcMain);
