import {
  Controller,
  Get,
  HttpStatus,
  InternalServerErrorException,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileService } from './file.service';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('file')
export class FileController {

  SERVER_URL = 'http://localhost:3000';

  constructor(private readonly fileService: FileService) {
  }

  @Post('/avatar')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './avatars'
      , filename: (req, file, cb) => {
        // Generating a 32 random chars long string
        const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
        // Calling the callback passing the random name generated with the original extension name
        cb(null, `${randomName}${extname(file.originalname)}`);
      },
    }),
  }))
  async uploadAvatar(@UploadedFile() file, @Res() res) {
    const filePath = await this.fileService.saveAvatar(`${this.SERVER_URL}/file/${file.path}`);
    if (!filePath) {throw new InternalServerErrorException('Something went wrong with saving file. Could not get file path.'); }
    return res.status(HttpStatus.OK).json({fileUrl: filePath});
  }

  @Get('/avatars/:fileId')
  async serveAvatar(@Param('fileId') fileId, @Res() res): Promise<any> {
    res.sendFile(fileId, { root: 'avatars'});
  }

}
