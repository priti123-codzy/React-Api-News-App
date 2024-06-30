const apiKey = 'd699a60d58f74c1a89d602c524e67c12';
const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

// Function to fetch news data
async function fetchNews() {
  try {
    const response = await fetch(newsUrl);
    const data = await response.json();

    if (data.articles) {
      displayNews(data.articles);
    } else {
      console.error('No articles found in response:', data);
    }
  } catch (error) {
    console.error('Error fetching news data:', error);
  }
}

// Function to display news articles
function displayNews(articles) {
  const newsContainer = document.getElementById('news-list');
  newsContainer.innerHTML = ''; // Clear previous content

  articles.forEach(article => {
    const articleElement = document.createElement('div');
    articleElement.classList.add('news-article');
    articleElement.innerHTML = `
    <img src="${article.urlToImage}" alt="${article.title}" class="news-image">
      <h3>${article.title}</h3>
      <p>${article.description}</p>
      <a href="${article.url}" target="_blank">Read more</a>
    `;
    newsContainer.appendChild(articleElement);
  });
}

// Fetch news data when the page loads
fetchNews();
