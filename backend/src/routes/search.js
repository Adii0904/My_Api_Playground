const express = require("express");
const router = express.Router();
const asyncHandler = require("../utils/asyncHandler");
const Project = require("../models/Project");

router.get(
  "/search",
  asyncHandler(async (req, res) => {
    const { q } = req.query;
    if (!q) return res.json([]);
    const items = await Project.find(
      { $text: { $search: q } },
      { score: { $meta: "textScore" } }
    ).sort({ score: { $meta: "textScore" } });
    res.json(items);
  })
);

module.exports = router;
