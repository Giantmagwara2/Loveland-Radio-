document.addEventListener("DOMContentLoaded", () => {
  // Cache DOM elements
  const nowPlayingElement = document.getElementById("current-song");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const podcastCards = document.querySelectorAll(".podcast-card");
  const podcastSearch = document.getElementById('podcastSearch');
  const backToTopButton = document.getElementById("back-to-top");
  const loadMoreBtn = document.getElementById('loadMoreBtn');

  // Now Playing Info
  const nowPlaying = "Sunshine by John Doe";
  if (nowPlayingElement) {
    nowPlayingElement.textContent = nowPlaying;
  }

  // Podcast Filter and Search
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;
      podcastCards.forEach(card => {
        if (category === "all" || card.dataset.category === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  podcastSearch.addEventListener('input', function() {
    let searchQuery = this.value.toLowerCase();
    podcastCards.forEach(card => {
      let title = card.querySelector('h3').textContent.toLowerCase();
      card.style.display = title.includes(searchQuery) ? 'block' : 'none';
    });
  });

  // Back to Top Button
  const handleScroll = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };

  window.addEventListener('scroll', handleScroll);

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Load More Podcasts
  loadMoreBtn.addEventListener('click', () => {
    // Placeholder function for loading more podcasts
    loadMorePodcasts();
  });

  // Placeholder function for loading more podcasts
  function loadMorePodcasts() {
    // Implement the logic to load more podcast items dynamically here.
    console.log("Loading more podcasts...");
  }
});