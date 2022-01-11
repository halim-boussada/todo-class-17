const router = require("express").Router();
const localisationController = require("../controller/localisationController.js");

router.post("/create", localisationController.create);
router.get("/", localisationController.getLocalisation);
router.put("/:id", localisationController.updated);
router.delete("/:id", localisationController.deleteByParams);

module.exports = router;
