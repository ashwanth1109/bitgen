import { ComponentContext, ComponentFile } from '@teambit/generator';
import * as fs from 'fs';
import * as path from 'path';

class Files {
  public static context: ComponentContext;

  public static Read(fileName: string): string {
    let data = fs.readFileSync(
      path.resolve(__dirname, `./${fileName}.txt`),
      'utf8'
    );
    data = data.replace(
      /BITGEN_NAME_PASCAL_CASE/g,
      Files.context.namePascalCase
    );
    data = data.replace(/BITGEN_NAME/g, Files.context.name);
    return data;
  }

  public static Generate(context: ComponentContext): ComponentFile[] {
    Files.context = context;
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
}

export default Files;
