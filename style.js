
    // ===== NAV TOGGLE =====
    function toggleNav() {
      document.getElementById('navLinks').classList.toggle('open');
    }
    function closeNav() {
      document.getElementById('navLinks').classList.remove('open');
    }

    // ===== SCROLL REVEAL =====
    const revealEls = document.querySelectorAll('.reveal, .timeline-item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          // Animate skill bars
          e.target.querySelectorAll('.skill-fill').forEach(bar => {
            bar.style.width = bar.dataset.w + '%';
          });
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => observer.observe(el));

    // Also trigger skill bars if already in view on load
    document.querySelectorAll('.skill-fill').forEach(bar => {
      const parentVisible = bar.closest('.visible');
      if (parentVisible) bar.style.width = bar.dataset.w + '%';
    });

    // ===== SCROLL TO TOP =====
    const scrollBtn = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('show', window.scrollY > 400);
    });

    // ===== ACTIVE NAV LINK =====
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
      });
      document.querySelectorAll('.nav-links a').forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? 'var(--text)' : '';
      });
    });

    // ===== CONTACT FORM =====
    function handleSend() {
      alert('Thanks for reaching out! Naveen will get back to you soon.');
    }
    // ===== SMART AUTO SCROLL (BASED ON CURRENT VIEW) =====
const sectionsList = document.querySelectorAll("section[id]");

function getCurrentSectionIndex() {
  let index = 0;
  sectionsList.forEach((section, i) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2) {
      index = i;
    }
  });
  return index;
}

//  function autoScrollNext() {
//    let currentIndex = getCurrentSectionIndex();
//    let nextIndex = currentIndex + 1;

//    if (nextIndex >= sectionsList.length) {
//      nextIndex = 0; // loop to top
//    }

//    sectionsList[nextIndex].scrollIntoView({
//      behavior: "smooth",
//      block: "start"
//    });
// }

// // Run every 3 seconds
// let autoScroll = setInterval(autoScrollNext, 4000);
(function(){
  emailjs.init("K13_J8FOVnCSdICwq");
})();

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_h1vxd06", "template_66rfw53", this)
    .then(() => {
      alert("Message sent successfully!");
    }, () => {
      alert("Failed to send message");
    });
});