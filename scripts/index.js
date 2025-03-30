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

document.addEventListener("click", function (e) {
  if (["hero-icon", "counter-img"].includes(e.target.className)) {
    openWiki(e.target.getAttribute("alt").replace(" ", "_"));
  }
});

// document.querySelector(".search input").addEventListener(
//   "keyup",
//   debounce(function (e) {
//     const q = filterHeroesByName(HEROES, e.target.value);

//     if (isEqualArr(filteredHeroes, q)) {
//       return;
//     }

//     filteredHeroes = q;
//     updateUI();
//   }, 300),
// );

// document.querySelector(".search button").addEventListener("click", (e) => {
//   document.querySelector(".search input").value = "";
//   filteredHeroes = HEROES;
//   updateUI();
// });

createElements(parentSelector);


/* ===== Role Selector ===== */
const roleButtons = document.querySelectorAll('.role-selector button');
const roleSections = document.querySelectorAll('.heroes-class');

function selectRole(role) {
  roleButtons.forEach(btn => {
    const btnRole = btn.getAttribute('data-role');
    btn.classList.toggle('active', btnRole === role);
  });

  roleSections.forEach(sct => {
    sct.style.display = 'none'
  });
  document.getElementById(role).style.display = ''

  localStorage.setItem('selectedRole', role);
}

roleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const role = button.getAttribute('data-role');
    selectRole(role);
  });
});

const savedRole = localStorage.getItem('selectedRole');
if (savedRole) {
  selectRole(savedRole);
}
else {
  selectRole('tank')
}

/* ===== Language Selector ===== */
const langButtons = document.querySelectorAll('.lang-selector img');

function selectLang(lang) {
  langButtons.forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    btn.classList.toggle('active', btnLang === lang);
  });
  localStorage.setItem('selectedLang', lang);
}

langButtons.forEach(button => {
  button.addEventListener('click', () => {
    const lang = button.getAttribute('data-lang');
    selectLang(lang);
    location.reload();
  });
});

const savedLang = localStorage.getItem('selectedLang');
if (savedLang) {
  selectLang(savedLang);
}
else {
  selectLang('en')
}