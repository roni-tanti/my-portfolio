console.log("Portfolio website loaded successfully!");


const projects = [
    {
        number: "01",
        icon: "🌷",
        title: "Personal Portfolio",
        description: "My first personal portfolio website created while learning web development. I designed the layout and built the website using HTML, CSS and JavaScript.",
        tags: ["HTML", "CSS", "JavaScript"]
    },
    {
        number: "02",
        icon: "💻",
        title: "C Programming",
        description: "College coursework and practical programs focused on programming fundamentals, logic building and problem solving.",
        tags: ["C", "Programming", "Problem Solving"]
    },
    {
        number: "03",
        icon: "⚙️",
        title: "C++ Coursework",
        description: "College exercises covering C++ programming concepts and object-oriented programming fundamentals.",
        tags: ["C++", "OOP"]
    },
    {
        number: "04",
        icon: "📊",
        title: "Excel Work",
        description: "College assignments involving spreadsheets, formulas, formatting and basic data handling.",
        tags: ["Excel", "Data Handling"]
    }
];

function openProject(index) {
    const project = projects[index];

    document.getElementById("modalNumber").textContent = project.number;
    document.getElementById("modalIcon").textContent = project.icon;
    document.getElementById("modalTitle").textContent = project.title;
    document.getElementById("modalDescription").textContent = project.description;

    document.getElementById("modalTags").innerHTML =
        project.tags.map(tag => `<span>${tag}</span>`).join("");

    document.getElementById("projectModal").classList.add("active");
}

function closeProject() {
    document.getElementById("projectModal").classList.remove("active");
}

document.getElementById("projectModal").addEventListener("click", function(event) {
    if (event.target === this) {
        closeProject();
    }
});
