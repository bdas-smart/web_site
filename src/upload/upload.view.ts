import { Request, Response } from 'express';
import { UploadController } from './upload.controller';
import { MulterRequest } from '../shared/interfaces';
import { AppError } from '../shared/app-error';

export class UploadView {
  uploadController: UploadController;
  constructor() {
    this.uploadController = new UploadController();
  }
  async uploadImages(req: MulterRequest, res: Response) {
    try {
      const upload = await new UploadController().uploadImages(req);
      res.send({
        data: upload,
        message: null,
      });
    } catch (error) {
      throw new AppError(error);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const upload = await new UploadController().delete(req);
      res.send({
        data: upload,
        message: null,
      });
    } catch (error: any) {
      throw new AppError(error);
    }
  }
}
