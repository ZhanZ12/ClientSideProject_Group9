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
      });
  }

  menuItems.forEach(function(item) {
      item.addEventListener('click', function(e) {
          var dropdown = this.nextElementSibling;

          closeAllDropdowns();

          dropdown.classList.toggle('active');

          if (dropdown.classList.contains('active')) {
              e.preventDefault();
          }
      });
  });

  document.addEventListener('click', function(e) {
    var isMenuItemClick = Array.from(menuItems).some(function(item) {
        return item.contains(e.target);
    });

    if (!isMenuItemClick) {
        closeAllDropdowns();

        menuItems.forEach(function(item) {
            item.classList.remove('active');
        });
    }
});
});
