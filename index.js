document.addEventListener("DOMContentLoaded", function() {
    fetch('db.json')
    .then(response => response.json())
    .then(data => {
        const resultsContainer = document.getElementById('results');
        data.recipes.forEach(recipe => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <h2>${recipe.name}</h2>
                <img src="${recipe.image}" alt="${recipe.name}">
                <p>${recipe.description}</p>
                <h3>Ingredients:</h3>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
                <ul>
                    <li>Preparation Time: ${recipe.preparation_time}</li>
                    <li>Servings: ${recipe.servings}</li>
                    <li>Difficulty: ${recipe.difficulty}</li>
                </ul>
            `;
            resultsContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
});
   
   function handleSearch(event) {
    event.preventDefault(); 
    
    var input, filter, cards, card, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    cards = document.getElementsByClassName('card');

    for (i = 0; i < cards.length; i++) {
      card = cards[i];
      txtValue = card.textContent || card.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        
        card.classList.add('highlight');
        
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return; 
      } else {

        card.classList.remove('highlight');
      }
    }
  }