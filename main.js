document.addEventListener('DOMContentLoaded', function () {
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const backgroundDiv = document.querySelector('.background');

    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            backgroundDiv.style.backgroundColor = 'rgb(6, 1, 34)'; 
        } else {
            backgroundDiv.style.backgroundColor = 'skyblue'; 
        }
    });

    // Intersection Observer for hidden elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden'); 
    hiddenElements.forEach((el) => observer.observe(el));

    // Smooth Scroll to "hidden" section
    const scrollButton = document.getElementById('scroll-hidden');
    const targetDiv = document.getElementById('hidden');

    if (scrollButton && targetDiv) {
        scrollButton.addEventListener('click', () => {
            targetDiv.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Smooth Scroll to "skills" section
    const scrollSkillsButton = document.getElementById('scroll-skills');
    const skillsSection = document.getElementById('skills');

    if (scrollSkillsButton && skillsSection) {
        scrollSkillsButton.addEventListener('click', () => {
            skillsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Smooth Scroll to email section
    const scrollEmailButton = document.getElementById('scroll-email');
    const emailSection = document.getElementById('scrollemail');

    if (scrollEmailButton && emailSection) {
        scrollEmailButton.addEventListener('click', () => {
            emailSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Intersection Observer for skill cards
    const skillCards = document.querySelectorAll('.skill-card');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    skillCards.forEach((card, index) => {
        const delay = index * 0.2; 
        card.style.animationDelay = `${delay}s`;
        skillObserver.observe(card);
    });
});

const scrollProjectsButton = document.getElementById('scroll-projects');
const projectsSection = document.getElementById('project');

// Add click event listener to the button
if (scrollProjectsButton && projectsSection) {
    scrollProjectsButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default anchor click behavior

        // Scroll to the target section
        projectsSection.scrollIntoView({
            behavior: 'smooth' // Enables smooth scrolling
        });
    });
}