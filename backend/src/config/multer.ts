import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import { FileLogger } from 'typeorm';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';

const storageTypes = {
    local:multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));

        },
        filename: (req, file, callback) => {
            const fileHash = crypto.randomBytes(10).toString('hex');
            const fileName = `${fileHash}-${file.originalname}`;
            return callback(null, fileName);
        }

    }),

    s3: multerS3({
        s3: new aws.S3(),
        bucket: 'uploadplayers',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: 'public-read', //permissao de leitura
        key: (req, file, callback) => {
            const fileHash = crypto.randomBytes(10).toString('hex');
            const fileName = `${fileHash}-${file.originalname}`;
            return callback(null, fileName);
        }
        
    })
};


export default {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: storageTypes['s3'] ,
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
    /*   fileFilter: (req, file, callback) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ];
        if (allowedMimes.includes(file.mimetype)) {
            callback(null, true);
        } else {
            callback(new Error("Invalid file type."));
        }
    } */
};