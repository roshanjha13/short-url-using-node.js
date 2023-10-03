const express = require("express");
const {
  handleGenerateNewShortURL,
  getShortURl,
  handleGetAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.route("/").post(handleGenerateNewShortURL);
router.route("/:shortId").get(getShortURl);
router.route("/analytics/:shortId").get(handleGetAnalytics);

module.exports = router;
