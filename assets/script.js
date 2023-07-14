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
    if (this.counter === 0) {
      const row = $("<div>")
        .addClass("row m-5")
        .attr("id", `row-${Date.now()}`);
      $(`#${this.containerId}`).append(row);
    }

    const html = `
      <div class="col shadow p-3 mb-5 rounded">
          <img style="width: 300px; height: 300px;" class="rounded mx-auto d-block pb-2" src="${product.image}" alt="" />
          <p class="text-center">${product.description}</p>
      </div>
    `;

    const lastRow = $(`#${this.containerId} .row:last-child`);
    lastRow.append(html);

    this.counter++;

    if (this.counter === 4) {
      this.counter = 0;
    }
  }
}

const renderer = new ProductRenderer("product");

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

products.forEach((product) => {
  renderer.render(product);
});

$(document).ready(() => {
  $("#home").show();

  $("#toggleButton").click(() => {
    $("body").toggleClass("dark-mode");
    const isDarkMode = $("body").hasClass("dark-mode");
    updateNavbar(isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
  });

  $("nav a").click((e) => {
    e.preventDefault();
    const page = $(e.target).attr("href");
    $(".section").hide();
    $(page).show();
  });

  const storedDarkMode = localStorage.getItem("darkMode");
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
    toggleButton.removeClass("btn-light").addClass("btn-secondary");
  } else {
    navbar
      .removeClass("navbar-dark bg-dark")
      .addClass("navbar-light bg-primary");
    toggleButton.removeClass("btn-secondary").addClass("btn-light");
  }
  updateToggleButton(isDarkMode);
}

function updateToggleButton(isDarkMode) {
  const toggleButton = $("#toggleButton");
  toggleButton.text(isDarkMode ? "Light Mode" : "Dark Mode");
}

$("#contact").submit(function (e) {
  e.preventDefault();
  alert("Thank you! Someone will contact you soon.");
});
