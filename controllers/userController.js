const User = require("../models/user");
const models = require("../models/index");

module.exports = {
  index: async (req, res) => {
    await models.User.findAll({
      attributes: ["id", "nama", "alamat", "no_telepon"],
    })
      .then((data) => {
        res.status(200).json({ status: true, total: data.length, data });
      })
      .catch((err) => {
        res.json(massageError(err));
      });
  },

  edit: async (req, res) => {
    await models.User.findOne({
      where: { id: req.params.id },
      attributes: ["id", "nama", "alamat", "no_telepon"],
    })
      .then((data) => {
        res.status(200).json({ status: true, data });
      })
      .catch((err) => {
        res.json(massageError(err));
      });
  },

  store: async (req, res) => {
    await models.User.create(req.body)
      .then((data) => {
        res.status(200).json({ status: true, message: "Tambah Berhasil", data });
      })
      .catch((err) => {
        res.json(massageError(err));
      });
  },

  update: async (req, res) => {
    await models.User.update(req.body, { where: { id: [req.params.id] } })
      .then((data) => {
        res.status(200).json({ status: true, message: "Edit Berhasil", data });
      })
      .catch((err) => {
        res.json(massageError(err));
      });
  },

  destroy: async (req, res) => {
    await models.User.destroy({ where: { id: [req.params.id] } })
      .then((data) => {
        res.status(200).json({ status: true, message: "hapus Berhasil", data });
      })
      .catch((err) => {
        res.json(massageError(err));
      });
  },
};
