require("dotenv").config();
const ImageKit = require("imagekit");

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint:process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadFile(file, fileName) {
  try {
    const result = await imagekit.upload({
      file: file,      // buffer or base64 string
      fileName: fileName,
    });
    return result;      // ✅ Return the uploaded file details
  } catch (err) {
    console.error('Upload failed:', err);
    throw err;
  }
}


module.exports = { uploadFile };
