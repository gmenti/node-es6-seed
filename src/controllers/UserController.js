const Logger = require('../helpers/Logger');
const UserService = require('../services/UserService');

class UserController {
  static async list(req, res) {
    try {
      const rows = await UserService.list();
      res.send({ success: true, data: rows });
    } catch (err) {
      Logger.throw(res, '3272358416', err);
    }
  }

  static async get(req, res) {
    try {
      const { userId } = req.params;
      const user = await UserService.get(userId);

      if (user) {
        res.send({ success: true, data: user });
      } else {
        res.send({
          success: false,
          code: '7731668134',
          message: req.__('api.user.notFound'),
        });
      }
    } catch (err) {
      Logger.throw(res, '6001059324', err);
    }
  }

  static async post(req, res) {
    const data = {
      name: req.body.name.trim(),
    };

    try {
      const [id] = await UserService.post(data);
      res.send({ success: true, data: { id } });
    } catch (err) {
      Logger.throw(res, '2365958507', err);
    }
  }

  static async put(req, res) {
    const formattedData = {
      name: req.body.name.trim(),
    };

    try {
      const updated = await UserService.put(req.params.userId, formattedData);

      if (updated) {
        res.send({ success: true });
      } else {
        res.send({
          success: false,
          code: '7502749763',
          message: req.__('api.user.notFound'),
        });
      }
    } catch (err) {
      Logger.throw(res, '5768905470', err);
    }
  }

  static async delete(req, res) {
    const { userId } = req.params;

    try {
      const deleted = await UserService.delete(userId);

      if (deleted) {
        res.send({ success: true });
      } else {
        res.send({
          success: false,
          code: '9517673561',
          message: req.__('api.user.notFound'),
        });
      }
    } catch (err) {
      Logger.throw(res, '5768005470', err);
    }
  }
}

module.exports = UserController;
