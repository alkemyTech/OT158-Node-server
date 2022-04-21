const fs = require('fs');
const { ISError } = require('../utils/status');
const { throwError } = require('../utils/errorHandler');
const { storage, bucketName } = require('./setupAmazonS3');

const uploadImageAndReturnLocation = async (file) => {
  try {
    const uploaded = await uploadingImageToAWS(file);

    return uploaded.Location;
  } catch (error) {
    throwError(error.message || 'Internal Server Error', ISError);
  }
};

const uploadingImageToAWS = (file) => {
  const stream = fs.createReadStream(file.tempFilePath);

  const params = {
    Bucket: bucketName,
    Key: file.name,
    Body: stream
  };

  return storage.upload(params).promise();
};

module.exports = { uploadImageAndReturnLocation };
