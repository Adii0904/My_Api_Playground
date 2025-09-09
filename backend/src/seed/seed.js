const mongoose = require("mongoose");
const { MONGODB_URI } = require("../config");
const Profile = require("../models/profile");
const Project = require("../models/project");

(async () => {
  await mongoose.connect(MONGODB_URI);

  await Profile.deleteMany({});
  await Project.deleteMany({});

  const profile = await Profile.create({
    name: "Aditya Prakash",
    email: "adityaprakash0904@gmail.com",
    education: [
      {
        degree: "B.Tech CSE",
        institute: "College of Engineering Roorkee",
        year: "2025",
      },
    ],
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "TypeScript",
      "Redux",
      "Tailwind",
      "JWT",
    ],
    work: [
      {
        company: "Platinum Software",
        role: "SDE Intern",
        duration: "3 mo",
        description: "React/Node features, perf fixes",
      },
    ],
    links: {
      github: "https://github.com/Adii0904",
      linkedin: "https://www.linkedin.com/in/aditya-prakash-b84507228/",
      portfolio: "https://adityapofolio.netlify.app/",
    },
  });

  await Project.create([
    {
      title: "Food Delivery App (Swiggy Clone)",
      description:
        "React + Redux Toolkit, Node/Express API, MongoDB, JWT auth.",
      skills: ["React", "Redux", "Node.js", "Express", "MongoDB", "JWT"],
      links: {
        github: "https://github.com/Adii0904?tab=repositories",
        live: "https://<live-url-1>",
      },
    },
    {
      title: "Coding Platform (LC-style)",
      description:
        "Problems/solutions, tags, search; Node API, WebSockets for live updates.",
      skills: ["Node.js", "Express", "MongoDB", "WebSockets", "React"],
      links: {
        github: "https://github.com/Adii0904?tab=repositories",
        live: "https://<live-url-2>",
      },
    },
  ]);

  console.log("Seeded:", profile.email);
  await mongoose.disconnect();
  process.exit(0);
})();
