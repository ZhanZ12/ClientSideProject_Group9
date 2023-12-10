document.getElementById("openMenu").addEventListener("click", function () {
  document.getElementById("myNav").style.right = "0";
});

document.getElementById("closeMenu").addEventListener("click", function () {
  document.getElementById("myNav").style.right = "-100%";
});

function isMobile(window, maxWidth) {
  return getViewportWidth(window) < maxWidth;
}

function getViewportWidth(window) {
  return Math.max(
    window.document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
}

const isMobileView = isMobile(window, 1024);

if (isMobileView) {
  document.addEventListener("click", (e) => {
    const target = e.target;
    const menuLink = target.closest(".menu__link__button");

    if (menuLink) {
      const menuWrapper = menuLink.closest(".menu__link__wrapper");

      if (menuWrapper.classList.contains("active")) {
        menuWrapper.classList.remove("active");
      } else {
        menuWrapper.classList.add("active");
      }
    }
  });
}

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

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".subscribe__form");
  var categorySection = document.querySelector(".category__section");
  var categorySectionHeader = document.querySelector(
    ".category__section__title"
  );

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (validateEmail()) {
        categorySection.style.display = "flex";
        categorySectionHeader.style.display = "block";
      }
    });
  }

  function validateEmail() {
    var emailInput = document.getElementById("emailInput");
    var email = emailInput.value.trim();

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    return true;
  }

  window.confirmSubscription = function () {
    var selectedCategories = document.querySelectorAll(
      'input[name="category__section__category"]:checked'
    );
    var subscribeSection = document.querySelector(".subscribe__input");
    var subscribeSectionSuccessText = document.querySelector(
      ".subscribe__success"
    );

    if (selectedCategories.length > 0) {
      alert(
        "Subscription confirmed! Email successfully added for selected categories."
      );
      subscribeSection.style.display = "none";
      subscribeSectionSuccessText.style.display = "block";
    } else {
      alert("Please select at least one category.");
    }
  };
});

/* document.addEventListener("DOMContentLoaded", function () {
  var menuItems = document.querySelectorAll(".menu__link");

  function closeAllDropdowns() {
    menuItems.forEach(function (item) {
      var dropdown = item.nextElementSibling;
      dropdown.classList.remove("active");
      item.classList.remove("active"); // Remove 'active' from menu__link
    });
  }

  menuItems.forEach(function (item) {
    var dropdown = item.nextElementSibling;

    // Click event listener for menu items
    item.addEventListener("click", function (e) {
      dropdown.classList.toggle("active");

      if (dropdown.classList.contains("active")) {
        e.preventDefault();
      } else {
        item.classList.add("active");
      }
    });

    var dropdownLinks = dropdown.querySelectorAll(".menu__sublink");
    dropdownLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        closeAllDropdowns();
        item.classList.add("active");
      });
    });
  });

  document.addEventListener("click", function (e) {
    var isMenuItemClick = Array.from(menuItems).some(function (item) {
      return item.contains(e.target);
    });

    if (!isMenuItemClick) {
      closeAllDropdowns();
    }
  });
}); */
