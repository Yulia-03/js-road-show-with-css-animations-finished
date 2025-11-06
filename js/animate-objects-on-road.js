"use strict";

// Hent DOM-elementer
const getRedCar = document.getElementById("redCar");
const getPoliceCar = document.getElementById("policeCar");
const getBlueCar = document.getElementById("blueCar");

const getBus = document.getElementById("bus");
const getTruck = document.getElementById("truck");

const sun = document.querySelector(".sun");
const scene = document.querySelector(".scene");

// Opret lydobjekter
const soundRedCar = new Audio("../sound/red-car-horn.wav");
const soundPoliceCar = new Audio("../sound/police-car-sound.wav");
const soundBlueCar = new Audio("../sound/blue-car-sound.wav");
const soundBus = new Audio("../sound/bus-sound.wav");
const soundTruck = new Audio("../sound/truck-sound.wav");

// Tilføj event listeners
if (getRedCar) {
  getRedCar.addEventListener("click", () => {
    soundRedCar.play();
  });
}

if (getPoliceCar) {
  getPoliceCar.addEventListener("click", () => {
    soundPoliceCar.play();
  });
}

if (getBlueCar) {
  getBlueCar.addEventListener("click", () => {
    soundBlueCar.play();
  });
}

if (getBus) {
  getBus.addEventListener("click", () => {
    soundBus.play();
  });
}

if (getTruck) {
  getTruck.addEventListener("click", () => {
    soundTruck.play();
  });
}

if (sun && scene) {
  sun,
    addEventListener("click", () => {
      scene.classList.toggle("night");
    });
}
