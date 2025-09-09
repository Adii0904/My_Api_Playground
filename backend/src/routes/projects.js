const express = require("express");
const router = express.Router();
const asyncHandler = require("../utils/asyncHandler");
const Project = require("../models/Project");

// List projects (optionally filter by skill)
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const { skill } = req.query;
    const filter = skill ? { skills: { $in: [skill] } } : {};
    const items = await Project.find(filter).sort({ createdAt: -1 });
    res.json(items);
  })
);

// Create project
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const created = await Project.create(req.body);
    res.status(201).json(created);
  })
);

// Top skills by frequency across projects
router.get(
  "/skills/top",
  asyncHandler(async (_req, res) => {
    const agg = await Project.aggregate([
      { $unwind: "$skills" },
      { $group: { _id: "$skills", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ]);
    res.json(agg.map((x) => ({ skill: x._id, count: x.count })));
  })
);

module.exports = router;
