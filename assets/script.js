class Product {
  constructor(image, description) {
    this.image = image;
    this.description = description;
  }
}

class ProductRenderer {
  constructor(containerId) {
    this.containerId = containerId;
    this.counter = 0;
  }

  render(product) {
    // If counter is 0, create a new row
    if (this.counter === 0) {
      const row = `<div class="row m-5" id="row-${Date.now()}"></div>`;
      $(`#${this.containerId}`).append(row);
    }

    const html = `
        <div class="col shadow p-3 mb-5 rounded">
            <img style="width: 300px; height: 300px;" class="rounded mx-auto d-block pb-2" src="${product.image}" alt="" />
            <p class="text-center">${product.description}</p>
        </div>
    `;

    // Append to the last row
    $(`#${this.containerId} .row:last-child`).append(html);

    // Increment counter
    this.counter++;

    // If counter reaches 4, reset it to 0
    if (this.counter === 4) {
      this.counter = 0;
    }
  }
}

const renderer = new ProductRenderer("product");

// Array of products
const products = [
  new Product(
    "assets/skyline1.jpg",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  ),
  new Product(
    "assets/skyline2.jpg",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  ),
  new Product(
    "assets/skyline3.jpg",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  ),
  new Product(
    "assets/skyline4.jpg",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  ),
  new Product(
    "assets/skyline1.jpg",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  ),
  new Product(
    "assets/skyline2.jpg",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  ),
  new Product(
    "assets/skyline3.jpg",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  ),
  new Product(
    "assets/skyline4.jpg",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  ),
];

// Render all products
for (let product of products) {
  renderer.render(product);
}

$(document).ready(function () {
  $("#home").show();

  // Toggle Dark/Light Mode
  $("#toggleButton").click(function () {
    $("body").toggleClass("dark-mode");
    var isDarkMode = $("body").hasClass("dark-mode");
    updateNavbar(isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
  });

  $("nav a").click(function (e) {
    e.preventDefault();
    var page = $(this).attr("href");
    $(".section").hide();
    $(page).show();
  });

  // Check if dark mode preference is stored in local storage
  var storedDarkMode = localStorage.getItem("darkMode");
  if (storedDarkMode === "true") {
    $("body").addClass("dark-mode");
    updateNavbar(true);
  }
});

function updateNavbar(isDarkMode) {
  const navbar = $(".navbar");
  const toggleButton = $("#toggleButton");
  if (isDarkMode) {
    navbar
      .removeClass("navbar-light bg-primary")
      .addClass("navbar-dark bg-dark");
    toggleButton.removeClass("btn-light");
    toggleButton.addClass("btn-dark");
  } else {
    navbar
      .removeClass("navbar-dark bg-dark")
      .addClass("navbar-light bg-primary");
    toggleButton.removeClass("btn-dark");
    toggleButton.addClass("btn-light");
  }
}
