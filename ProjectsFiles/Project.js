// Define a function to create HTML representation for a project
function createProjectHTML(name, description, languages, picture, launchLink, codeLink, size) {
    //  HTML structure
    return `<article class="prjBox box ${size}">
        <h3>${name}</h3>
        <p class="description">${description}</p>
        <p>Languages & Tools: ${languages.join(', ')}</p>
        <div class="prjImage">
            <img src="${picture}" alt="${name}">
        </div>
        <div class="launch">
            <!-- Create a link to launch the project with a rocket icon -->
            <a href="${launchLink}" target="_blank"><i class="fas fa-rocket"></i></a>
            <!-- Create a link to view the code with a code icon -->
            <a href="${codeLink}" target="_blank"><i class="fas fa-code"></i></a>
        </div>
    </article>`;
}

// Export the createProjectHTML function to be used in other modules
export { createProjectHTML };
