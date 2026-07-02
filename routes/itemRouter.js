const express = require("express");
const router = express.Router();

const { createItem, getItems } = require("../controllers/itemsController");

router.get("/", getItems);
router.post("/", createItem);

module.exports = router;