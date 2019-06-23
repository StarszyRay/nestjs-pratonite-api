import { Injectable } from '@nestjs/common';

@Injectable()
export class FileService {

  async saveAvatar(path) {
    return path;
  }
}
