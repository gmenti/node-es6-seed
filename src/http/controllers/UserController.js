const { NotFound } = require('http-errors');

class UserController {
  /**
   * @param {import('../../services').ServiceContainer} param0
   */
  constructor({ userService }) {
    this.userService = userService;
  }

  async list(req, res, next) {
    try {
      const rows = await UserService.list();
      res.send(rows);
    } catch (err) {
      next(err);
    }
  }

  async get(req, res, next) {
    try {
      const { userId } = req.joi.params;
      const user = await UserService.get(userId);

      if (!user) {
        throw new NotFound(`User #${userId} not exists`);
      }
     
      res.send(user);
    } catch (err) {
      next(err);
    }
  }

  async post(req, res, next) {
    try {
      const data = {
        name: req.joi.body.name,
      };

      const [id] = await UserService.post(data);
      res.send({ id });
    } catch (err) {
      next(err);
    }
  }

  async put(req, res, next) {
    try {
      const { userId } = req.joi.params;

      const updated = await UserService.put(userId, {
        name: req.joi.body.name,
      });

      if (!updated) {
        throw new NotFound(`User #${userId} not exists`);
      }

      res.sendStatus(204);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res) {
    try {
      const { userId } = req.joi.params;
      const deleted = await UserService.delete(userId);

      if (!deleted) {
        throw new NotFound(`User #${userId} not exists`);
      }

      res.sendStatus(204);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
