document.getElementById("openMenu").addEventListener("click", function () {
  document.getElementById("myNav").style.right = "0";
});

document.getElementById("closeMenu").addEventListener("click", function () {
  document.getElementById("myNav").style.right = "-100%";
});

document.addEventListener("click", (e) => {
  const target = e.target;
  const menuLink = target.closest(".menu__link");

  if (menuLink) {
    if (menuLink.classList.contains("active")) {
      menuLink.classList.remove("active");
    } else {
      menuLink.classList.add("active");
    }
  }
});

const contactForm = document.querySelector(".contact__form");
const searchForm = document.querySelector(".search");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!contactForm.classList.contains("hide")) {
      contactForm.classList.add("hide");
    }
  });
}

if (searchForm) {
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!searchForm.classList.contains("hide")) {
      searchForm.classList.add("hide");
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.subscribe__form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (validateEmail()) {
      alert('Your email added successfully!');
      // Uncomment the line below if you want to submit the form programmatically
      // form.submit();
    }
  });

  function validateEmail() {
    var emailInput = document.getElementById('emailInput');
    var email = emailInput.value.trim();

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    return true;
  }
});


document.addEventListener('DOMContentLoaded', function() {
  var menuItems = document.querySelectorAll('.menu__link');

  function closeAllDropdowns() {
      menuItems.forEach(function(item) {
          var dropdown = item.nextElementSibling;
          dropdown.classList.remove('active');
          item.classList.remove('active'); // Remove 'active' from menu__link
      });
  }

  menuItems.forEach(function(item) {
      var dropdown = item.nextElementSibling; 

      // Click event listener for menu items
      item.addEventListener('click', function(e) {
          dropdown.classList.toggle('active');

          if (dropdown.classList.contains('active')) {
              e.preventDefault();
          } else {
              item.classList.add('active');
          }
      });

      var dropdownLinks = dropdown.querySelectorAll('.menu__sublink');
      dropdownLinks.forEach(function(link) {
          link.addEventListener('click', function() {
              closeAllDropdowns();
              item.classList.add('active'); 
          });
      });
  });

  document.addEventListener('click', function(e) {
      var isMenuItemClick = Array.from(menuItems).some(function(item) {
          return item.contains(e.target);
      });

      if (!isMenuItemClick) {
          closeAllDropdowns();
      }
  });
});
