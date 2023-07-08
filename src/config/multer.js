import multer from 'multer'
import { v4 } from 'uuid'
import path from 'path'
import { extname, resolve } from 'path'


export const configMulter = multer.diskStorage({
  destination: path.resolve(__dirname, '..', '..', 'uploads'),
  filename: (request, file, callback) => {
    return callback(null, v4() + extname(file.originalname))
  }
})
