import path from 'path';
import { storagePath } from '../../config';

export enum FileSystemCommand {
  Read = '/cat/',
  List = '/ls/',
  MakeDirectory = '/md/',
  TouchFile = '/touch/',
  Move = '/mv/',
  Remove = '/rm/',
  RemoveRecursive = '/rmrf/',
  Upload = '/upload/',
  Download = '/download/',
}

export type FileSystemCommandType =
  | '/cat/'
  | '/ls/'
  | '/md/'
  | '/touch/'
  | '/mv/'
  | '/rm/'
  | '/rmrf/'
  | '/upload/'
  | '/download/';

export const extractPath = (
  pathUrl: string,
  userDir: string,
  command: FileSystemCommandType,
): string => {
  return path.join(storagePath, userDir, pathUrl.replace(command, ''));
};
