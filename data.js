// Data object holding all personal and professional information
const personalData = {
    name: "Molopeng Elmon Sekgobela",
    bio: "Web and app development enthusiast with a passion for continuous learning.",
    email: "molopengelmon06@gmail.com",
    phone: "068 514 6432",
    address: "32A Devenish Street, Polokwane, Central",
    socialMedia: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com"
    },
    education: [
        { degree: "National N Diploma in Public Relations", school: "Central Technical College", year: "2017" },
        { degree: "Matriculation Certificate", school: "Jane Furse Comprehensive School", year: "2014" }
    ],
    skills: [
        "HTML, CSS, JavaScript",
        "Bootstrap",
        "Communication",
        "Continuous Learning"
    ]
};

// Function to render the data dynamically
function renderPageData() {
    if (document.getElementById('bio')) {
        document.getElementById('bio').textContent = personalData.bio;
    }

    if (document.querySelector('.footer-text p')) {
        document.querySelector('.footer-text p').textContent = personalData.address;
    }

    const socialIcons = document.querySelectorAll('.social-icons a');
    if (socialIcons.length > 0) {
        socialIcons[0].href = personalData.socialMedia.facebook;
        socialIcons[1].href = personalData.socialMedia.twitter;
        socialIcons[2].href = personalData.socialMedia.instagram;
    }

    // Additional elements like education, skills could be similarly added
}

// Event listener for DOM content loaded
document.addEventListener('DOMContentLoaded', renderPageData);

// Formspree form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(this);

            fetch('https://formspree.io/f/{your_form_id}', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    alert('Thank you for your message. We will get back to you soon!');
                    contactForm.reset();
                } else {
                    response.json().then(data => {
                        if (data.errors) {
                            alert('Please check your entries and try again.');
                        }
                    });
                }
            }).catch(error => {
                alert('There was a problem with your submission: ' + error.message);
            });
        });
    }
});
