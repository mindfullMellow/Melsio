// fectching the crypto data
async function updateCryptoPrices() {
  try {
    const response = await fetch(
      "https://python-flask-server-1ynk.onrender.com/crypto-data"
    );
    const data = await response.json();

    Object.keys(data).forEach((crypto) => {
      const priceData = data[crypto];
      if (priceData) {
        // console.log(`Updating ${crypto}:`, priceData);

        // Update Price
        document
          .querySelectorAll(`[class~="${crypto}-price"]`)
          .forEach((priceElement) => {
            if (priceData["usd"] !== undefined) {
              priceElement.innerText = `$${priceData["usd"].toLocaleString()}`;
            }
          });

        // Update 24h Change with Color
        document
          .querySelectorAll(`[class~="${crypto}-change"]`)
          .forEach((changeElement) => {
            if (priceData["usd_24h_change"] !== undefined) {
              const change = parseFloat(priceData["usd_24h_change"]).toFixed(2);
              changeElement.innerText = `${change}%`;
              changeElement.classList.remove("cc-red", "cc-green");
              changeElement.classList.add(
                parseFloat(change) < 0 ? "cc-red" : "cc-green"
              );
            }
          });

        // Update 24h Volume
        document
          .querySelectorAll(`[class~="${crypto}-volume"]`)
          .forEach((volumeElement) => {
            if (priceData["usd_24h_vol"] !== undefined) {
              volumeElement.innerText = `$${priceData[
                "usd_24h_vol"
              ].toLocaleString()}`;
            }
          });

        // Update Market Cap
        document
          .querySelectorAll(`[class~="${crypto}-marketcap"]`)
          .forEach((marketCapElement) => {
            if (priceData["usd_market_cap"] !== undefined) {
              marketCapElement.innerText = `$${priceData[
                "usd_market_cap"
              ].toLocaleString()}`;
            }
          });
      } else {
        console.warn(`Data for ${crypto} is missing in API response.`);
      }
    });
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

// Auto-update every 30 seconds
setInterval(updateCryptoPrices, 30000);
updateCryptoPrices();

////////////////////////////////////////////////////////////////////
// JavaScript code to update all elements with class "year"
const currentYear = new Date().getFullYear();
console.log("Current Year:", currentYear);

document.querySelectorAll(".year").forEach((yearEl, index) => {
  console.log(`Updating element ${index + 1}:`, yearEl);
  yearEl.textContent = currentYear;
});

// JavaScript Functionality for FQA Section
document.querySelectorAll(".fqa-items").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");

    // Close other open items
    document.querySelectorAll(".fqa-items").forEach((otherItem) => {
      if (otherItem !== item && otherItem.classList.contains("active")) {
        otherItem.classList.remove("active");
      }
    });
  });
});

// javascript functionality for the footer
document.querySelectorAll(".div--2-flex").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");

    // Close other open items
    document.querySelectorAll(".div--2-flex").forEach((otherItem) => {
      if (otherItem !== item && otherItem.classList.contains("active")) {
        otherItem.classList.remove("active");
      }
    });
  });
});

// JavaScript Functionality for the 2nd footer(learn section)
document.querySelectorAll(".div--b-flex").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");

    // Close other open items
    document.querySelectorAll(".div--b-flex").forEach((otherItem) => {
      if (otherItem !== item && otherItem.classList.contains("active")) {
        otherItem.classList.remove("active");
      }
    });
  });
});

//Login--3d flip
function flip() {
  document.getElementById("flipCard").classList.toggle("flip");
}

// making mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector("header");
const targerEl = document.querySelector(".melsio-icon");
const navdivEl = document.querySelector(".nav-div");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");

  if (headerEl.classList.contains("nav-open")) {
    targerEl.style.display = "none"; // hides the bouncing icon when the nav is open
    targerEl.style.visibility = "hidden"; // hides the bouncing icon when the nav is open
  } else {
    targerEl.style.display = "block"; // shows the bouncing icon when the nav is closed
    targerEl.style.visibility = "visible"; // shows the bouncing icon when the nav is closed
  }
});

/////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll("a");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    // Prevent default ONLY for in-page scrolling links
    if (href.startsWith("#")) {
      e.preventDefault();

      // Scroll to top if href is "#"
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Scroll to specific section
        const sectionEl = document.querySelector(href);
        if (sectionEl) sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Close mobile navigation
    if (link.classList.contains("item")) headerEl.classList.toggle("nav-open");
  });
});

/////////////////////////////////////////
// Sticky navigation

// const sectionHeroEL = document.querySelector(".section-hero");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);
//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }
//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     //in the viewport
//     root: null,
//     threshold: 0,
//   }
// );
// obs.observe(sectionHeroEL);
