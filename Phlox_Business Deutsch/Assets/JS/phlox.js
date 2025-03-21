//On-Load Fade-in
window.onload = () => document.body.classList.add('fade-in');
window.onbeforeunload = () => document.body.classList.add('fade-out');

//Back_to_top-Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', (event) => {
  event.preventDefault();
  smoothScrollToTop();
});

function smoothScrollToTop() {
  const scrollDuration = 600;
  const scrollStop = -window.scrollY / (scrollDuration / 16);
  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStop);
    } else {
      clearInterval(scrollInterval);
    }
  }, 16);
}

//Observer-API
document.addEventListener('DOMContentLoaded', () => {
  function animateCount(element, target, duration, hasPlus) {
    let start = 0;
    const increment = Math.ceil(target / (duration / 16));
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      element.textContent = hasPlus
        ? `+${start.toLocaleString()}`
        : start.toLocaleString();
    }, 16);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const text = counter.textContent.trim();
          const hasPlus = text.startsWith('+');
          const targetText = text.replace(/[^0-9]/g, '');
          const target = parseInt(targetText, 10);

          counter.classList.add('in-view');

          counter.textContent = hasPlus ? '+0' : '0';

          animateCount(counter, target, 2000, hasPlus);

          observer.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('.counter').forEach((counter) => {
    observer.observe(counter);
  });
});

// Menu-Button
const menuContainer = document.getElementById('menu-container');
const navigation = document.querySelector('.navigation');

menuContainer.addEventListener('click', () => {
  menuContainer.classList.toggle('open');
  navigation.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((link) =>
  link.addEventListener('click', () => {
    menuContainer.classList.remove('open');
    navigation.classList.remove('active');
  })
);
