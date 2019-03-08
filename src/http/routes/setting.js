const express = require('express');
const SettingController = require('../controllers/SettingController');
const settingSchema = require('../schemas/setting');
const schemaValidator = require('../middlewares/schemaValidator');
const services = require('../../services');

const router = express.Router({ mergeParams: true });

const settingController = new SettingController(services);

/* GET /user */
router.get('/', settingController.list);

/* GET /user/:userId */
router.get('/:userId', schemaValidator(settingSchema.get), settingController.get);

module.exports = router;
