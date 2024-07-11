const postersContainer = document.querySelector('.posters-container');
const dots = document.querySelectorAll('.dot');
const posterWidth = 100; // Fixed width for each poster in percentage
let currentIndex = 0;
let intervalId; // Variable to hold the interval ID

// Function to initialize the posters position
function initializePosters() {
  showPoster(currentIndex);
  startAutoScroll(); // Start auto scroll immediately after initialization
}

// Function to show the poster at the specified index
function showPoster(index) {
  currentIndex = index;

  // Calculate the translateX value for the current poster
  const translateValue = `translateX(-${currentIndex * posterWidth}%)`;

  // Apply transformations to posters container
  postersContainer.style.transform = translateValue;

  updateDots();
}

// Function to update the active dot indicator
function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

// Function to automatically scroll to the next poster
function autoScrollPosters() {
  currentIndex = (currentIndex + 1) % dots.length;
  showPoster(currentIndex);
}

// Function to start auto scroll
function startAutoScroll() {
  intervalId = setInterval(autoScrollPosters, 3000); // Adjust the interval as needed (3000ms = 3 seconds)
}

// Function to stop auto scroll
function stopAutoScroll() {
  clearInterval(intervalId);
}

// Initialize dot click event listeners
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showPoster(index);
    stopAutoScroll(); // Stop auto scroll when manually navigating
  });
});

initializePosters();
