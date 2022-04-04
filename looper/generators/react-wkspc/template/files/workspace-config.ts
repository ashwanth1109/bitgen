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
  configParsed['teambit.workspace/workspace'].defaultScope = defaultScope || 'tiui.remote';
  configParsed['teambit.workspace/variants'] = {
    '*': {
      'teambit.react/react': {},
    },
  };
  configParsed['teambit.dependencies/dependency-resolver'].policy = {
    dependencies: {},
    peerDependencies: {
      react: '^16.8.0 || ^17.0.2',
      'react-dom': '^16.8.0 || ^17.0.2',
      '@testing-library/react': '12.0.0',
      '@storybook/addon-actions': '6.4.20',
      '@storybook/addon-essentials': '6.4.20',
      '@storybook/addon-interactions': '6.4.20',
      '@storybook/addon-links': '6.4.20',
      '@storybook/addon-storyshots': '6.4.20',
      '@storybook/jest': '0.0.10',
      '@storybook/react': '6.4.20',
      '@storybook/testing-library': '0.0.9',
    },
  };
  configParsed['teambit.generator/generator'] = {
    aspects: ['tiui.remote/generator/tiui-templates'],
  };
  configParsed['tiui.remote/generator/tiui-templates'] = {};

  return stringifyWorkspaceConfig(configParsed);
}
