import { ComponentContext, ComponentFile } from '@teambit/generator';
import * as fs from 'fs';
import * as path from 'path';
import Logger from '@ashwanth1109/looper.utils.logger';

class Files {
  public static context: ComponentContext;
  public static relativePath: string;

  public static Read(fileName: string): string {
    Logger.Info(`Generating file ${fileName}`);
    let data = fs.readFileSync(
      path.resolve(__dirname, `./${Files.relativePath}/${fileName}.txt`),
      'utf8'
    );
    data = data.replace(
      /BITGEN_NAME_PASCAL_CASE/g,
      Files.context.namePascalCase
    );
    data = data.replace(/BITGEN_NAME/g, Files.context.name);
    return data;
  }

  public static GenerateReactComponentWithStory(
    context: ComponentContext
  ): ComponentFile[] {
    Files.context = context;
    Files.relativePath = 'component-with-story';
    return [
      // Index file
      {
        relativePath: 'index.ts',
        isMain: true,
        content: Files.Read('index'),
      },
      // Component file
      {
        relativePath: `${context.name}.tsx`,
        content: Files.Read('dummy'),
      },
      // Docs file
      {
        relativePath: `${context.name}.docs.mdx`,
        content: Files.Read('dummy-docs'),
      },
      // Composition file
      {
        relativePath: `${context.name}.composition.tsx`,
        content: Files.Read('dummy-composition'),
      },
      // Test file
      {
        relativePath: `${context.name}.spec.tsx`,
        content: Files.Read('dummy-spec'),
      },
      // Stories file
      {
        relativePath: `${context.name}.stories.tsx`,
        content: Files.Read('dummy-stories'),
      },
    ];
  }

  public static GenerateReactApp(context: ComponentContext): ComponentFile[] {
    Files.context = context;
    Files.relativePath = 'react-app';

    return [
      // Index file
      {
        relativePath: 'index.ts',
        isMain: true,
        content: Files.Read('index'),
      },
      // Context file
      {
        relativePath: `${context.name}.app-context.tsx`,
        content: Files.Read('tiui-app-context'),
      },
      // Docs file
      {
        relativePath: `${context.name}.docs.mdx`,
        content: Files.Read('tiui-app-docs'),
      },
      // Command registrar
      {
        relativePath: `${context.name}.react-app.ts`,
        content: Files.Read('tiui-app-react-app'),
      },
      // Root file - reactDOM.render
      {
        relativePath: `${context.name}.app-root.tsx`,
        content: Files.Read('tiui-app-root'),
      },
      // App file
      {
        relativePath: `app.tsx`,
        content: Files.Read('app'),
      },
    ];
  }
}

export default Files;
