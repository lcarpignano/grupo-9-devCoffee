const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'/../../public/img/users'))
    },
    filename: function (req, file, cb) {
         // Mejor usar algo como esto en lugar de Date.now()
          // https://www.npmjs.com/package/uuidv4
          cb(null, 'user-' + Date.now() + path.extname(file.originalname))
    }
  });

const uploadFile = multer({ storage });

module.exports = uploadFile;