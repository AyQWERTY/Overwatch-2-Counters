import HEROES from "./heroes.js";

export const ROLE = {
  TANK: "tank",
  DAMAGE: "damage",
  SUPPORT: "support",
};

export const getByRole = (arr, role) => {
  if (!arr.length) {
    return [];
  }

  return arr.filter((i) => i.role.toLowerCase() === role.toLowerCase());
};

const selectedLang = localStorage.getItem('selectedLang');

const strToHTML = (html, trim = true) => {
  html = trim ? html.trim() : html;
  if (!html) return null;

  const template = document.createElement("template");
  template.innerHTML = html;

  const result = template.content.children;

  return result.length === 1 ? result[0] : result;
};

export const capitalize = (str) => {
  return str?.charAt(0)?.toUpperCase() + str?.slice(1);
};

export const isEqualArr = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }

  return array1.every((obj, index) => {
    return Object.keys(obj).every((key) => {
      return obj[key] === array2[index][key];
    });
  });
};

export const debounce = (func, wait) => {
  let timeout;

  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
};

const createEl = (selector, str) => {
  const app = document.querySelector(selector);
  app.appendChild(strToHTML(str));
};

const createRoleRow = (role, heroes) => {
  let html = "";

  heroes.forEach((h) => {
    html += `
      <span class="counter-icon" data-tooltip="${h.description}">
        <img class="counter-img" src="${h.icon}" alt="${h.name}">
      </span>
    `;
  });

  return `<div class="counter-class"><img class="counter-class-icon" src="icons/classes/${capitalize(role)}.webp">${html}</div>`;
};

const createCounters = (hero) => {
  const counterData = hero.counters;

  if (!counterData) {
    return "";
  }

  const counterPicks = {
    [ROLE.TANK]: [],
    [ROLE.DAMAGE]: [],
    [ROLE.SUPPORT]: [],
  };

  const counterNames = Object.keys(counterData);

  HEROES.filter((h) => counterNames.includes(h.name)).forEach((h) => {
    counterPicks[h.role].push({
      'name': h.name,
      'icon': h.icon,
      'role': h.role,
      'description': counterData[h.name][selectedLang]
    });
  });

  let rolesRows = "";
  Object.entries(counterPicks).forEach(([role, heroes]) => {
    rolesRows += createRoleRow(role, heroes);
  });

  return rolesRows;
};

const createHero = (hero) => {
  return `<div class="hero">
    <div class="hero-face">
        <img class="hero-icon" src="${hero.icon}" alt="${hero.name}">
        <h2>${hero.name}</h2>
    </div>
    <div class="counters">${createCounters(hero)}</div>
</div>
`;
};

export const createSection = (data, parent = ".counter-table") => {
  const heroes = [];
  data.contents.forEach((hero) => {
    heroes.push(createHero(hero));
  });

  if (!heroes.length) {
    return;
  }

  const extraClass = data.class === ROLE.DAMAGE ? "xcol" : "";

  createEl(
    parent,
    `<section id="${data.class}" class="heroes-class ${data.class} ${extraClass}">
        ${heroes.join("")}
    </section>`,
  );
};
