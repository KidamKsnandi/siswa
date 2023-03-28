const Buku = require("../models/buku");
const models = require("../models/index");
const { messageTambah, messageEdit, messageDelete, massageError } = require("../Helpers/Message");

module.exports = {
  index: async (req, res) => {
    await models.Buku.findAll({
      attributes: ["id", "name", "stok"],
      include: [{ model: models.User, attributes: ["id", "nama", "alamat", "no_telepon"] }],
    })
      .then((data) => {
        res.status(200).json({ status: true, total: data.length, data });
      })
      .catch((err) => {
        res.json(massageError(err));
      });
  },

  edit: async (req, res) => {
    await models.Buku.findOne({
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
    await models.Buku.create(req.body)
      .then((data) => {
        res.status(200).json({ status: true, message: "Tambah Berhasil", data });
      })
      .catch((err) => {
        res.json(massageError(err));
      });
  },

  update: async (req, res) => {
    await models.Buku.update(req.body, { where: { id: [req.params.id] } })
      .then((data) => {
        res.status(200).json({ status: true, message: "Edit Berhasil", data });
      })
      .catch((err) => {
        res.json(massageError(err));
      });
  },

  destroy: async (req, res) => {
    await models.Buku.destroy({ where: { id: [req.params.id] } })
      .then((data) => {
        res.status(200).json({ status: true, message: "hapus Berhasil", data });
      })
      .catch((err) => {
        res.json(massageError(err));
      });
  },
};
