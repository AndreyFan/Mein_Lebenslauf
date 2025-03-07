const translations = {
    en: {
        profession: "Front-End Developer",
        name: "Andrii Fandieiev",
        description: "Goal-oriented, active, result-driven. I love constant self-improvement, both spiritually and physically. No bad habits. I am used to making decisions and organizing teamwork. I love team games, chess, swimming.",
        experienceTitle: "Experience",
        educationTitle: "Education",
        techSkills: "Tech Skills",
        softSkills: "Soft Skills",
        contacts: "Contacts"
    },
    de: {
        profession: "Front-End Entwickler",
        name: "Andrii Fandieiev",
        description: "Zielstrebig, aktiv, ergebnisorientiert. Ich liebe die ständige Weiterentwicklung von spirituell zu körperlich. Keine schlechten Angewohnheiten. Ich bin es gewohnt, Entscheidungen zu treffen und Teamarbeit zu organisieren. Ich liebe Mannschaftsspiele, Schach, Schwimmen.",
        experienceTitle: "Erfahrung",
        educationTitle: "Bildung",
        techSkills: "Technische Fähigkeiten",
        softSkills: "Soziale Kompetenzen",
        contacts: "Kontakte"
    }
};

function changeLanguage(lang) {
    document.querySelector(".my-profession").innerText = translations[lang].profession;
    document.querySelector(".my-name").innerText = translations[lang].name;
    document.querySelector(".my-descr").innerText = translations[lang].description;
    document.querySelector(".main-content-title").innerText = translations[lang].experienceTitle;
    document.querySelector(".sidebar-title:nth-of-type(1)").innerText = translations[lang].contacts;
    document.querySelector(".sidebar-title:nth-of-type(2)").innerText = translations[lang].techSkills;
    document.querySelector(".sidebar-title:nth-of-type(3)").innerText = translations[lang].softSkills;
}
