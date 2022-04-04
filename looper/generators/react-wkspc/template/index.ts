import { WorkspaceContext, WorkspaceTemplate } from '@teambit/generator';
import Files, { workspaceConfig } from './files';

export const workspaceTemplate: WorkspaceTemplate = {
  name: 'template-example',
  description: 'demonstration of a workspace template',
  generateFiles: async (context: WorkspaceContext) => [
    {
      relativePath: 'workspace.jsonc',
      content: await workspaceConfig(context),
    },
    {
      relativePath: '.gitignore',
      content: Files.Read('git-ignore'),
    },
    {
      relativePath: 'README.md',
      content: Files.Read('readme'),
    },
    {
      relativePath: 'package.json',
      content: Files.Read('package-json'),
    },
    {
      relativePath: '.storybook/main.js',
      content: Files.Read('storybook/main'),
    },
    {
      relativePath: '.storybook/preview.js',
      content: Files.Read('storybook/preview'),
    },
    {
      relativePath: '.storybook/preview-body.html',
      content: Files.Read('storybook/preview-body'),
    },
    {
      relativePath: 'start.sh',
      content: Files.Read('start-sh'),
    },
  ],
  importComponents: () => [
    { id: 'teambit.react/templates/ui/text', path: 'ui/text' },
  ],
};
