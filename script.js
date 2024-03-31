window.onload = async function() {
  try {
    await Promise.all([fetchDestinationsData(), fetchCountriesData(), fetchBlogPosts()]);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

async function fetchDestinationsData() {
  const response = await fetch('destinations.json');
  const data = await response.json();
  const destinations = data.destinations;
  const destinationCards = document.getElementById('destination-cards');
  destinations.forEach(destination => {
    const card = createCard(destination);
    destinationCards.appendChild(card);
  });
}

async function fetchBlogPosts() {
  const response = await fetch('https://www.googleapis.com/blogger/v3/blogs/1855713977688632827/posts?key=AIzaSyCBhhCcYNPI-p9TPeYcpdc7Pf2eLEwlZSg');
  const data = await response.json();
  const blogPosts = data.items;
  const blogSection = document.getElementById('blog-posts');
  blogPosts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('blog-post');
    const snippet = post.content.slice(0, 100) + '...';
    postElement.innerHTML = `
      <h3>${post.title}</h3>
      <p>${snippet}</p>
      <a href="${post.url}" target="_blank">Read More</a>
    `;
    blogSection.appendChild(postElement);
  });
}

async function fetchCountriesData() {
  const response = await fetch('countries.json');
  const data = await response.json();
  const countries = data.countries;
  const destinationCards = document.getElementById('countries-cards');
  countries.forEach(country => {
    const card = createRandomPlaceCard(country);
    destinationCards.appendChild(card);
  });
}

function createCard(data) {
  const card = document.createElement('div');
  card.classList.add('col-md-4', 'mb-4');
  const randomImageIndex = Math.floor(Math.random() * data.images.length);
  card.innerHTML = `
    <div class="card">
      <img src="${data.images[randomImageIndex]}" class="card-img-top" alt="${data.name}">
      <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">${data.description}</p>
        <p class="card-text"><small class="text-muted">${data.location}</small></p>
      </div>
    </div>
  `;
  return card;
}

function createRandomPlaceCard(country) {
  const card = document.createElement('div');
  card.classList.add('country-card', 'mb-4');
  const randomState = country.states[Math.floor(Math.random() * country.states.length)];
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
  return card;
}
