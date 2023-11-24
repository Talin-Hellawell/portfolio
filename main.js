
const themeToggle = document.getElementById('themeToggle');
const backgroundDiv = document.querySelector('.background');


themeToggle.addEventListener('change', function() {
  if (this.checked) {
    backgroundDiv.style.backgroundColor = 'rgb(6, 1, 34)'; 
  } else {
    backgroundDiv.style.backgroundColor = 'skyblue'; 
  }
});

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





const scrollButton = document.getElementById('Scroll');
    const targetDiv = document.getElementById('hidden');

    scrollButton.addEventListener('click', () => {
    
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    });


    const scrollSkills = document.getElementById('Scroll-Skills');
    const skills = document.getElementById('Skills');
    scrollSkills.addEventListener('click', () => {
        skills.scrollIntoView({ behavior: 'smooth' });
    });


    const scrollEmailButton = document.getElementById('scroll-email');
    const emailSection = document.getElementById('scrollemail');
    
    scrollEmailButton.addEventListener('click', () => {
        emailSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    const skillCards = document.querySelectorAll('.skill-card');
    
    const skillObserver = new IntersectionObserver((entries, observer) => {
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

//React

