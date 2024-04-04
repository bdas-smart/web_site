import path from 'path';
import fs from 'fs';
import { Request } from 'express';
import { MulterRequest } from '../shared/interfaces';
import { UnprocessableEntityError } from '../shared/app-error';

export class UploadController {
  constructor() {}

  async uploadImages(req: MulterRequest) {
    if (req.file) {
      const fileUrl = `/uploads/${req.file.filename}`;
      return { url: fileUrl };
    }

    if (req.files && req.files.length !== 0) {
      const fileUrls = req.files.map((file) => {
        return `/uploads/${file.filename}`;
      });
      return { urls: fileUrls };
    }

    throw new UnprocessableEntityError('No file uploaded.');
  }

  async delete(req: Request) {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '../../uploads', filename);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      return { message: 'File deleted successfully.' };
    }

    throw new UnprocessableEntityError('File not found.');
  }
}
