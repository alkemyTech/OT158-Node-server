const S3 = require('aws-sdk/clients/s3');

const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;
const bucketName = process.env.AWS_BUCKET_NAME;

const storage = new S3({
    region,
    accessKeyId,
    secretAccessKey,
    bucketName
  });



module.exports = { storage };
