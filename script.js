// Fetch and display latest blog posts
window.onload = function() {
  fetch('https://www.googleapis.com/blogger/v3/blogs/1855713977688632827/posts?key=AIzaSyCBhhCcYNPI-p9TPeYcpdc7Pf2eLEwlZSg')
    .then(response => response.json())
    .then(data => {
      const blogPosts = data.items;
      const blogSection = document.getElementById('blog-posts');
      blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.content}</p>
          <a href="${post.url}" target="_blank">Read More</a>
        `;
        blogSection.appendChild(postElement);
      });
    })
    .catch(error => console.error('Error fetching blogs:', error));

  // Fetch and display Instagram posts
  // Add your Instagram API fetch code here

  // Fetch and display Facebook posts
  // Add your Facebook API fetch code here

  // Fetch and display Twitter posts
  // Add your Twitter API fetch code here
};
