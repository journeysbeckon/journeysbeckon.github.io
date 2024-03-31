window.onload = function() {

  fetch('destinations.json')
    .then(response => response.json())
    .then(data => {
      const destinations = data.destinations;
      const destinationCards = document.getElementById('destination-cards');
      destinations.forEach(destination => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');
        card.innerHTML = `
          <div class="card">
            <img src="${destination.image}" class="card-img-top" alt="${destination.name}">
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
  

  // Fetch blogs from Blogger API and display snippets dynamically
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

  // Fetch and display Instagram posts
  const instagramApiUrl = 'https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=YOUR_ACCESS_TOKEN';
  fetchData(instagramApiUrl, 'instagram-feed', 'instagram');

  // Fetch and display Facebook posts
  const facebookApiUrl = 'https://graph.facebook.com/v12.0/me/feed?access_token=YOUR_ACCESS_TOKEN';
  fetchData(facebookApiUrl, 'facebook-feed', 'facebook');

  // Fetch and display Twitter posts
  const twitterApiUrl = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=YOUR_SCREEN_NAME&count=10';
  const twitterHeaders = {
    Authorization: 'Bearer YOUR_ACCESS_TOKEN'
  };
  fetchData(twitterApiUrl, 'twitter-feed', 'twitter', twitterHeaders);
};

// Function to append posts to the specified container
function appendPosts(posts, containerId, platform) {
  const container = document.getElementById(containerId);
  posts.forEach(post => {
    const postElement = document.createElement('div');
    let content;
    if (platform === 'instagram') {
      content = `
        <div class="col-md-4 mb-4">
          <img src="${post.media_url}" alt="${post.caption}" class="img-fluid">
          <p>${post.caption}</p>
          <a href="${post.permalink}" target="_blank" class="btn btn-primary">View on Instagram</a>
        </div>
      `;
    } else if (platform === 'facebook') {
      content = `
        <div class="col-md-4 mb-4">
          <p>${post.message}</p>
          <a href="${post.permalink_url}" target="_blank" class="btn btn-primary">View on Facebook</a>
        </div>
      `;
    } else if (platform === 'twitter') {
      content = `
        <div class="col-md-4 mb-4">
          <p>${post.text}</p>
          <a href="https://twitter.com/${post.user.screen_name}/status/${post.id_str}" target="_blank" class="btn btn-primary">View on Twitter</a>
        </div>
      `;
    }
    postElement.innerHTML = content;
    container.appendChild(postElement);
  });
}

// Function to fetch data from the specified platform
function fetchData(apiUrl, containerId, platform, headers = {}) {
  fetch(apiUrl, {
    headers: headers
  })
    .then(response => response.json())
    .then(data => {
      appendPosts(data.data, containerId, platform);
    })
    .catch(error => console.error(`Error fetching ${platform} data:`, error));
}
