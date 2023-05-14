function addToFavorites(restaurantId) {
  const restaurant = document.getElementById(restaurantId);
  const name = restaurant.querySelector("p").innerText;
  const imgSrc = restaurant.querySelector("img").getAttribute('src');

  const restaurantData = { id: restaurantId, name: name, img: imgSrc };
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites.push(restaurantData);
  localStorage.setItem("favorites", JSON.stringify(favorites));

  alert(`${name} has been added to favorites.`);
}
document.addEventListener('DOMContentLoaded', () => {
  const favoriteButtons = document.querySelectorAll('.favorite-btn');

  favoriteButtons.forEach(button => {
    const card = button.closest('.card');
    const restaurantId = card.id;

    // Check if the restaurant is already in the favorites list
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isAlreadyFavorite = favorites.some(fav => fav.id === restaurantId);

    if (isAlreadyFavorite) {
      button.innerHTML = '♥'; // Update the button icon to ♥ if already favorited
    }

    button.addEventListener('click', (event) => {
      const card = event.target.closest('.card');
      const restaurantId = card.id;
      const restaurantName = card.querySelector('.box p').textContent;

      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

      // Check if the restaurant is already in the favorites list
      const isAlreadyFavorite = favorites.some(fav => fav.id === restaurantId);

      if (!isAlreadyFavorite) {
        // Add the restaurant to favorites
        const restaurantImage = card.querySelector('img').getAttribute('src');
        const restaurant = {
          id: restaurantId,
          name: restaurantName,
          image: restaurantImage
        };
        favorites.push(restaurant);
        button.innerHTML = '♥'; // Update the button icon to ♥
        alert(`${restaurantName} has been added to favorites.`);
      } else {
        // Remove the restaurant from favorites
        favorites = favorites.filter(fav => fav.id !== restaurantId);
        button.innerHTML = '♡'; // Update the button icon to ♡
        alert(`${restaurantName} has been removed from favorites.`);
      }

      // Update the stored favorites in localStorage
      localStorage.setItem('favorites', JSON.stringify(favorites));
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const favoriteButtons = document.querySelectorAll('.favorite-btn');

  favoriteButtons.forEach(button => {
    button.addEventListener('click', event => {
      event.stopPropagation(); // Stop event propagation to prevent card flip
      toggleFavorite(button);
      updateFavoriteSymbol(button);
    });
  });
});

function toggleFavorite(button) {
  if (button.innerHTML === '♡') {
    button.innerHTML = '♥';
  } else {
    button.innerHTML = '♡';
  }
}

function updateFavoriteSymbol(button) {
  const restaurantId = button.closest('.card').id;
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  const isAlreadyFavorite = favorites.some(fav => fav.id === restaurantId);
  if (isAlreadyFavorite) {
    button.innerHTML = '♥';
  } else {
    button.innerHTML = '♡';
  }
}

//Login form to signup form
const formContainer = document.querySelector(".form-container"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login");

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});