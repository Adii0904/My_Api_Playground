const API_BASE = "https://my-api-playgrounds.onrender.com/api"; // Deploy link

// Load profile
async function loadProfile() {
  const res = await fetch(`${API_BASE}/profile`);
  const data = await res.json();

  const profileDiv = document.getElementById("profileData");
  if (!data) {
    profileDiv.innerHTML = "<p>No profile found.</p>";
    return;
  }

  profileDiv.innerHTML = `
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Skills:</strong> ${data.skills?.join(", ")}</p>
    <p><strong>Links:</strong> 
      <a href="${data.links?.github}" target="_blank">GitHub</a> | 
      <a href="${data.links?.live}" target="_blank">LinkedIn</a>
    </p>
  `;
}

// Load all projects
async function loadProjects() {
  const res = await fetch(`${API_BASE}/projects`);
  const data = await res.json();

  const projectsDiv = document.getElementById("projectsList");
  if (!data.length) {
    projectsDiv.innerHTML = "<p>No projects found.</p>";
    return;
  }

  projectsDiv.innerHTML = data
    .map(
      (p) => `
    <div>
      <strong>${p.title}</strong><br/>
      ${p.description}<br/>
      <em>Skills:</em> ${p.skills.join(", ")}<br/>
      <a href="${p.links?.github}" target="_blank">GitHub</a> | 
      <a href="${p.links?.live}" target="_blank">Live</a>
    </div>
  `
    )
    .join("");
}

// Search projects
async function searchProjects() {
  const query = document.getElementById("searchInput").value;
  const res = await fetch(`${API_BASE}/search?q=${query}`);
  const data = await res.json();

  const projectsDiv = document.getElementById("projectsList");
  projectsDiv.innerHTML = data
    .map(
      (p) => `
    <div>
      <strong>${p.title}</strong><br/>
      ${p.description}<br/>
      <em>Skills:</em> ${p.skills.join(", ")}
    </div>
  `
    )
    .join("");
}

// Filter by skill
async function filterBySkill() {
  const skill = document.getElementById("skillInput").value;
  const res = await fetch(`${API_BASE}/projects?skill=${skill}`);
  const data = await res.json();

  const projectsDiv = document.getElementById("projectsList");
  projectsDiv.innerHTML = data
    .map(
      (p) => `
    <div>
      <strong>${p.title}</strong><br/>
      ${p.description}<br/>
      <em>Skills:</em> ${p.skills.join(", ")}
    </div>
  `
    )
    .join("");
}

// Init
loadProfile();
loadProjects();
