window.onload = function() {
  // Fetch destinations data
  fetch('destinations.json')
    .then(response => response.json())
    .then(data => {
      const destinations = data.destinations;
      const destinationCards = document.getElementById('destination-cards');
      destinations.forEach(destination => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');
        // Randomly select an image
        const randomImageIndex = Math.floor(Math.random() * destination.images.length);
        card.innerHTML = `
          <div class="card">
            <img src="${destination.images[randomImageIndex]}" class="card-img-top" alt="${destination.name}">
            <div class="card-body">
              <h5 class="card-title">${destination.name}</h5>
              <p class="card-text">${destination.description}</p>
              <p class="card-text"><small class="text-muted">${destination.location}</small></p>
            </div>
          </div>
        `;
        destinationCards.appendChild(card);
      });
    })
    .catch(error => console.error('Error fetching destinations:', error));

fetchCountriesData();
  
  // Fetch and display blogs
  fetchBlogPosts();
};

// Function to fetch and display blog posts
function fetchBlogPosts() {
  fetch('https://www.googleapis.com/blogger/v3/blogs/1855713977688632827/posts?key=AIzaSyCBhhCcYNPI-p9TPeYcpdc7Pf2eLEwlZSg')
    .then(response => response.json())
    .then(data => {
      const blogPosts = data.items;
      const blogSection = document.getElementById('blog-posts');
      blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        // Display only the first 100 characters of the content
        const snippet = post.content.slice(0, 100) + '...';
        postElement.innerHTML = `
          <h3>${post.title}</h3>
          <p>${snippet}</p>
          <a href="${post.url}" target="_blank">Read More</a>
        `;
        blogSection.appendChild(postElement);
      });
    })
    .catch(error => console.error('Error fetching blogs:', error));
}


function fetchCountriesData() {
fetch('countries.json')
    .then(response => response.json())
    .then(data => {
      const countries = data.countries;
      const destinationCards = document.getElementById('countries-cards');
      countries.forEach(country => {
        const card = document.createElement('div');
        card.classList.add('country-card', 'mb-4');
        // Randomly select an image for the country
        const randomImageIndex = Math.floor(Math.random() * country.states.length);
        const randomState = country.states[randomImageIndex];
        const randomCity = randomState.cities[Math.floor(Math.random() * randomState.cities.length)];
        const randomPlace = randomCity.places[Math.floor(Math.random() * randomCity.places.length)];
        card.innerHTML = `
          <div class="card">
            <img src="${randomPlace.images[0]}" class="card-img-top" alt="${randomPlace.name}">
            <div class="card-body">
              <h5 class="card-title">${randomPlace.name}</h5>
              <p class="card-text">${randomPlace.description}</p>
              <p class="card-text"><small class="text-muted">${randomCity.name}, ${randomState.name}, ${country.name}</small></p>
              <a href="${randomPlace.map_location}" class="btn btn-primary" target="_blank">View on Map</a>
            </div>
          </div>
        `;
        destinationCards.appendChild(card);
      });
    })
    .catch(error => console.error('Error fetching countries:', error));
}
