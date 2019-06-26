import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class FileService {

  async saveAvatar(path) {
    return path;
  }

  async savePicture(path) {
    return path;
  }

  async serveAvater(fileId) {
    try {
      await fs.promises.access(`avatars/${fileId}`);
      return fileId;
    } catch (error) {
      return 'default.png';
    }
  }
}
