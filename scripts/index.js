import {
  capitalize,
  createSection,
  debounce,
  getByRole,
  isEqualArr,
  ROLE,
} from "./helpers.js";
import HEROES from "./heroes.js";

const ROLES = [ROLE.TANK, ROLE.DAMAGE, ROLE.SUPPORT];

let filteredHeroes = HEROES;

const parentSelector = ".counter-table";

const removeElements = (selector) => {
  const el = document.querySelector(selector);
  if (el) {
    el.innerHTML = "";
  }
};

const createElements = (selector) => {
  ROLES.forEach((role) => {
    createSection(
      {
        class: role,
        icon: `icons/classes/${capitalize(role)}.webp`,
        title: capitalize(role),
        contents: getByRole(filteredHeroes || HEROES, role),
      },
      selector,
    );
  });
};

const filterHeroesByName = (arr, query = "") => {
  if (!query) {
    return arr;
  }

  return arr.filter((hero) => hero.name.toLowerCase().includes(query));
};

const updateUI = () => {
  removeElements(parentSelector);
  createElements(parentSelector);
};

const openWiki = (hero) => {
  window.open("https://overwatch.fandom.com/wiki/" + hero, "_blank");
};

document.querySelectorAll(".hero-face").forEach((e) => {
  e.onclick = function () {
    openWiki(e.childNodes[3].innerText.replace(" ", "_"));
  };
});

document.querySelectorAll(".counter-icon").forEach((e) => {
  e.onclick = function () {
    openWiki(e.getAttribute("alt"));
  };
});

document.querySelector(".search input").addEventListener(
  "keyup",
  debounce(function (e) {
    const q = filterHeroesByName(HEROES, e.target.value);

    if (isEqualArr(filteredHeroes, q)) {
      return;
    }

    filteredHeroes = q;
    updateUI();
  }, 300),
);

document.querySelector(".search button").addEventListener("click", (e) => {
  document.querySelector(".search input").value = "";
  filteredHeroes = HEROES;
  updateUI();
});

createElements(parentSelector);
