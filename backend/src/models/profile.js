const mongoose = require("mongoose");

const EducationSchema = new mongoose.Schema(
  {
    degree: String,
    institute: String,
    year: String,
  },
  { _id: false }
);

const LinksSchema = new mongoose.Schema(
  {
    github: {
        type: String,
        set: v => v && !/^https?:\/\//i.test(v) ? `https://${v}` : v
    },
    linkedin: {
        type: String,
        set: v => v && !/^https?:\/\//i.test(v) ? `https://${v}` : v
    },
    portfolio: {
        type: String,
        set: v => v && !/^https?:\/\//i.test(v) ? `https://${v}` : v
    },
  },
  { _id: false }
);

const ProfileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    education: [EducationSchema],
    skills: [{ type: String, index: true }],
    work: [
      {
        company: String,
        role: String,
        duration: String,
        description: String,
      },
    ],
    links: LinksSchema,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", ProfileSchema);
