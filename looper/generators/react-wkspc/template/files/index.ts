import { WorkspaceContext } from '@teambit/generator';
import fs from 'fs';
import path from 'path';
import { workspaceConfig } from './workspace-config';

class Files {
  private static context: WorkspaceContext;

  public static Read(fileName: string): string {
    return fs.readFileSync(
      path.resolve(__dirname, `./${fileName}.txt`),
      'utf8'
    );
  }
}

export default Files;
export { workspaceConfig };
