import { capitalize, createSection, getByRole, ROLE } from "./helpers.js";
import HEROES from "./heroes.js";

const ROLES = [ROLE.TANK, ROLE.DAMAGE, ROLE.SUPPORT];

ROLES.forEach((role) => {
  createSection(
    {
      class: role,
      icon: `icons/classes/${capitalize(role)}.webp`,
      title: capitalize(role),
      contents: getByRole(HEROES, role),
    },
    ".counter-table",
  );
});
