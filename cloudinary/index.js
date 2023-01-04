const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_APIKEY,
    api_secret: CLOUDINARY_SECRETKEY
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
      folder: 'YelpCamp',
      format: ['jpeg', 'png', 'jpg']
});
  
module.exports = {cloudinary, storage};