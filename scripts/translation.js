const flagImage = document.querySelector(".flag img");

let translations = {
    en: {
        navigation: {
            about: "About",
            services: "Services",
            team: "Team",
            testimonials: "Testimonials",
            contact: "Contact",
        },
        heroSection: {
            mainTitle: "Simplify Your Financial Journey <span>With Us</span>!",
            mainSubtitle: "Streamlined Consultancy and Financial Services for UK Businesses and Individuals",
            button: "Get Started",
            highlights: {
                experience: "Years Of <br> Experience",
                customers: "Active <br> Customers",
                satisfaction: "Satisfaction <br> Guaranteed"
            },
        },
        aboutSection: {
            aboutTitle: "About ALC GROUP",
            aboutTextFirst: "At ALC GROUP, we are dedicated to providing top-notch consultancy and financial services in the UK. With years of experience and a team of skilled professionals, we are here to empower individuals and businesses to achieve their financial goals.",
            aboutTextSecond: "Our mission is to simplify complex financial matters and help our clients navigate through various financial challenges. Whether you are seeking assistance with tax returns, VAT returns, LTD registration, student finance, NINO/NVG, UTR/CIS, benefits, or any other financial aspect, we have got you covered.",
            button: "Services"
        },
        servicesSection: {
            servicesTitle: "Our Services",
            personalFinancialTitle: "Personal Financial Solutions",
            businessFinancialTitle: "Business Financial Solutions",
            professionalConsultancyTitle: "Professional Consultancy Services",
            personalFinancialText: "When it comes to managing your personal finances, we provide a range of services to help you navigate the complexities and achieve your financial goals.",
            businessFinancialText: "Running a successful business requires effective financial management. Our team of experts can help you fulfill your business’ potential.",
            professionalConsultancyText: "Our professional consultancy services are aimed at individuals and businesses seeking strategic financial guidance.",
            contactText: "Ready to take control of your financial success? Don't wait any longer.",
            button: "Contact"
        },
        teamSection: {
            teamTitle: "Our Team",
            teamText: "Meet a part of our exceptional team of financial experts!"
        },
        testimonialsSection: {
            testimonialsTitle: "Testimonials",
            testimonialsSubtitle: "Don’t take our word for granted. See what our customers have said!",
            testimonialsTextFirst: "Working with ALC GROUP has been a game-changer for my personal finances. Their expertise and guidance in handling my tax returns were invaluable. I highly recommend their services to anyone seeking professional financial assistance.",
            testimonialsTextSecond: "The team at ALC GROUP is exceptional. Their dedication and professionalism in providing financial advice have helped me make informed decisions. I am grateful for their support and highly recommend their services.",
            testimonialsTextThird: "ALC GROUP has exceeded my expectations in providing top-notch financial services. Their attention to detail and personalized approach have made a significant impact on my financial success. I wouldn't hesitate to recommend them to others."
        }
        ,
        contactSection: {
            title: "Get in touch!",
            nameLabel: "Name",
            emailLabel: "Email",
            messageLabel: "Message",
            messagePlaceholder: "Type your message...",
            submitButton: "Submit",
            address: "100b Crow House North Circular Road, London, NW10 7PN",
            email: "alcgrouplimited@gmail.com",
            phone: "01823 256843 | 07402 883319",
            backButton: "Back To Top"
        },
        footerSection: {
            rightsReserved: "© ALC GROUP 2023. All rights reserved."
        }

    },

    ro: {
        navigation: {
            about: "Despre",
            services: "Servicii",
            team: "Echipă",
            testimonials: "Testimoniale",
            contact: "Contactați-ne",
        },
        heroSection: {
            mainTitle: "Simplificați-vă <span>călătoria financiară</span> cu noi!",
            mainSubtitle: "Servicii de consultanță și finanțe pentru companii și persoane fizice din Marea Britanie",
            button: "Începeți",
            highlights: {
                experience: "Ani de <br> Experiență",
                customers: "Clienți <br> Activi",
                satisfaction: "Satisfacție <br> Garantata"
            },
        },
        aboutSection: {
            aboutTitle: "Despre ALC GROUP",
            aboutTextFirst: "La ALC GROUP, suntem dedicați furnizării serviciilor de consultanță și finanțe de cea mai înaltă calitate în Marea Britanie. Cu ani de experiență și o echipă de profesioniști calificați, suntem aici pentru a împuternici persoanele fizice și afacerile să-și atingă obiectivele financiare.",
            aboutTextSecond: "Misiunea noastră este să simplificăm problemele financiare complexe și să ajutăm clienții noștri să navigheze prin diverse provocări financiare. Indiferent dacă aveți nevoie de asistență în completarea declarațiilor de impozit, declarațiilor de VAT, înregistrarea companiilor LTD, finanțare pentru studenți, NINO/NVG, UTR/CIS, beneficii sau orice alt aspect financiar, suntem aici pentru a vă ajuta.",
            button: "Servicii <i class='fa-solid fa-arrow-right'></i>"
        },
        servicesSection: {
            servicesTitle: "Serviciile Noastre",
            personalFinancialTitle: "Soluții financiare personale",
            businessFinancialTitle: "Soluții financiare pentru afaceri",
            professionalConsultancyTitle: "Servicii de consultanță profesionale",
            personalFinancialText: "Când vine vorba de gestionarea finanțelor personale, oferim o gamă de servicii pentru a vă ajuta să navigați prin complexități și să vă atingeți obiectivele financiare.",
            businessFinancialText: "Pentru a conduce o afacere de succes, este nevoie de o gestionare financiară eficientă. Echipa noastră de experți vă poate ajuta să vă realizați potențialul afacerii.",
            professionalConsultancyText: "Serviciile noastre de consultanță profesionale sunt adresate persoanelor fizice și afacerilor care caută îndrumare financiară strategică.",
            contactText: "Ești pregătit să preiei controlul succesului tău financiar? Nu mai aștepta.",
            button: "Contactați-ne"
        },
        teamSection: {
            teamTitle: "Echipa Noastră",
            teamText: "Cunoașteți o parte din echipa noastră excepțională de experți financiari!"
        },
        testimonialsSection: {
            testimonialsTitle: "Testimoniale",
            testimonialsSubtitle: "Nu luați cuvântul nostru ca atare. Vedeți ce spun clienții noștri!",
            testimonialsTextFirst: "Colaborarea cu ALC GROUP a fost o schimbare radicală pentru finanțele mele personale. Experiența și îndrumarea lor în gestionarea declarațiilor mele de impozit au fost neprețuite. Recomand cu încredere serviciile lor oricui caută asistență financiară profesională.",
            testimonialsTextSecond: "Echipa de la ALC GROUP este excepțională. Dedicarea și profesionalismul lor în furnizarea de sfaturi financiare m-au ajutat să iau decizii informate. Sunt recunoscător pentru sprijinul lor și recomand cu încredere serviciile lor.",
            testimonialsTextThird: "ALC GROUP a depășit așteptările mele în furnizarea de servicii financiare de primă clasă. Atenția lor la detalii și abordarea personalizată au avut un impact semnificativ asupra succesului meu financiar. Nu ezit să îi recomand și altora.",
        },
        contactSection: {
            title: "Contactează-ne!",
            nameLabel: "Nume",
            emailLabel: "Email",
            messageLabel: "Mesaj",
            messagePlaceholder: "Scrieți mesajul dvs...",
            submitButton: "Trimite",
            address: "100b Crow House North Circular Road, Londra, NW10 7PN",
            email: "alcgrouplimited@gmail.com",
            phone: "01823 256843 | 07402 883319",
            backButton: "Înapoi sus"
        },
        footerSection: {
            rightsReserved: "© ALC GROUP 2023. Toate drepturile rezervate."
        }
    }
}
//Set the flag image soruce and change language
flagImage.addEventListener("click", () => {
    if (flagImage.src.includes("united-kingdom")) {
        changeLanguage("en", "./images/romania.png");
    } else {
        changeLanguage("ro", "./images/united-kingdom.png");
    }
})


function changeLanguage(lang, imgSource) {
    // Get the translation object for the selected language
    let translation = translations[lang];
    flagImage.src = imgSource;

    // Update the text content of the HTML elements with the translated versions
    document.querySelector(".nav-links li:nth-of-type(1) a").textContent = translation.navigation.about;
    document.querySelector(".nav-links li:nth-of-type(2) a").textContent = translation.navigation.services;
    document.querySelector(".nav-links li:nth-of-type(3) a").textContent = translation.navigation.team;
    document.querySelector(".nav-links li:nth-of-type(4) a").textContent = translation.navigation.testimonials;
    document.querySelector(".nav-links li:nth-of-type(5) a").textContent = translation.navigation.contact;

    document.querySelector("#hero h1").innerHTML = translation.heroSection.mainTitle;
    document.querySelector("#hero h3").textContent = translation.heroSection.mainSubtitle;
    document.querySelector("#hero a.button").textContent = translation.heroSection.button;

    document.querySelector("#hero .hero-stats div:nth-of-type(1) p").innerHTML = translation.heroSection.highlights.experience;
    document.querySelector("#hero .hero-stats div:nth-of-type(2) p").innerHTML = translation.heroSection.highlights.customers;
    document.querySelector("#hero .hero-stats div:nth-of-type(3) p").innerHTML = translation.heroSection.highlights.satisfaction;

    document.querySelector("#about h2").textContent = translation.aboutSection.aboutTitle;
    document.querySelector("#about p:nth-of-type(1)").textContent = translation.aboutSection.aboutTextFirst;
    document.querySelector("#about p:nth-of-type(2)").textContent = translation.aboutSection.aboutTextSecond;
    document.querySelector("#about a").innerHTML = translation.aboutSection.button;

    document.querySelector("#services h2").textContent = translation.servicesSection.servicesTitle;
    document.querySelector("#services .card:nth-of-type(1) h4").textContent = translation.servicesSection.personalFinancialTitle;
    document.querySelector("#services .card:nth-of-type(2) h4").textContent = translation.servicesSection.businessFinancialTitle;
    document.querySelector("#services .card:nth-of-type(3) h4").textContent = translation.servicesSection.professionalConsultancyTitle;
    document.querySelector("#services .card:nth-of-type(1) p").textContent = translation.servicesSection.personalFinancialText;
    document.querySelector("#services .card:nth-of-type(2) p").textContent = translation.servicesSection.businessFinancialText;
    document.querySelector("#services .card:nth-of-type(3) p").textContent = translation.servicesSection.professionalConsultancyText;
    document.querySelector("#services .cta h5").textContent = translation.servicesSection.contactText;
    document.querySelector("#services .cta a").textContent = translation.servicesSection.button;

    document.querySelector("#team h2").textContent = translation.teamSection.teamTitle;
    document.querySelector("#team p").textContent = translation.teamSection.teamText;

    document.querySelector("#testimonials h2").textContent = translation.testimonialsSection.testimonialsTitle;
    document.querySelector("#testimonials h5").textContent = translation.testimonialsSection.testimonialsSubtitle;
    document.querySelector("#testimonials .testimonial-card:nth-child(1) p").textContent = translation.testimonialsSection.testimonialsTextFirst;
    document.querySelector("#testimonials .testimonial-card:nth-child(2) p").textContent = translation.testimonialsSection.testimonialsTextSecond;
    document.querySelector("#testimonials .testimonial-card:nth-child(3) p").textContent = translation.testimonialsSection.testimonialsTextThird;


    document.querySelector("#contact h2").textContent = translation.navigation.contact;
    document.querySelector("#contact label[for='name']").textContent = translation.contactSection.nameLabel;
    document.querySelector("#contact input[name='name']").setAttribute("placeholder", translation.contactSection.nameLabel);
    document.querySelector("#contact label[for='email']").textContent = translation.contactSection.emailLabel;
    document.querySelector("#contact input[name='email']").setAttribute("placeholder", translation.contactSection.emailLabel);
    document.querySelector("#contact label[for='message']").textContent = translation.contactSection.messageLabel;
    document.querySelector("#contact textarea[name='message']").setAttribute("placeholder", translation.contactSection.messagePlaceholder);
    document.querySelector("#contact button").textContent = translation.contactSection.submitButton;
    document.querySelectorAll("#contact .links a")[0].querySelector("p").textContent = translation.contactSection.address;
    document.querySelectorAll("#contact .links a")[1].querySelector("p").textContent = translation.contactSection.email;
    document.querySelectorAll("#contact .links a")[2].querySelector("p").textContent = translation.contactSection.phone;
    document.querySelector("#footer p").textContent = translation.footerSection.rightsReserved;

    document.querySelector("#footer .nav-links li:nth-child(1) a").textContent = translation.navigation.about;
    document.querySelector("#footer .nav-links li:nth-child(2) a").textContent = translation.navigation.services;
    document.querySelector("#footer .nav-links li:nth-child(3) a").textContent = translation.navigation.team;
    document.querySelector("#footer .nav-links li:nth-child(4) a").textContent = translation.navigation.testimonials;
    document.querySelector("#footer .nav-links li:nth-child(5) a").textContent = translation.navigation.contact;

}

