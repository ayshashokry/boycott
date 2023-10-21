import React from "react";

export default function getData() {
  let resturants = [
    {
      id: 1,
      name: "starbucks",
      logo: "starbucs.png",
    },
    {
      id: 2,
      name: "McDonald's",
      logo: "mac.png",
    },
    {
      id: 3,
      name: "Pizza hut",
      logo: "pizzahut.png",
    },
    {
      id: 4,
      name: "Papa johns",
      logo: "papaJohns.jpeg",
    },
    {
      id: 5,
      name: "KFC",
      logo: "kfc.png",
    },
  ];
  let drinks = [
    {
      id: 1,
      name: "Lipton",
      logo: "lipton.webp",
    },

    {
      id: 2,
      name: "Nescafe",
      logo: "nescafe.png",
      company: "Nestle",
    },
    { id: 3, name: "Aqua Water", logo: "aqua.jpg", company: "Strass Group" },
    { id: 4, name: "Evian Water", logo: "evian.jpg", company: "Strass Group" },
  ];
  let cosmetics = [
    {
      id: 1,
      name: "MAC",
      logo: "macCosm.png",
    },

    {
      id: 2,
      name: "Bath and body",
      logo: "bathBody.png",
    },
    {
      id: 3,
      name: "Victoria secret",
      logo: "victSecret.jpg",
    },
  ];
  let dairyProducts = [
    {
      id: 1,
      name: "Cerilac",
      logo: "cerilac.jpg",
      company: "Nestle",
    },

    {
      id: 2,
      name: "Nido",
      logo: "nido.png",
      company: "Nestle",
    },
    {
      id: 3,
      name: "Condensed Milk",
      logo: "condMilk.jpg",
      company: "Nestle",
    },
    {
      id: 4,
      name: "Coffe Mate",
      logo: "cofeMat.jpg",
      company: "Nestle",
    },
    { id: 5, name: "Activia", logo: "activia.jpg", company: "Strass Group" },
    { id: 6, name: "Danette", logo: "danette.jpg", company: "Strass Group" },
  ];
  let chocklate = [
    {
      id: 1,
      name: "KitKat",
      logo: "kitkat.png",
      company: "Nestle",
    },
  ];
  let snacks = [
    {
      id: 1,
      name: "Corn Flakes",
      logo: "cornflak1.jpg",
      company: "Nestle",
    },
    {
      id: 2,
      name: "Corn Flakes",
      logo: "cornflak2.jpg",
      company: "kellogg's",
    },
  ];
  return { resturants, drinks, cosmetics, dairyProducts, chocklate, snacks };
}
