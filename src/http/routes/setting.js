const express = require('express');
const SettingController = require('../controllers/SettingController');
const settingSchema = require('../schemas/setting');
const schemaValidator = require('../middlewares/schemaValidator');
const services = require('../../services');

const router = express.Router({ mergeParams: true });

const settingController = new SettingController(services);

/* GET /settings */
router.get(
  '/',
  schemaValidator(settingSchema.list),
  settingController.list.bind(settingController)
);

module.exports = router;
