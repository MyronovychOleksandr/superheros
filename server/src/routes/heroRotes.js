const express = require("express");
const router = express.Router();

const {
  createHeroControler,
  getAllHerosControler,
  getOneHeroControler,
  removeHeroControler,
  updateHeroControler,
} = require("../controllers/heroControllers");

router.post("/", createHeroControler);
router.get("/", getAllHerosControler);
router.get("/:id", getOneHeroControler);
router.delete("/:id", removeHeroControler);
router.patch("/:id", updateHeroControler);

module.exports = router;
