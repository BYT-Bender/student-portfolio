var iconDir = "assets/media/svgs/programming-languages/";

const proficiencyLevels = {
    1: {name: "Beginner", color: "#1E90FF"},
    2: {name: "Intermediate", color: "#32CD32"},
    3: {name: "Advanced", color: "#FFA500"},
    4: {name: "Expert", color: "#8A2BE2"}
}

const languages = [
    {
        "shortForm": "HTML",
        "fullForm": "Hypertext Markup Language",
        "icon": "html5-original.svg",
        "proficiency": 4,
        "experience": "3",
        "certificate": ""
    },
    {
        "shortForm": "CSS",
        "fullForm": "Cascading Style Sheets",
        "icon": "css3-original.svg",
        "proficiency": 4,
        "experience": "3",
        "certificate": ""
    },
    {
        "shortForm": "Sass",
        "fullForm": "Syntactically Awesome Style Sheets",
        "icon": "sass-original.svg",
        "proficiency": 4,
        "experience": "3",
        "certificate": ""
    },
    {
        "shortForm": "JS",
        "fullForm": "Javascript",
        "icon": "javascript-original.svg",
        "proficiency": 4,
        "experience": "3",
        "certificate": ""
    },
    {
        "shortForm": "Java",
        "fullForm": "Java",
        "icon": "java-original.svg",
        "proficiency": 1,
        "experience": "3",
        "certificate": ""
    },
    {
        "shortForm": "Python",
        "fullForm": "Python",
        "icon": "python-original.svg",
        "proficiency": 3,
        "experience": "3",
        "certificate": ""
    },
    {
        "shortForm": "C",
        "fullForm": "C",
        "icon": "c-original.svg",
        "proficiency": 1,
        "experience": "3",
        "certificate": ""
    },
    {
        "shortForm": "C++",
        "fullForm": "C plus plus",
        "icon": "cplusplus-original.svg",
        "proficiency": 1,
        "experience": "3",
        "certificate": ""
    },
    {
        "shortForm": "C#",
        "fullForm": "C-Sharp",
        "icon": "csharp-original.svg",
        "proficiency": 1,
        "experience": "3",
        "certificate": ""
    },
    {
        "shortForm": "PHP",
        "fullForm": "Hypertext Preprocessor",
        "icon": "php-original.svg",
        "proficiency": 4,
        "experience": "3",
        "certificate": ""
    },
    {
        "shortForm": "SQL",
        "fullForm": "Structured Query Language",
        "icon": "azuresqldatabase-original.svg",
        "proficiency": 4,
        "experience": "3",
        "certificate": ""
    },
    {
        "shortForm": "JSON",
        "fullForm": "JavaScript Object Notation",
        "icon": "json-original.svg",
        "proficiency": 4,
        "experience": "3",
        "certificate": ""
    }
];


var container = document.getElementById('skill-card-wrapper');

languages.forEach(language => {
    const card = document.createElement('div');
    card.className = 'skill-card';

    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'image-wrapper';
    card.appendChild(imgWrapper);

    const img = document.createElement('img');
    img.src = iconDir + language.icon;
    img.alt = language.fullForm;
    imgWrapper.appendChild(img);

    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = language.shortForm;
    card.appendChild(title);

    container.appendChild(card);
});