// Fetch Now Playing Info
document.addEventListener("DOMContentLoaded", () => {
  const nowPlayingElement = document.getElementById("current-song");
  
  // Placeholder for song info (replace with API call if available)
  const nowPlaying = "Sunshine by John Doe";
  
  nowPlayingElement.textContent = nowPlaying;
});

// Filter Podcasts by Category
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const podcastCards = document.querySelectorAll(".podcast-card");

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
});

function toggleMenu() {
  const menu = document.querySelector('nav ul');
  menu.classList.toggle('active');
}

// Simulate Now Playing Updates
const tracks = [
  "Morning Vibes - DJ Alex",
  "Mid-Morning Show - Sara Jones",
  "Afternoon Delight - Mike Roberts",
  "Drive Home - Rachel Green",
  "Evening Chill - Chris Lane",
  "Night Owls - DJ Night"
];

function updateNowPlaying() {
  const trackInfo = document.getElementById('track-info');
  const currentTrack = tracks[Math.floor(Math.random() * tracks.length)];
  trackInfo.textContent = currentTrack;
}

setInterval(updateNowPlaying, 5000); // Update every 5 seconds

// Schedule Filter and Search
const scheduleSearch = document.getElementById('schedule-search');
const scheduleFilter = document.getElementById('schedule-filter');
const scheduleItems = document.querySelectorAll('.schedule-item');

scheduleSearch.addEventListener('input', () => {
  const query = scheduleSearch.value.toLowerCase();
  scheduleItems.forEach(item => {
    const showName = item.querySelector('h3').textContent.toLowerCase();
    item.style.display = showName.includes(query) ? '' : 'none';
  });
});

scheduleFilter.addEventListener('change', () => {
  const filter = scheduleFilter.value;
  scheduleItems.forEach(item => {
    const time = item.getAttribute('data-time');
    item.style.display = filter === 'all' || time === filter ? '' : 'none';
  });
});

// Simulate Live Track Updates
const liveTracks = ["Track A", "Track B", "Track C"];
setInterval(() => {
  const liveTrack = document.getElementById('live-track');
  liveTrack.textContent = liveTracks[Math.floor(Math.random() * liveTracks.length)];
}, 5000);

// Chat Functionality
function sendMessage() {
  const chatBox = document.getElementById('chat-box');
  const chatInput = document.getElementById('chat-input');
  if (chatInput.value.trim()) {
    const message = `<p><strong>You:</strong> ${chatInput.value}</p>`;
    chatBox.innerHTML += message;
    chatInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

// Poll Functionality
let pollVotes = {};
function vote(song) {
  pollVotes[song] = (pollVotes[song] || 0) + 1;
  const pollResult = document.getElementById('poll-result');
  pollResult.textContent = `Current Votes: ${JSON.stringify(pollVotes)}`;
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  fetch(this.action, {
    method: this.method,
    body: new FormData(this),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
    } else {
      alert('Oops! Something went wrong. Please try again.');
    }
  });
});

function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('active'); // This will show/hide the menu on click
}

// Show or hide the button based on scroll position
window.onscroll = function() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
};

// Scroll to top when the button is clicked
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Get the button
const backToTopButton = document.getElementById('back-to-top');

// Show or hide the button based on scroll position
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = 'block'; // Show button when user scrolls down
  } else {
    backToTopButton.style.display = 'none'; // Hide button when user is at the top
  }
};

// Scroll smoothly to the top when the button is clicked
backToTopButton.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function () {
        let category = this.getAttribute('data-category');
        document.querySelectorAll('.podcast-card').forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

document.getElementById('podcastSearch').addEventListener('input', function() {
    let searchQuery = this.value.toLowerCase();
    document.querySelectorAll('.podcast-card').forEach(card => {
        let title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchQuery)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});


document.getElementById('loadMoreBtn').addEventListener('click', function() {
    // This can be used to load more content dynamically or append new podcast cards.
    let newPodcast = document.createElement('div');
    newPodcast.classList.add('podcast-card');
    newPodcast.innerHTML = `
        <h3>New Podcast</h3>
        <p>Description...</p>
        <button>Play</button>
    `;
    document.querySelector('.podcast-grid').appendChild(newPodcast);
});

gtag('event', 'play', {
    'event_category': 'Podcast',
    'event_label': 'Morning Vibes',
    'value': 1
});