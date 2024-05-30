// server.js
const express = require("express");
const multer = require("multer");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { fromIni } = require("@aws-sdk/credential-provider-ini");
const multerS3 = require("multer-s3");
const s3Client = require("../aws-config");


const app = express();

const upload = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: process.env.S3_BUCKET_NAME,
    acl: "public-read", // Adjust as needed
    key: (req, file, cb) => {
      cb(null, Date.now().toString() + "-" + file.originalname);
    },
  }),
});
module.exports = upload;
