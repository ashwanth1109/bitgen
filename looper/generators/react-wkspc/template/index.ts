import { WorkspaceTemplate } from '@teambit/generator';
import Files from './files';

export const workspaceTemplate: WorkspaceTemplate = {
  name: 'bitgen',
  description: 'Opinionated bit template for atomic frontends',
  generateFiles: Files.Generate,
};
