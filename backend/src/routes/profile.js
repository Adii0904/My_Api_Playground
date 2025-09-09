const express = require("express");
const router = express.Router();
const asyncHandler = require("../utils/asyncHandler");
const Profile = require("../models/Profile");

// Get single profile (by email or first doc)
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const { email } = req.query;
    const profile = email
      ? await Profile.findOne({ email })
      : await Profile.findOne();
    if (!profile) return res.json(null);
    res.json(profile);
  })
);

// Create or upsert profile by email
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const data = req.body;
    if (!data.email) return res.status(400).json({ error: "email required" });
    const profile = await Profile.findOneAndUpdate(
      { email: data.email },
      { $set: data },
      { upsert: true, new: true }
    );
    res.status(201).json(profile);
  })
);

// Update by id
router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const updated = await Profile.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  })
);

module.exports = router;
