import { WorkspaceContext } from '@teambit/generator';
import {
  getWorkspaceConfigTemplateParsed,
  stringifyWorkspaceConfig,
} from '@teambit/config';

export async function workspaceConfig({
  name,
  defaultScope,
}: WorkspaceContext) {
  const configParsed = await getWorkspaceConfigTemplateParsed();
  configParsed['teambit.workspace/workspace'].name = name;
  configParsed['teambit.workspace/workspace'].defaultScope =
    defaultScope || 'ashwanth1109.looper';
  configParsed['teambit.workspace/variants'] = {
    '*': {
      'teambit.react/react': {},
    },
  };
  configParsed['teambit.dependencies/dependency-resolver'].policy = {
    dependencies: {
      // Styling
      'styled-components': '5.3.5',
    },
    peerDependencies: {
      // TypeScript dependency
      typescript: '4.6.2',

      // React dependencies
      react: '^16.8.0 || ^17.0.2',
      'react-dom': '^16.8.0 || ^17.0.2',
      '@testing-library/react': '12.0.0',

      // Storybook dependencies
      '@storybook/addon-actions': '6.4.20',
      '@storybook/addon-essentials': '6.4.20',
      '@storybook/addon-interactions': '6.4.20',
      '@storybook/addon-links': '6.4.20',
      '@storybook/addon-storyshots': '6.4.20',
      '@storybook/jest': '0.0.10',
      '@storybook/react': '6.4.20',
      '@storybook/testing-library': '0.0.9',

      // Linting dependencies
      eslint: '8.12.0',
      '@types/eslint': '8.4.1',
      '@typescript-eslint/eslint-plugin': '5.15.0',
      '@typescript-eslint/parser': '5.15.0',

      // Formatting dependencies
      prettier: '2.6.2',
      '@types/prettier': '2.4.4',

      // Testing dependencies
      jest: '^27.4.7',
      '@testing-library/jest-dom': '5.16.1',
      'babel-jest': '27.4.6',
      'jest-styled-components': '7.0.8',
      '@babel/preset-env': '7.16.8',
      '@babel/preset-react': '7.16.7',
      '@babel/preset-typescript': '7.16.7',

      // Custom configs
      '@ashwanth1109/looper.linter': '^0.0.1',
      '@ashwanth1109/looper.formatter': '^0.0.1',
    },
  };
  configParsed['teambit.generator/generator'] = {
    aspects: ['ashwanth1109.looper/generators/react-comp'],
  };
  configParsed['ashwanth1109.looper/generators/react-comp'] = {};

  return stringifyWorkspaceConfig(configParsed);
}
