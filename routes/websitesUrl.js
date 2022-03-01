const express = require("express");
const router = express.Router();

const { getUrls } = require("../controllers/website");

router.route("/").get(getUrls, require("../exceptions/urlError"));
module.exports = router;
