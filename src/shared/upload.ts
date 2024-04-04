import multer from 'multer';
import path from 'path';
import { UnprocessableEntityError } from './app-error';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const fileName = `image-${Date.now()}${path.extname(file.originalname)}`;
    cb(null, fileName);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.HEIF'];
  const isValidExtension = allowedExtensions.includes(
    path.extname(file.originalname).toLowerCase()
  );
  if (isValidExtension) {
    cb(null, true);
  } else {
    cb(
      new UnprocessableEntityError(
        'Invalid file extension. Only JPG, JPEG, and PNG are allowed.'
      )
    );
  }
};

export const uploadImages = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit
});
