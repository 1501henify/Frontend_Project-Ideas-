// Rezeptdaten (kann später durch API oder JSON ersetzt werden)
const recipes = [
  {
    title: 'Lebkuchen',
    category: 'Süß',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_zUT3NMy0jOFHOqb0OIrrKpKoE1xabIxQRlN_0OnVpDfkFc1c7sfV0p4L&s=10',
    description:
      'Ein klassisches Weihnachtsgebäck mit Honig, Nüssen und Gewürzen.',
  },
  {
    title: 'Weihnachtsplätzchen',
    category: 'Süß',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2OdULutrzPHoJ9cB10-BNTujWnUEl6CUKoaFiK3JXv_DnPmlUxm5WOZ0&s=10',
    description: 'Bunte, festliche Kekse perfekt für die Adventszeit.',
  },
  {
    title: 'Glühwein',
    category: 'Getränke',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHadC9G5n8PgabwVoEoWc-skpIZ3zsG83VpTNRJ7a8CBsrj--53dxYMcnT&s=10',
    description:
      'Ein wärmendes Getränk aus Rotwein und weihnachtlichen Gewürzen.',
  },
  {
    title: 'Punsch',
    category: 'Getränke',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjm22XxzH1q4-CQqMeCKmRwrvtubKyqSDCYTQSAw7jIgor-jNnn6kR6CJy&s=10',
    description: 'Ein alkoholfreier Winterfavorit mit Saft und Gewürzen.',
  },
];

// Galerie-Container
const gallery = document.getElementById('recipe-gallery');
const filterButtons = document.querySelectorAll('.filter-btn');

// Rezepte dynamisch rendern
function renderRecipes(category = 'Alle') {
  gallery.innerHTML = ''; // Galerie zurücksetzen

  const filteredRecipes =
    category === 'Alle'
      ? recipes
      : recipes.filter((recipe) => recipe.category === category);

  filteredRecipes.forEach((recipe) => {
    const card = `
      <div class="recipe-card">
        <img src="${recipe.image}" alt="${recipe.title}">
        <h2>${recipe.title}</h2>
        <p>${recipe.description}</p>
      </div>
    `;
    gallery.innerHTML += card;
  });
}

// Aktiven Filter hervorheben
function setActiveFilter(button) {
  filterButtons.forEach((btn) => btn.classList.remove('active'));
  button.classList.add('active');
}

// Event-Listener für Filter
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    renderRecipes(category);
    setActiveFilter(button);
  });
});

// Standardrezepte anzeigen
renderRecipes();
