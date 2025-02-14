document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor-glow');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

const projects = [
    {
        title: 'GalaxiaFN-AutoHost',
        description: 'A Fortnite Autohost Emulator that allows players to play old versions of the game. This program emulates old game files to work with new ones and includes an auto-restart feature.',
        technologies: ['C#', 'Game Development', 'Emulation'],
        stats: {
            stars: 23,
            forks: 4,
            issues: 2,
            contributors: 2
        },
        link: 'https://github.com/waslyl/GalaxiaFN-AutoHost'
    },
    {
        title: 'FortniteBuild-Installer',
        description: 'A C# Console Application that simplifies the installation of different Fortnite builds. Available in 5 languages, it helps the Fortnite OG Community download and install their favorite builds quickly and easily.',
        technologies: ['C#', 'Console Application', 'Multi-language Support'],
        stats: {
            stars: 15,
            forks: 2,
            issues: 1,
            contributors: 1
        },
        link: 'https://github.com/waslyl/FortniteBuild-Installer'
    }
];

const projectGrid = document.querySelector('.project-grid');
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.setAttribute('data-aos', 'fade-up');
    projectCard.innerHTML = `
        <div class="project-card-header">
            <i class="far fa-folder"></i>
            <h3>${project.title}</h3>
        </div>
        <p>${project.description}</p>
        <div class="technologies">
            ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
        </div>
        <div class="project-stats">
            <div class="project-stat">
                <i class="far fa-star"></i>
                ${project.stats.stars}
            </div>
            <div class="project-stat">
                <i class="fas fa-code-branch"></i>
                ${project.stats.forks}
            </div>
            <div class="project-stat">
                <i class="far fa-dot-circle"></i>
                ${project.stats.issues}
            </div>
            <div class="project-stat">
                <i class="fas fa-users"></i>
                ${project.stats.contributors}
            </div>
        </div>
        <a href="${project.link}" class="btn primary" target="_blank">
            <i class="fab fa-github"></i>
            View Project
        </a>
    `;
    projectGrid.appendChild(projectCard);
});

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        console.log('Form submitted:', formData);
        contactForm.reset();
        alert('Message sent successfully!');
    });
}

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach((element) => {
    observer.observe(element);
});

window.addEventListener('load', () => {
    document.querySelectorAll('[data-aos]').forEach((element) => {
        element.classList.add('aos-animate');
    });
});
