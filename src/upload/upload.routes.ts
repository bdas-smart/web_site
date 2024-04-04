import { Router } from 'express';
import { UploadView } from './upload.view';
import asyncWrapper from '../shared/async-wrapper';
import { uploadImages } from '../shared/upload';


const uploadRoutes = Router();
const uploadView = new UploadView();

// uploadRoutes.use(authenticate("jwt"))
uploadRoutes
  .route('/image')
  .post(
    asyncWrapper(uploadImages.single('image')),
    asyncWrapper(uploadView.uploadImages)
  );

uploadRoutes
  .route('/images')
  .post(
    asyncWrapper(uploadImages.array('images')),
    asyncWrapper(uploadView.uploadImages)
  );

uploadRoutes.route('/:filename').delete(asyncWrapper(uploadView.delete));

export default uploadRoutes;
