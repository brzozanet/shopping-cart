import { createAppbar } from "../../components/appbar";
import { createCard } from "../../components/card";
import { createCart } from "../../components/cart";

const rootElement = document.getElementById("root");

const buildAppUI = () => {
  const appbar = document.createElement("div");
  const cards = document.createElement("div");
  const card1 = document.createElement("div");
  const card2 = document.createElement("div");
  const card3 = document.createElement("div");
  const card4 = document.createElement("div");

  cards.classList.add("flex", "flex-wrap", "justify-center", "gap-4");

  appbar.innerHTML = createAppbar({ cartElement: createCart() });

  card1.classList.add("max-w-[30%]");
  card1.innerHTML = createCard({
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    image: "https://flowbite.com/docs/images/products/apple-watch.png",
    price: 599,
  });

  card2.classList.add("max-w-[30%]");
  card2.innerHTML = createCard({
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    image: "https://flowbite.com/docs/images/products/apple-watch.png",
    price: 599,
  });

  card3.classList.add("max-w-[30%]");
  card3.innerHTML = createCard({
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    image: "https://flowbite.com/docs/images/products/apple-watch.png",
    price: 599,
  });

  card4.classList.add("max-w-[30%]");
  card4.innerHTML = createCard({
    name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    image: "https://flowbite.com/docs/images/products/apple-watch.png",
    price: 599,
  });

  cards.append(card1, card2, card3, card4);
  rootElement.append(appbar, cards);
};

buildAppUI();
