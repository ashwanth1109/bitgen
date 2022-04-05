import { WorkspaceContext, WorkspaceFile } from '@teambit/generator';
import * as fs from 'fs';
import * as path from 'path';

import { workspaceConfig } from './workspace-config';

class Files {
  public static context: WorkspaceContext;

  public static Read(fileName: string): string {
    let data = fs.readFileSync(
      path.resolve(__dirname, `./${fileName}.txt`),
      'utf8'
    );
    data = data.replace(/BITGEN_NAME/g, Files.context.name);
    return data;
  }

  public static async Generate(
    context: WorkspaceContext
  ): Promise<WorkspaceFile[]> {
    Files.context = context;
    return [
      // Workspace Base Files
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
      // Storybook Files
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
      // Testing
      {
        relativePath: '__mocks__/fileMock.ts',
        content: Files.Read('testing/file-mock'),
      },
      {
        relativePath: '__mocks__/styleMock.ts',
        content: Files.Read('testing/style-mock'),
      },
      {
        relativePath: 'babel.config.js',
        content: Files.Read('testing/babel-config'),
      },
      {
        relativePath: 'jest.config.js',
        content: Files.Read('testing/jest-config'),
      },
      {
        relativePath: 'jest.setup.js',
        content: Files.Read('testing/jest-setup'),
      },
      {
        relativePath: 'looper/storyshots/index.spec.ts',
        content: Files.Read('testing/storyshots'),
      },
      // Scripts
      {
        relativePath: 'start.sh',
        content: Files.Read('scripts/start-sh'),
      },
      // Linting
      {
        relativePath: '.eslintrc.js',
        content: Files.Read('linting/eslint-rc'),
      },
      // Formatting
      {
        relativePath: '.prettierignore',
        content: Files.Read('formatting/prettier-ignore'),
      },
      {
        relativePath: '.prettierrc.js',
        content: Files.Read('formatting/prettier-rc'),
      },
    ];
  }
}

export default Files;
