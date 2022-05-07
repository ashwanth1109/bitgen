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

  public static async WorkspaceBase(): Promise<WorkspaceFile[]> {
    return [
      {
        relativePath: 'workspace.jsonc',
        content: await workspaceConfig(Files.context),
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
    ];
  }

  public static Storybook(): WorkspaceFile[] {
    return [
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
    ];
  }

  public static Testing(): WorkspaceFile[] {
    return [
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
        relativePath: 'remote/storyshots/index.spec.ts',
        content: Files.Read('testing/storyshots'),
      },
    ];
  }

  public static LintingFormatting(): WorkspaceFile[] {
    return [
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

  public static Scripts(): WorkspaceFile[] {
    return [
      {
        relativePath: 'start.sh',
        content: Files.Read('scripts/start-sh'),
      },
    ];
  }

  public static Actions(): WorkspaceFile[] {
    return [
      {
        relativePath: '.github/issue_template/generic-template.md',
        content: Files.Read('actions/generic-template'),
      },
      {
        relativePath: '.github/workflows/bit-publish.yml',
        content: Files.Read('actions/bit-publish'),
      },
      {
        relativePath: '.github/workflows/health-check.yml',
        content: Files.Read('actions/health-check'),
      },
      {
        relativePath: '.github/workflows/pr-status.yml',
        content: Files.Read('actions/pr-status'),
      },
      {
        relativePath: '.github/pull_request_template.md',
        content: Files.Read('actions/pr-template'),
      },
      {
        relativePath: '.bit-status-desired.json',
        content: Files.Read('actions/desired-status'),
      },
    ];
  }

  // TODO: Add support for providers
  // public static Providers(): WorkspaceFile[] {
  //   return [
  //     {
  //       relativePath: `providers/${Files.context.name}-theme/index.ts`,
  //       content: Files.Read('providers/theme/index'),
  //     },
  //     {
  //       relativePath: `providers/${Files.context.name}-theme/${Files.context.name}-theme.tsx`,
  //       content: Files.Read('providers/theme/theme'),
  //     },
  //   ];
  // }

  public static async Generate(
    context: WorkspaceContext
  ): Promise<WorkspaceFile[]> {
    Files.context = context;
    return [
      ...(await Files.WorkspaceBase()),
      ...Files.Storybook(),
      ...Files.Testing(),
      ...Files.LintingFormatting(),
      ...Files.Scripts(),
      ...Files.Actions(),
      // ...Files.Providers(),
    ];
  }
}

export default Files;
