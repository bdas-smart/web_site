import { File } from 'multer';
import { Request } from 'express';

export interface MulterRequest extends Request {
  file: File;
  files: File[];
}


