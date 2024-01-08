// Import the createProjectHTML function from the Project module
import { createProjectHTML } from "./Project.js";

// Import the projects array from the data module
import projects from "./data.js";

// Select the first two projects from the projects array
const selectedProjects = projects.slice(0, 2);

// Get the #projectDatabase element from the document
let projectDatabase = document.getElementById("projectDatabase");

// Loop through the selected projects and create HTML representation for each
selectedProjects.forEach((project) => {
    // Create a new article element
    let article = document.createElement("article");

    // Set the class name of the article based on project size
    article.className = `prjBox box ${project.size}`;

    // Set the inner HTML of the article using the createProjectHTML function
    article.innerHTML = createProjectHTML(
        project.name,
        project.description,
        project.languages,
        project.picture,
        project.launchLink,
        project.codeLink,
        project.size
    );

    // Append the article to the #projectDatabase element
    projectDatabase.appendChild(article);
});

/*. */