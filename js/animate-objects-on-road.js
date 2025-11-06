"use strict";

// Opbygger vores data-struktur med et array til css-en
const carInfo = [
  {
    className: "car1",
    carBrand: "Ford",
    carModel: "Mustang",
    releaseYear: 1974,
    color: "Red",
    fuelType: "Diesel",
  },

  {
    className: "car2",
    carBrand: "Volvo",
    carModel: "242 Series",
    releaseYear: 1982,
    color: "Blue",
    fuelType: "Diesel",
  },

  {
    className: "car3",
    carBrand: "Volkswagen",
    carModel: "Passat",
    releaseYear: 1979,
    color: "Blue",
    fuelType: "Diesel",
  },
];

// Venter med at kører JS koden indtil hele HTML-siden er indlæst
document.addEventListener("DOMContentLoaded", () => {
  // finder tooltip id og gemmer det i variablen
  const tooltip = document.getElementById("tooltip");

  // funktion der viser tooltip med biloplysninger
  // parameter: html = den tekst, der indeholder HTML-tags som vi vil vise i tooltip'en
  function showTooltip(html) {
    if (tooltip) {
      // Indsætter teksten i tooltip'en
      tooltip.innerHTML = html;
      // Gør tooltip'en synlig med css-klassen
      tooltip.classList.add("is-visible");

      setTimeout(function () {
        tooltip.classList.remove("is-visible");
      }, 8000);
    }
  }

  carInfo.forEach((car) => {
    document.querySelectorAll("." + car.className).forEach((elem) => {
      elem.addEventListener("mouseover", () => {
        const carDetails = `
          
          <strong>${car.carBrand}</strong><br>
          Model: ${car.carModel}<br>
          Release Year: ${car.releaseYear}<br>
          Color: ${car.color}<br>
          Fuel Type: ${car.fuelType}
        `;
        showTooltip(carDetails);
      });
    });
  });

  // Hent DOM-elementer
  const getRedCar = document.getElementById("redCar");
  const getPoliceCar = document.getElementById("policeCar");
  const getBlueCar = document.getElementById("blueCar");

  const getBus = document.getElementById("bus");
  const getTruck = document.getElementById("truck");

  const sun = document.querySelector(".sun");
  const scene = document.querySelector(".scene");

  // Opret lydobjekter (✅ tjek at stien passer til din mappe)
  const soundRedCar = new Audio("sound/red-car-horn.wav");
  const soundPoliceCar = new Audio("sound/police-car-sound.wav");
  const soundBlueCar = new Audio("sound/blue-car-sound.wav");
  const soundBus = new Audio("sound/bus-sound.wav");
  const soundTruck = new Audio("sound/truck-sound.wav");

  // Tilføj event listeners
  if (getRedCar) {
    getRedCar.addEventListener("click", () => {
      soundRedCar.currentTime = 0;
      soundRedCar.play();
    });
  }

  if (getPoliceCar) {
    getPoliceCar.addEventListener("click", () => {
      soundPoliceCar.currentTime = 0;
      soundPoliceCar.play();
    });
  }

  if (getBlueCar) {
    getBlueCar.addEventListener("click", () => {
      soundBlueCar.currentTime = 0;
      soundBlueCar.play();
    });
  }

  if (getBus) {
    getBus.addEventListener("click", () => {
      soundBus.currentTime = 0;
      soundBus.play();
    });
  }

  if (getTruck) {
    getTruck.addEventListener("click", () => {
      soundTruck.currentTime = 0;
      soundTruck.play();
    });
  }

  if (sun && scene) {
    sun.addEventListener("click", () => {
      scene.classList.toggle("night");
    });
  }
});
