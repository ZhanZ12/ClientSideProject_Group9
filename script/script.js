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
          var dropdown = this.nextElementSibling; // Assuming the dropdown is a sibling element

          // Close other open dropdowns
          closeAllDropdowns();

          // Toggle the 'active' class on the dropdown to show/hide it
          dropdown.classList.toggle('active');

          // Prevent the default link behavior if the dropdown is visible
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

        // Remove 'active' class from all menu__link elements
        menuItems.forEach(function(item) {
            item.classList.remove('active');
        });
    }
});
});
