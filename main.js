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
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.card');
            const restaurantId = card.id;
            const restaurantName = card.querySelector('.box p').textContent;
            const restaurantImage = card.querySelector('img').getAttribute('src');
    
            const restaurant = {
                id: restaurantId,
                name: restaurantName,
                image: restaurantImage
            };
    
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            
            // Check if the restaurant is already in the favorites list
            const isAlreadyFavorite = favorites.some(fav => fav.id === restaurantId);
    
            // If it's not a duplicate, add it to the favorites
            if (!isAlreadyFavorite) {
                favorites.push(restaurant);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                alert(`${restaurantName} has been added to favorites.`);
            } else {
                alert(`${restaurantName} is already in your favorites.`);
            }
        });
    });
});
