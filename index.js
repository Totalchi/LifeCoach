const translations = {
  nl: {
    nav_about: "Over mij",
    nav_services: "Aanpak",
    nav_testimonials: "Cliënten",
    nav_contact: "Contact",
    hero_title: "Voel je vast? Ik help je vooruit.",
    hero_subtitle: "Laat los wat je tegenhoudt. Bouw met coaching aan rust, richting en daadkracht.",
    hero_cta: "Plan een gratis gesprek",
    about_title: "Wie ben ik?",
    about_text: "Ik ben Thomas, erkend life coach met een hart voor mensen. Al jaren begeleid ik mensen die op een kruispunt staan in hun leven: met werk, relaties, keuzes. Geen zweverig gedoe, wel concrete groei. Samen bouwen we aan helderheid, balans en beweging.",
    services_title: "Wat kan ik voor je doen?",
    service1_title: "1-op-1 Coaching",
    service1_desc: "Persoonlijke sessies afgestemd op jouw situatie. Helderheid, richting en concrete stappen.",
    service2_title: "Retreats",
    service2_desc: "Even weg van alles. Herbronnen in de natuur. Met diepgang, rust en verbinding.",
    service3_title: "Online Trajecten",
    service3_desc: "Coaching vanop afstand. Flexibel, intens en afgestemd op jouw ritme.",
    testimonials_title: "Wat anderen zeggen",
    testimonial1: "“Thomas luistert écht. Dankzij zijn coaching voel ik me opnieuw sterker en lichter.”",
    testimonial1_author: "— Karen, Gent",
    testimonial2: "“Ik zat vast in mijn hoofd. Nu heb ik weer grip op mijn keuzes.”",
    testimonial2_author: "— Pieter, Brugge",
    contact_title: "Neem contact op",
    contact_submit: "Verzend bericht",
    footer_note: "Je hoeft het niet alleen te doen.",
    submit_testimonial: "Deel jouw ervaring",
    placeholder_name: "Je naam",
    placeholder_experience: "Wat wil je delen?",
    placeholder_contact_name: "Naam",
    placeholder_contact_email: "E-mailadres",
    placeholder_contact_message: "Bericht",
    share_experience: "Jouw ervaring telt",
    see_all_btn: "Lees meer ervaringen",
    all_testimonials_title: "Meer verhalen",
    blogTitle: "Leesvoer voor jouw groei",
    book_call_btn: "Plan gesprek"
  },
  en: {
    nav_about: "About",
    nav_services: "Services",
    nav_testimonials: "Testimonials",
    nav_contact: "Contact",
    hero_title: "Feeling stuck? Let’s move forward together.",
    hero_subtitle: "Release what’s holding you back. Coaching for clarity, confidence and direction.",
    hero_cta: "Book your free session",
    about_title: "About me",
    about_text: "I’m Thomas, a certified life coach who supports people facing crossroads in life: career, relationships, purpose. Practical, grounded and growth-focused.",
    services_title: "What I offer",
    service1_title: "1-on-1 Coaching",
    service1_desc: "Personal sessions tailored to your story. Clarity, direction and actionable steps.",
    service2_title: "Retreats",
    service2_desc: "Step out of the noise. Rediscover calm, purpose and connection in nature.",
    service3_title: "Online Programs",
    service3_desc: "Remote coaching you can follow at your pace. Deep, focused and flexible.",
    testimonials_title: "What others say",
    testimonial1: "“Thomas really listens. His coaching helped me feel lighter and stronger again.”",
    testimonial1_author: "— Karen, Ghent",
    testimonial2: "“I felt mentally stuck. Now I feel in control again.”",
    testimonial2_author: "— Pieter, Bruges",
    contact_title: "Contact me",
    contact_submit: "Send message",
    footer_note: "You don’t have to do it alone.",
    submit_testimonial: "Share your experience",
    placeholder_name: "Your name",
    placeholder_experience: "What would you like to share?",
    placeholder_contact_name: "Name",
    placeholder_contact_email: "Email address",
    placeholder_contact_message: "Message",
    share_experience: "Your voice matters",
    see_all_btn: "See more stories",
    all_testimonials_title: "More experiences",
    blogTitle: "Inspiration & insights",
    book_call_btn: "Book call"
  }
};


let currentLang = "nl";

function updateTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const translation = translations[currentLang]?.[key];
    if (!translation) return;

    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = translation;
    } else {
      el.textContent = translation;
    }
  });

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.textContent = currentLang === "en" ? "NL" : "EN";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateTranslations();
  loadTestimonials();

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "nl" : "en";
      updateTranslations();
    });
  }

  // Contactformulier handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = {
        name: this.name.value.trim(),
        email: this.email.value.trim(),
        message: this.message.value.trim()
      };
      if (data.name && data.email && data.message) {
        fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        }).then(res => {
          if (res.ok) alert(currentLang === "nl" ? "Bericht verzonden!" : "Message sent!");
          this.reset();
        }).catch(() => {
          alert(currentLang === "nl" ? "Fout bij verzenden." : "Failed to send.");
        });
      }
    });
  }
});

// Scroll helper
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Meertalige modale content
const serviceDetails = {
  en: {
    session: "<h3>1-on-1 Sessions</h3><p>Deep personal coaching tailored to your growth and transformation.</p>",
    retreat: "<h3>Retreats</h3><p>Immersive growth experiences in nature with expert guidance.</p>",
    online: "<h3>Online Programs</h3><p>Flexible, powerful virtual coaching experiences from home.</p>"
  },
  nl: {
    session: "<h3>1-op-1 Sessies</h3><p>Diepgaande persoonlijke coaching op maat van jouw groei en transformatie.</p>",
    retreat: "<h3>Retreats</h3><p>Intense groeimomenten in de natuur, begeleid door een ervaren coach.</p>",
    online: "<h3>Online Programma’s</h3><p>Flexibele en krachtige coachingstrajecten die je thuis kunt volgen.</p>"
  }
};

function showDetails(key) {
  const modalContent = serviceDetails[currentLang]?.[key] || serviceDetails.en[key];
  document.getElementById('service-info').innerHTML = modalContent;
  document.getElementById('service-details').classList.remove('hidden');
}

function hideDetails() {
  document.getElementById('service-details').classList.add('hidden');
}

// Testimonials ophalen
function loadTestimonials() {
  fetch('/api/testimonials')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('testimonial-list');
      if (!container) return;
      container.innerHTML = '';
      data.forEach(t => {
        const div = document.createElement('div');
        div.className = 'testimonial';
        div.innerHTML = `<p>${t.testimonial}</p><span>— ${t.name}</span>`;
        container.appendChild(div);
      });
    });
}

// Testimonialformulier
const testimonialForm = document.getElementById('testimonialForm');
if (testimonialForm) {
  testimonialForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const testimonial = this.testimonial.value.trim();
    if (name && testimonial) {
      fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, testimonial })
      }).then(res => res.json()).then(() => {
        loadTestimonials();
        this.reset();
      });
    }
  });
}