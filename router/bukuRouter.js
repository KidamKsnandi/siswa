const router = require("express").Router();
const { index, edit, store, update, destroy } = require("../controllers/bukuController");

router.get("/buku", index);

module.exports = router;
