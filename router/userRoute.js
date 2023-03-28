const router = require("express").Router();
const { index, edit, store, update, destroy } = require("../controllers/userController");

router.get("/user", index);
router.get("/user/:id", edit);
router.post("/user/input", store);
router.put("/user/input/:id", update);
router.delete("/user/input/:id", destroy);

module.exports = router;
