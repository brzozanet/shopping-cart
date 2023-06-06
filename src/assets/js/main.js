import { createAppbar } from "../../components/appbar";
import { createCard } from "../../components/card";
import { createCart } from "../../components/cart";

const API_URL = "http://localhost:3000";

const rootElement = document.getElementById("root");

// const fetchProducts = () => {
//   fetch(`${API_URL}/items`)
//     .then((response) => response.json())
//     .then((products) => console.log(products));
// };

const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/items`);
    const products = await response.json();
    return products;
  } catch (error) {
    console.log(error);
  }
};

const buildProducts = () => {
  fetchProducts()
    .then((products) => {
      const cards = document.createElement("div");
      cards.classList.add("flex", "flex-wrap", "justify-center", "gap-4");
      products.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("max-w-[30%]");
        card.innerHTML = createCard({
          name: product.name,
          image: product.images[0],
          price: product.price,
        });
        cards.append(card);
      });
      rootElement.appendChild(cards);
    })
    .catch((error) => {
      console.log(error);
    });
};

const buildAppUI = () => {
  const appbar = document.createElement("div");
  const cards = document.createElement("div");

  appbar.innerHTML = createAppbar({ cartElement: createCart() });
  rootElement.append(appbar, cards);
};

buildAppUI();
buildProducts();
