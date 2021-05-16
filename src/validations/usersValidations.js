const path = require('path');
const { check } = require('express-validator');

module.exports = {
    store: [
        check('first_name').notEmpty().withMessage('Debes completar tu nombre'),
        check('last_name').notEmpty().withMessage('Debes completar tu apellido'), 
        check('username')
            .notEmpty().withMessage('Debes elegir un nombre de usuario').bail()
            .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres')
            .isLength({ max: 15 }).withMessage('El nombre debe tener menos de 15 caracteres'),
        check('mail').notEmpty().isEmail().withMessage('Debes completar un email valido'),
        check('check_mail')
            .notEmpty().isEmail().withMessage('Debes completar un email valido').bail()
            .custom((value, { req }) => {
            if (value !== req.body.mail) {
              throw new Error('Ambos correos deben coincidir');
            }
            return true;
          }),
        check('password')
            .notEmpty().withMessage('Debes escribir tu contraseña').bail()
            .isLength({ min: 4 }).withMessage('La contraseña debe tener al menos 4 caracteres')
            .isLength({ max: 15 }).withMessage('La contraseña debe tener menos de 15 caracteres'),
        check('check_pass')
            .notEmpty().withMessage('Debes escribir tu contraseña').bail()
            .isLength({ min: 4 }).withMessage('La contraseña debe tener al menos 4 caracteres')
            .isLength({ max: 15 }).withMessage('La contraseña debe tener menos de 15 caracteres')
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                  throw new Error('Ambos contraseñas deben coincidir');
                }
                return true;
              }),
       
      /*   check('photo').custom((value, { req }) => {
          let file = req.file;
          let acceptedExtensions = ['.jpg', '.png', '.gif'];
      
          if (!file) {
            throw new Error('Tienes que subir una imagen');
          } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
              throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
          } 
      
          return true; 
        }) */
    ],
    update: [
        check('first_name').notEmpty().withMessage('Debes completar tu nombre'),
        check('last_name').notEmpty().withMessage('Debes completar tu apellido'), 
        check('user_name')
            .notEmpty().withMessage('Debes completar un email valido').bail()
            .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres')
            .isLength({ max: 15 }).withMessage('El nombre debe tener menos de 15 caracteres'),
        check('mail').notEmpty().isEmail().withMessage('Debes completar un email valido'),
        check('check_mail')
            .notEmpty().isEmail().withMessage('Debes completar un email valido').bail()
            .custom((value, { req }) => {
            if (value !== req.body.mail) {
              throw new Error('Ambos correos deben coincidir');
            }
            return true;
          }),
        check('password')
            .notEmpty().withMessage('Debes escribir tu contraseña').bail()
            .isLength({ min: 4 }).withMessage('La contraseña debe tener al menos 4 caracteres')
            .isLength({ max: 15 }).withMessage('La contraseña debe tener menos de 15 caracteres'),
        check('check_pass')
            .notEmpty().withMessage('Debes escribir tu contraseña').bail()
            .isLength({ min: 4 }).withMessage('La contraseña debe tener al menos 4 caracteres')
            .isLength({ max: 15 }).withMessage('La contraseña debe tener menos de 15 caracteres')
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                  throw new Error('Ambos contraseñas deben coincidir');
                }
                return true;
              }),

    ]

}