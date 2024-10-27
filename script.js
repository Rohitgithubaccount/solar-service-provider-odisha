//Function for the Project's sections carousel Item 
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
let totalItems = items.length;

function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.remove('active', 'left', 'right');

    if (index === currentIndex) {
      item.classList.add('active');
    } else if (index === (currentIndex - 1 + totalItems) % totalItems) {
      item.classList.add('left');
    } else if (index === (currentIndex + 1) % totalItems) {
      item.classList.add('right');
    }
  }); 
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
}, 3000);



  
// Function to perform count-up animation
function countUp(id, target, duration) {
  const element = document.getElementById(id);
  let start = 0;
  const stepTime = Math.abs(Math.floor(duration / target));

  const timer = setInterval(() => {
    start += 1;
    element.innerHTML = start + (id === 'count2' ? '%' : '<span class="plus">+</span>');
    if (start >= target) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Function to reset the text content before the count-up animation
function resetCounters() {
  document.getElementById("count1").innerHTML = "0<span class='plus'>+</span>";
  document.getElementById("count2").innerHTML = "0%";
  document.getElementById("count3").innerHTML = "0<span class='plus'>+</span>";
}

// Callback function for IntersectionObserver for the Count Up animation 
function handleIntersect(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      resetCounters();  
      countUp("count1", 500, 2000); // Count to 500 over 2 seconds
      countUp("count2", 98, 2000);  // Count to 98 over 2 seconds
      countUp("count3", 50, 2000);  // Count to 50 over 2 seconds
    }
  });
}
document.addEventListener("DOMContentLoaded", function() {
  const achievementsSection = document.getElementById('achievements');
  const observer = new IntersectionObserver(handleIntersect, {
    root: null, 
    threshold: 0.1
  });
  observer.observe(achievementsSection);
});



// Toggle function of the sidebar on clicking the hamburger icon
const toggleButton = document.getElementById('toggle-button');
const sidebar = document.getElementById('sidebar');

toggleButton.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    toggleButton.classList.toggle('active');
});

// Handle the sidebar links
const sidebarLinks = sidebar.querySelectorAll('a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            event.preventDefault();
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
                setTimeout(() => {
                    sidebar.classList.remove('active');
                }, 150);
            }
        } else {
            sidebar.classList.remove('active');
        }
    });
});




//Preloader function 
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        var preloader = document.querySelector(".preloader");
        preloader.parentNode.removeChild(preloader);
        document.body.classList.add("loaded");
    }, 5000); 
});


 // Add function to hide scrollbar when the page is loading
document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("hide-scrollbar");

  setTimeout(function () {
      var preloader = document.querySelector(".preloader");
      if (preloader) {
          preloader.parentNode.removeChild(preloader);
      }
      document.body.classList.remove("hide-scrollbar");
      document.body.classList.add("loaded");
  }, 5000);
});
