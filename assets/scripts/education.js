var logoDir = "assets/media/images/college-logos/";
var iconDir = "assets/media/svgs/education-fields/"

const fieldIcons = {
    "institute": "mortarboard.svg",
    "duration": "calendar4-week.svg",
    "subject": "book.svg",
    "grade": "award.svg"
}

const educations = [
    {
        "title": "Class 10th",
        "logo": "APS_Logo.png",
        "institute": "Army Public School, Amritsar",
        "startYear": 2021,
        "endYear": 2022,
        "subject": null,
        "grade": 93.2,
        "status": "Completed"
    },
    {
        "title": "Class 12th / High School",
        "logo": "APS_Logo.png",
        "institute": "Army Public School, Amritsar",
        "startYear": 2023,
        "endYear": 2024,
        "subject": "Science : Non Medical",
        "grade": 91.2,
        "status": "Completed"
    },
    {
        "title": "College",
        "logo": "SST.svg",
        "institute": "Scaler School of Technology",
        "startYear": 2024,
        "endYear": null,
        "subject": "Computer Science",
        "grade": null,
        "status": "Imminent"
    },
    {
        "title": "Online Degree",
        "logo": "IIT_Madras_Logo.png",
        "institute": "Indian Institute of Technology, Madras",
        "startYear": 2024,
        "endYear": null,
        "subject": "BS in Data Science and Applications",
        "grade": null,
        "status": "In Progress"
    },
    {
        "title": "Online Degree",
        "logo": "BITS_Pilani-Logo.png",
        "institute": "Birla Institute of Technology & Science, Pilani",
        "startYear": 2024,
        "endYear": null,
        "subject": "BSc in Computer Science",
        "grade": null,
        "status": "Imminent"
    },
    {
        "title": "Online Degree",
        "logo": "Woolf_University_Logo.png",
        "institute": "Woolf University",
        "startYear": 2027,
        "endYear": null,
        "subject": "MSc in Computer Science",
        "grade": null,
        "status": "Imminent"
    }
];


var container = document.getElementById('education-card-wrapper');

educations.forEach(education => {
    if (!education.endYear || education.endYear == null) {
        education.endYear = '20XX';
    }

    const card = document.createElement('div');
    card.className = 'education-card';

    const header = document.createElement('header');
    header.innerText = education.title;
    card.appendChild(header);

    const infoWrappper = document.createElement('div');
    infoWrappper.className = 'info';
    card.appendChild(infoWrappper);

    if (education.institute) {
        const row = document.createElement('div');
        row.className = 'row';
        infoWrappper.appendChild(row);

        const icon = document.createElement('div');
        icon.className = 'icon';
        icon.innerHTML = `<svg data-src="${iconDir + fieldIcons.institute}" height="16" width="16"></svg>`;
        row.appendChild(icon);

        const value = document.createElement('span');
        value.innerText = education.institute;
        row.appendChild(value);
    }

    if (education.startYear) {
        const row = document.createElement('div');
        row.className = 'row';
        infoWrappper.appendChild(row);

        const icon = document.createElement('div');
        icon.className = 'icon';
        icon.innerHTML = `<svg data-src="${iconDir + fieldIcons.duration}" height="16" width="16"></svg>`;
        row.appendChild(icon);

        const value = document.createElement('span');
        value.innerText = education.startYear + ' - ' + education.endYear;
        row.appendChild(value);
    }

    if (education.subject) {
        const row = document.createElement('div');
        row.className = 'row';
        infoWrappper.appendChild(row);

        const icon = document.createElement('div');
        icon.className = 'icon';
        icon.innerHTML = `<svg data-src="${iconDir + fieldIcons.subject}" height="16" width="16"></svg>`;
        row.appendChild(icon);

        const value = document.createElement('span');
        value.innerText = education.subject;
        row.appendChild(value);
    }

    if (education.grade) {
        const row = document.createElement('div');
        row.className = 'row';
        infoWrappper.appendChild(row);

        const icon = document.createElement('div');
        icon.className = 'icon';
        icon.innerHTML = `<svg data-src="${iconDir + fieldIcons.grade}" height="16" width="16"></svg>`;
        row.appendChild(icon);

        const value = document.createElement('span');
        value.innerText = education.grade + '%';
        row.appendChild(value);
    }

    const instituteLogoWrapper = document.createElement('div');
    instituteLogoWrapper.className = 'institute-logo';
    card.appendChild(instituteLogoWrapper);

    const img = document.createElement('img');
    img.src = logoDir + education.logo;
    img.alt = `${education.institute}`;
    instituteLogoWrapper.appendChild(img);

    const educationStatus = document.createElement('div');
    educationStatus.className = 'education-status';
    educationStatus.innerText = education.status;
    card.appendChild(educationStatus);

    container.appendChild(card);
});