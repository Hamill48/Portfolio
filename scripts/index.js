const welcomeContainer = document.querySelector('.welcome-container');
const aboutMeContainer = document.querySelector('.about-me-container');
const projectsContainer = document.querySelector('.projects-container');
const aboutMe = document.querySelector('.about-me');
const myProjects = document.querySelector('.my-projects');

projectsContainer.addEventListener("mouseover", () => {
    aboutMe.style.color = "gray";
    myProjects.style.color = "white";
})

aboutMeContainer.addEventListener("mouseover", () => {
    aboutMe.style.color = "white";
    myProjects.style.color = "gray";
})