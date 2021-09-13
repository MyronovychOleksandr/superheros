import { lazy } from "react";

export default [
  {
    path: "/",
    exact: true,
    label: "Heros",
    component: lazy(() => import("./views/Heros.js")),
  },
  {
    path: "/hero",
    exact: true,
    label: "Add Hero ",
    component: lazy(() => import("./views/AddHero.js")),
  },
  {
    path: "/hero/:id",
    exact: true,
    label: "Edit hero",
    component: lazy(() => import("./views/EditHero.js")),
  },
];
