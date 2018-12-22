const express = require('express');
const UserSchema = require('./schemas/UserSchema');
const UserController = require('../controllers/UserController');
const schemaValidator = require('../middlewares/schemaValidator');

const router = express.Router({ mergeParams: true });

/* GET /user */
router.get('/', schemaValidator(UserSchema, 'get'), UserController.list);

/* GET /user/:userId */
router.get('/:userId', schemaValidator(UserSchema, 'get'), UserController.get);

/* POST /user */
router.post('/', schemaValidator(UserSchema, 'post'), UserController.post);

/* PUT /user/:userId */
router.put('/:userId', schemaValidator(UserSchema, 'put'), UserController.put);

/* DELETE /user/:userId */
router.delete('/:userId', schemaValidator(UserSchema, 'delete'), UserController.delete);

module.exports = router;
