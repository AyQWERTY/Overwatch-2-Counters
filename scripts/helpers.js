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

const createEl = (selector, str) => {
  const app = document.querySelector(selector);
  app.appendChild(strToHTML(str));
};

const createRoleRow = (role, heroes) => {
  let html = "";

  heroes.forEach((h) => {
    html += `<img class="counter-icon" src="${h.icon}" alt="${h.name}">`;
  });

  return `<div class="counter-class"><img class="counter-class-icon" src="icons/classes/${capitalize(role)}.webp">${html}</div>`;
};

const createCounters = (hero) => {
  const counterNames = hero.counterpicks;

  if (!counterNames) {
    return "";
  }

  const counterPicks = {
    [ROLE.TANK]: [],
    [ROLE.DAMAGE]: [],
    [ROLE.SUPPORT]: [],
  };
  HEROES.filter((h) => counterNames.includes(h.name)).forEach((h) => {
    counterPicks[h.role].push(h);
  });

  let rolesRows = "";
  Object.values(counterPicks).forEach((heroes) => {
    rolesRows += createRoleRow(heroes?.[0]?.role, heroes);
  });

  return rolesRows;
};

const createHero = (hero) => {
  return `<div class="hero">
    <div class="hero-face">
        <img src="${hero.icon}">
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

  createEl(
    parent,
    `<section class="heroes-class ${data.class}">
        <header class="role">
            <img class="counter-class-icon" src="${data.icon}" alt="role-logo" aria-hidden="true">
            <h2>${data.title}</h2>
        </header>
        ${heroes.join("")}
    </section>`,
  );
};
