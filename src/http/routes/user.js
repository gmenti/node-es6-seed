const express = require('express');
const UserController = require('../controllers/UserController');
const userSchema = require('../schemas/user');
const schemaValidator = require('../middlewares/schemaValidator');
const services = require('../../services');

const router = express.Router({ mergeParams: true });

const userController = new UserController(services);

/* GET /user */
router.get('/', userController.list);

/* GET /user/:userId */
router.get('/:userId', schemaValidator(userSchema.get), userController.get);

/* POST /user */
router.post('/', schemaValidator(userSchema.create), userController.post);

/* PUT /user/:userId */
router.put('/:userId', schemaValidator(userSchema.update), userController.put);

/* DELETE /user/:userId */
router.delete('/:userId', schemaValidator(userSchema.delete), userController.delete);

module.exports = router;
