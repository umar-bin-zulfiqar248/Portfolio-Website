/*=============== HOME SPLIT TEXT ===============*/
const { animate, text, stagger } = anime;

const { chars: chars1 } = text.split('.home__profession-1', { chars: true })
const { chars: chars2 } = text.split('.home__profession-2', { chars: true })

animate(chars1, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});
animate(chars2, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
});

/*=============== SWIPER PROJECTS ===============*/
const swiperProjects = new Swiper('.projects__swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',   // <- correct
  grabCursor: true,
  speed: 600,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
});

/*=============== WORK TABS ===============*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {            // <-- tab, not tabs
    const targetSelector = tab.dataset.target;     // <-- tab, not tabs
    const targetContent = document.querySelector(targetSelector);
    if (!targetContent) return;

    // remove active state
    tabContents.forEach((c) => c.classList.remove('work-active'));
    tabs.forEach((t) => t.classList.remove('work-active'));

    // add active state
    tab.classList.add('work-active');
    targetContent.classList.add('work-active');
  });
});  

/*=============== SERVICES ACCORDION ===============*/
/*=============== SERVICES ACCORDION ===============*/
const servicesButtons = document.querySelectorAll('.services__button');

// Start state: jo card "services-open" hai us ki height set kar do
const initiallyOpen = document.querySelector('.services__card.services-open .services__info');
if (initiallyOpen) {
  initiallyOpen.style.height = initiallyOpen.scrollHeight + 'px';
}

servicesButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const servicesCards = document.querySelectorAll('.services__card');
    const currentCard = button.closest('.services__card');
    const currentInfo = currentCard.querySelector('.services__info');
    const isCardOpen = currentCard.classList.contains('services-open');

    // Close all cards
    servicesCards.forEach((card) => {
      card.classList.replace('services-open', 'services-close');
      const info = card.querySelector('.services__info');
      info.style.height = '0';
    });

    // Open clicked one only if it wasn't open
    if (!isCardOpen) {
      currentCard.classList.replace('services-close', 'services-open');
      currentInfo.style.height = currentInfo.scrollHeight + 'px';
    }
  });
});

/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/
const tracks = document.querySelectorAll('.testimonials__content')
tracks.forEach(track => {
  const cards = [...track.children]

  for(const card of cards) {
    track.appendChild(card.cloneNode(true))
  }
})

/*=============== COPY EMAIL IN CONTACT ===============*/


/*=============== CURRENT YEAR OF THE FOOTER ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== CUSTOM CURSOR ===============*/


/* Hide custom cursor on links */


/*=============== SCROLL REVEAL ANIMATION ===============*/
