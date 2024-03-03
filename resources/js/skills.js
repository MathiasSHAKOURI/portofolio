document.addEventListener("DOMContentLoaded", function() {

// Bloc Compétences
const skills = [
    { name: "HTML", logo: "html_logo.png" },
    { name: "CSS", logo: "css_logo.png" },
    { name: "JavaScript", logo: "javascript_logo.png" },
    { name: "Bootstrap", logo: "bootstrap_logo.png" },
    { name: "PHP", logo: "php_logo.png" },
    { name: "Symfony", logo: "symfony_logo.png" },
    { name: "Git", logo: "git_logo.png" },
    { name: "SQL", logo: "mysql_logo.png" },
    { name: "Wordpress", logo: "wordpress_logo.png" },
    { name: "Github", logo: "github_logo.png" },
    { name: "SEO", logo: "seo_logo.png" },
    { name: "Notion", logo: "notion_logo.png" },
    { name: "Make", logo: "make_logo.png" },
    { name: "Figma", logo: "figma_logo.png" }
];

const skillsContainer = document.getElementById("skillsContainer");

skills.forEach(skill => {
    const skillElement = document.createElement("div");
    skillElement.classList.add("col-6");
    skillElement.innerHTML = `
      <p><img src="resources/images/logo/${skill.logo}" alt="logo_${skill.name.toLowerCase()}" width="32" class="mx-3">${skill.name}</p>
    `;
    skillsContainer.appendChild(skillElement);
});


// Bloc Expérience
const experiences = [
  { year: "2021-2024", position: "Administrateur système", company: "Modis", client: "Client BNP" },
  { year: "2021", position: "Technicien Informatique", company: "Modis", client: "Client SNCF" },
  { year: "2018-2020", position: "Administrateur système", company: "Modis", client: "Client SNCF" },
  { year: "2017-2018", position: "Technicien Informatique", company: "Modis", client: "Client SNCF" },
  { year: "2013-2017", position: "Technicien Informatique", company: "Neurones IT", client: "Client SNCF" }
];

const experienceContainer = document.getElementById("experienceContainer");

experiences.forEach(experience => {
    const experienceElement = document.createElement("p");
    experienceElement.innerHTML = `
      <i class="fa-solid fa-building px-3 fa-lg"></i>
      ${experience.year} - ${experience.position} @ ${experience.company} # ${experience.client}
    `;
    experienceContainer.appendChild(experienceElement);
});

// Bloc SoftSkills
const skillsCategories = [
  {
    title: "Soft Skills",
    skills: ["Communication", "Esprit d'équipe", "Organisé", "Adaptabilité"]
  },
  {
    title: "Qualités personnelles",
    skills: ["Gestion du stress", "Optimisme", "Bienveillance", "Orientation client"]
  }
];

const softSkillsContainer = document.getElementById("softSkillsContainer");

skillsCategories.forEach(category => {
    const categoryElement = document.createElement("div");
    categoryElement.classList.add("col-6");

    const listElement = document.createElement("ul");
    category.skills.forEach(skill => {
        const listItemElement = document.createElement("li");
        listItemElement.classList.add("px-3");
        listItemElement.textContent = skill;
        listElement.appendChild(listItemElement);
    });

categoryElement.appendChild(listElement);
softSkillsContainer.appendChild(categoryElement);
});

// Bloc Projet Git
const projects = [
    { 
      name: "OFIT",
      image: "/resources/images/projects/ofit-project.png",
      stack: "(PHP/Symfony/JS natif)",
      infoLink: "#",
      githubLink: "https://github.com/MathiasSHAKOURI/ofit",
      description: "OFIT est un site web dédié à la santé et au sport, développé en utilisant :<br>" +
               "- PHP avec le framework Symfony<br>" +
               "- JavaScript pour une expérience utilisateur dynamique<br>" +
               "- Une base de données MariaDB pour stocker les articles, les programmes et les utilisateurs<br><br>" +
               "Ce projet, réalisé dans le cadre de ma formation, vise à fournir une plateforme complète pour les amateurs de fitness, offrant des fonctionnalités telles que la gestion d'entraînements personnalisés, le suivi des performances, et des conseils de bien-être."
    },
    { 
      name: "Portofolio",
      image: "/resources/images/projects/portofolio-project.png",
      stack: "(HTML/CSS/JS natif)",
      infoLink: "#",
      githubLink: "https://github.com/MathiasSHAKOURI/portofolio",
      description: "Ce projet constitue un portofolio professionnel développé en utilisant uniquement HTML, CSS, et JavaScript natif.<br><br>" +
      "Conçu pour la simplicité, il ne nécessite que Bootstrap et Font Awesome pour les icônes.<br><br>" +
      "L'interface est simple et épuré, mettant en valeur le profil."
    },
    { 
      name: "OmdbFlix",
      image: "/resources/images/projects/omdbflix-project.png",
      stack: "(PHP/Symfony/JS natif)",
      infoLink: "#",
      githubLink: "https://github.com/MathiasSHAKOURI/omdb-flix",
      description: "OmdbFlix est un site web dédié au cinéma et aux séries, développé en utilisant :<br>" +
      "- PHP avec le framework Symfony<br>" +
      "- JavaScript pour une expérience utilisateur dynamique<br>" +
      "- Une base de données MariaDB pour stocker les films, séries, commentaires et utilisateurs<br><br>" +
      "Ce projet, réalisé dans le cadre de ma formation, vise à fournir une plateforme complète pour les amateurs de cinéma et de séries."
    },
    { 
      name: "Clickbanner",
      image: "/resources/images/projects/clickbanner-project.png",
      stack: "(JS natif)",
      infoLink: "http://click-banner/",
      githubLink: "https://github.com/MathiasSHAKOURI/click-banner",
      description: "Ce projet vise à explorer les concepts de reconnaissance du clavier en utilisant JavaScript.<br><br>" +
      "L'objectif est de créer une application légère permettant de détecter et de réagir aux entrées clavier en temps réel. En utilisant les fonctionnalités offertes par JavaScript, le projet offre une expérience interactive pour mieux comprendre le fonctionnement de la détection des touches du clavier dans un contexte web.<br><br>" +
      "Idéal pour les débutants cherchant à approfondir leurs connaissances en manipulation d'événements et en interaction avec l'interface utilisateur.<br><br>" +
      "<a href='http://click-banner/'>Voir la démo ici</a>"
    },
    { 
        name: "Projets à venir",
        image: "/resources/images/projects/work-in-progress-project.png",
        stack: "(...)",
        infoLink: "#",
        githubLink: "#",
        description: "Projets à venir."
    }
];

const projectsContainer = document.getElementById("projectsContainer");

projects.forEach(project => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("col-6");

    const projectDetails = `
    <div class="px-3 text-center">
      <img src="${project.image}" alt="${project.name}-project" class="img-fluid" id="image-project" height="50">
      <div class="pb-3">
        <p class="pt-3 fw-semibold mb-0">${project.name}</p>
        <p class="mb-1" id="font-size-project">${project.stack}</p>
        <a href="javascript:void(0);" id="infoButton" class="p-2">Infos</a> 
        <a href="${project.githubLink}" class="p-2">Github</a>
      </div>
    </div>
  `;

projectElement.innerHTML = projectDetails;
projectsContainer.appendChild(projectElement);

const infoButton = projectElement.querySelector("#infoButton");

infoButton.addEventListener("click", function() {
  openModal(project);
});
});

// Popup information
function openModal(project) {
  const modal = document.getElementById("projectModal");
  modal.style.display = "block";

  modal.offsetHeight;
  modal.style.opacity = 1;
  modal.style.transition = "opacity 1s";

  const modalProjectName = document.getElementById("modalProjectName");
  const modalProjectDescription = document.getElementById("modalProjectDescription");
  const modalProjectImage = document.getElementById("modalProjectImage");

  modalProjectName.textContent = project.name;
  modalProjectDescription.innerHTML  = project.description;

  modalProjectImage.src = project.image;
  modalProjectImage.alt = project.name + "-image";
};

const closeButton = document.getElementById("projectModal");
closeButton.addEventListener("click", closeModal);

function closeModal() {
  const modal = document.getElementById("projectModal");
  modal.style.opacity = 0;
  modal.style.transition = "opacity 1s";

  modal.classList.add("closing");

  modal.addEventListener("transitionend", function handler() {
    modal.style.display = "none";
    modal.classList.remove("open", "closing");
    modal.style.opacity = "";
    modal.style.transition = "";
    modal.removeEventListener("transitionend", handler);
  });
};

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape" || event.keyCode === 27) {
    closeModal();
  }
});

});