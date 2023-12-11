document.getElementById("openMenu").addEventListener("click", function () {
  document.getElementById("myNav").style.right = "0";
});

document.getElementById("closeMenu").addEventListener("click", function () {
  document.getElementById("myNav").style.right = "-100%";
});

const menuLinks = document.querySelectorAll(".menu__link__button");

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function (e) {
    const menuWrapper = this.closest(".menu__link__wrapper");

    menuWrapper.classList.toggle("active");

    if (menuWrapper.classList.contains("active")) {
      e.preventDefault();
    }
  });
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

