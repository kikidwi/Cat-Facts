console.log("Fetching data...");

const endpoint = "https://cat-fact.herokuapp.com/facts";
const cardContainer = document.getElementById('cardContainer');

// Define an array of colors
const colors = ['blue', 'green', 'purple', 'orange', 'yellow', 'teal'];

fetch(endpoint)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(catFacts => {
    console.log('Cat Fact Data:', catFacts);

    catFacts.forEach((fact, index) => {
      // Create a new card element
      const card = document.createElement('div');
      card.classList.add('col-md-4', 'col-sm-6', 'content-card');

      // Choose a color based on the index
      const cardColor = colors[index % colors.length];  // Cycle through the color array

      // Fill the card with content
      card.innerHTML = `
        <div class="card-big-shadow">
          <div class="card card-just-text" data-background="color" data-color="${cardColor}" data-radius="none">
            <div class="content">
              <h6 class="category">user id: ${fact.user}</h6>
              <h4 class="title"><a href="#">${new Date(fact.createdAt).toLocaleDateString()}</a></h4>
              <p class="description">${fact.text}</p>
            </div>
          </div> <!-- end card -->
        </div>
      `;

      // Append the card to the container
      cardContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
