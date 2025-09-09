const mongoose = require("mongoose");

const LinksSchema = new mongoose.Schema(
  {
    github: String,
    live: String,
  },
  { _id: false }
);

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, index: true },
    description: { type: String, default: "" },
    skills: [{ type: String, index: true }],
    links: LinksSchema,
  },
  { timestamps: true }
);

ProjectSchema.index({ title: "text", description: "text" });

// 👇 IMPORTANT FIX
module.exports =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);
