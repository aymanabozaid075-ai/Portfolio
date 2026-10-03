




const carousel = document.getElementById('testimonials-carousel');
const nextBtn = document.getElementById('next-testimonial');
const prevBtn = document.getElementById('prev-testimonial');
const dots =document.querySelectorAll('.carousel-indicator');
const themeToggleBtn = document.getElementById('theme-toggle-button');

let i = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(${i * 33.33}%)`;
  
  dots.forEach(function (dot, index) {
    if (index === i) {
      dot.classList.add('bg-accent','w-6');
      dot.classList.remove('bg-slate-400', 'dark:bg-slate-600', 'w-3');
    } else {
      dot.classList.remove('bg-accent', 'w-6');
      dot.classList.add('bg-slate-400', 'dark:bg-slate-600', 'w-3');
    }
  });
}

nextBtn.addEventListener('click', function () {
  if (i < 3) {
    i++;
  } else {
    i = 0;
  }
  updateCarousel();
});

prevBtn.addEventListener('click', function () {
  if (i > 0) {
    i--;
  } else {
    i = 3;
  }
  updateCarousel();
});

dots.forEach(function (dot, index) {
  dot.addEventListener('click', function () {
    i = index;
    updateCarousel();
  });
});


themeToggleBtn.addEventListener('click', function () {
  document.documentElement.classList.toggle('dark');
});




const settingsToggle = document.getElementById('settings-toggle');
const settingsSidebar = document.getElementById('settings-sidebar');
const closeSettings = document.getElementById('close-settings');

function toggleSidebar() {
  settingsSidebar.classList.toggle('translate-x-full');
  if (settingsSidebar.classList.contains('translate-x-full')) {
    settingsToggle.style.right = '0px';
  } else {
    settingsToggle.style.right = '20rem';
  }
}

settingsToggle.addEventListener('click', toggleSidebar);
if (closeSettings) {
  closeSettings.addEventListener('click', toggleSidebar);
}

const fontButtons = document.querySelectorAll('.font-option');

fontButtons.forEach((btn) => {
  btn.addEventListener('click', function () {
    const selectedFont = this.getAttribute('data-font');

    document.body.classList.remove('font-alexandria', 'font-tajawal', 'font-cairo');
    document.body.classList.add(`font-${selectedFont}`);

    fontButtons.forEach((b) => b.classList.remove('active'));
    this.classList.add('active');
  });
});

const colorsGrid = document.getElementById('theme-colors-grid');

const themes = [
  { name: 'cyan', color: '#06b6d4' },
  { name: 'green', color: '#10b981' },
  { name: 'orange', color: '#f97316' },
  { name: 'purple', color: '#8b5cf6' },
  { name: 'yellow', color: '#eab308' },
  { name: 'red', color: '#ef4444' }
];

if (colorsGrid) {
  colorsGrid.innerHTML = '';
  themes.forEach((theme) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'w-10 h-10 rounded-full transition-transform hover:scale-110 border-2 border-white dark:border-slate-700 shadow-md cursor-pointer';
    btn.style.backgroundColor = theme.color;
    btn.setAttribute('data-theme', theme.name);

    btn.addEventListener('click', () => {
      document.documentElement.style.setProperty('--color-primary', theme.color);
      document.documentElement.style.setProperty('--color-accent', theme.color);
      document.documentElement.setAttribute('data-theme', theme.name);
    });

    colorsGrid.appendChild(btn);
  });
}

const resetBtn = document.getElementById('reset-settings');
if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    document.body.classList.remove('font-alexandria', 'font-cairo');
    document.body.classList.add('font-tajawal');

    fontButtons.forEach((b) => {
      if (b.getAttribute('data-font') === 'tajawal') {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    document.documentElement.style.removeProperty('--color-primary');
    document.documentElement.style.removeProperty('--color-accent');
  });
}

