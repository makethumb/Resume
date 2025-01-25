document.addEventListener('DOMContentLoaded', () => {
      const data = {
        "personalInformation": {
          "name": "Sondip Day Shuvo",
          "email": "sondipday4@gmail.com",
          "github": "https://github.com/sondip702",
          "linkedin": "https://www.linkedin.com/in/sondip-day-490a11335/",
          "portfolio": null
        },
        "education": [
          {
            "university": "North East University Bangladesh",
            "degree": "BSc (Eng) in Computer Science & Engineering",
            "location": "Sylhet",
            "dates": "Dec 2024",
            "gpa": "3.00/4.00",
            "relevantCoursework": [
              "Data Structure and Algorithm",
              "OOP",
              "Machine Learning",
              "Deep Learning",
              "Database Management System",
              "Computer Networking",
              "Web Engineering",
              "Software Engineering",
              "Communication Engineering",
              "Artificial Intelligence"
            ]
          }
        ],
        "projects": [
          {
            "name": "Real state project",
            "technologies": [
              "React",
              "Node.js",
              "Express",
              "mongodb"
            ],
            "description": [
              "It was change rate when user change it.",
              "Applyer login the system the can buy any house."
            ]
          },
          {
            "name": "Movie App (Backend)",
            "technologies": [
              "Node.js",
              "Express",
              "mongodb"
            ],
            "description": [
              "It was update real time data",
              "It was connect with front-end user."
            ]
          }
        ],
        "achievements": [
          {
            "name": "Participated in the CTF (CTF)",
            "details": null
          }
        ],
        "technicalSkills": {
          "languages": [
            "Python",
            "C++",
            "C",
            "Java",
            "JavaScript",
            "SQL",
            "Bash"
          ],
          "versionControl": [
            "Git",
            "GitHub"
          ],
          "cybersecurity": [
            "Scripting",
            "Network security control",
            "Operating systems",
            "Threat knowledge",
            "Website vulnerability",
            "Risk identification and management",
            "Attack surface management"
          ],
          "os": [
            "Linux",
            "Windows"
          ],
          "backend": [
            "Node.js",
            "Express"
          ]
        }
      };

      // Personal Information
      document.getElementById('name').textContent = data.personalInformation.name;
      document.getElementById('email').textContent = data.personalInformation.email;
      
      const githubLink = document.getElementById('github-link');
      githubLink.href = data.personalInformation.github;
      
      const linkedinLink = document.getElementById('linkedin-link');
      linkedinLink.href = data.personalInformation.linkedin;

      // Education
      const educationDetails = document.getElementById('education-details');
      const education = data.education[0];
      educationDetails.innerHTML = `
        <h3>${education.university}</h3>
        <p>${education.degree} | ${education.location}</p>
        <p>Graduation: ${education.dates} | GPA: ${education.gpa}</p>
        <h4>Relevant Coursework:</h4>
        <ul>${education.relevantCoursework.map(course => `<li>${course}</li>`).join('')}</ul>
      `;

      // Projects
      const projectsList = document.getElementById('projects-list');
      data.projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.innerHTML = `
          <h3>${project.name}</h3>
          <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
          <ul>${project.description.map(desc => `<li>${desc}</li>`).join('')}</ul>
        `;
        projectsList.appendChild(projectDiv);
      });

      // Technical Skills
      document.getElementById('languages-list').innerHTML = 
        data.technicalSkills.languages.map(lang => `<li>${lang}</li>`).join('');
      
      document.getElementById('backend-list').innerHTML = 
        data.technicalSkills.backend.map(tech => `<li>${tech}</li>`).join('');
      
      document.getElementById('cybersecurity-list').innerHTML = 
        data.technicalSkills.cybersecurity.map(skill => `<li>${skill}</li>`).join('');
      
      document.getElementById('os-vc-list').innerHTML = 
        [...data.technicalSkills.os, ...data.technicalSkills.versionControl]
          .map(item => `<li>${item}</li>`).join('');

      // Achievements
      const achievementsList = document.getElementById('achievements-list');
      data.achievements.forEach(achievement => {
        const achievementDiv = document.createElement('div');
        achievementDiv.innerHTML = `
          <h3>${achievement.name}</h3>
          ${achievement.details ? `<p>${achievement.details}</p>` : ''}
        `;
        achievementsList.appendChild(achievementDiv);
      });

      // Initialize AOS
      AOS.init();
    });