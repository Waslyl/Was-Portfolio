const translations = {
    en: {
        home: "Home",
        about: "About",
        projects: "Projects",
        skills: "Skills",
        viewProjects: "View Projects",
        contactMe: "Contact Me",
        aboutMe: "About Me",
        yearsOfCoding: "Years of Coding",
        yearsOld: "Years Old",
        grade: "Grade",
        myProjects: "My Projects",
        skillsAndTech: "Skills & Technologies",
        webDev: "Web Development",
        progLang: "Programming Languages",
        otherSkills: "Other Skills",
        reverseEng: "Reverse Engineering",
        viewProject: "View Project",
        aboutText: `Hey, I'm Was, I'm French and I live in Lyon, France.
I'm from an international school, I speak 4 languages (French, English, German and a bit of Spanish).
I'm a young developer with a passion for coding since 4 years ago.
I've done a lot of projects such as GalaxiaFN that is a remake of the famous game Fortnite Battle Royal.
As a developer, I have experience in C# and C++ and I'm currently learning Python for AI and Computer Science.`
    },
    fr: {
        home: "Accueil",
        about: "À propos",
        projects: "Projets",
        skills: "Compétences",
        viewProjects: "Voir les Projets",
        contactMe: "Me Contacter",
        aboutMe: "À Propos de Moi",
        yearsOfCoding: "Ans de Code",
        yearsOld: "Ans",
        grade: "Classe",
        myProjects: "Mes Projets",
        skillsAndTech: "Compétences & Technologies",
        webDev: "Développement Web",
        progLang: "Langages de Programmation",
        otherSkills: "Autres Compétences",
        reverseEng: "Rétro-ingénierie",
        viewProject: "Voir le Projet",
        aboutText: `Salut, c'est Was, je suis Français et j'habite à Lyon.
Je suis dans une école internationale et je parle 4 langues (Français, Anglais, Allemand et un peu d'Espagnol).
Je suis un jeune développeur passionné par la programmation depuis 4 ans.
J'ai réalisé de nombreux projets comme GalaxiaFN qui est une reproduction du célèbre jeu Fortnite Battle Royal.
En tant que développeur, j'ai de l'expérience en C# et C++ et j'apprends actuellement Python pour l'IA et les Computer Science.`
    }
};

const typingTexts = {
    en: ["15 years Old Programmer since 4 years ", "Developer in C#, C++, Javascript", "Learning Python, Electron and Reverse Engineering "],
    fr: ["Programmeur de 15 ans depuis 4 ans", "Développeur en C#, C++, Javascript", "Apprend le Python, l'Electron et la Rétro-ingénierie"]
};

let currentLanguage = 'en';
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingElement = document.querySelector('.typing-text');

function updateContent(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('.project-card .btn').forEach(button => {
        button.textContent = translations[lang].viewProject;
    });

    const aboutTextContainer = document.querySelector('.about-text');
    if (aboutTextContainer) {
        const enContent = aboutTextContainer.querySelector('.en-content');
        const frContent = aboutTextContainer.querySelector('.fr-content');
        
        if (lang === 'en') {
            enContent.style.display = 'block';
            frContent.style.display = 'none';
        } else {
            enContent.style.display = 'none';
            frContent.style.display = 'block';
        }
    }
}

function switchLanguage(lang) {
    currentLanguage = lang;
    currentTextIndex = 0;
    currentCharIndex = 0;
    isDeleting = false;
    
    updateContent(lang);

    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`button[onclick="switchLanguage('${lang}')"]`).classList.add('active');
}

function typeText() {
    const texts = typingTexts[currentLanguage];
    const currentText = texts[currentTextIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        typingElement.textContent = currentText.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }

    if (!isDeleting && currentCharIndex === currentText.length) {
        setTimeout(() => isDeleting = true, 1500);
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % texts.length;
    }

    const typingSpeed = isDeleting ? 100 : 200;
    setTimeout(typeText, typingSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    typeText();
    updateContent('en');
});
