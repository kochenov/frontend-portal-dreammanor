export default [
  {
    path: "links/:id_component",
    name: "links",
    meta: { title: "Список объявлений" },
    component: () => import("./pages/LinksPage.vue"),
  },
  {
    path: ":id?",
    name: "realEstate",
    meta: { title: "Недвижимость", name: "realEstate" },
    component: () => import("pages/TestPage.vue"),
  },
  {
    path: "find-home",
    name: "formFindHome",
    meta: { title: "Недвижимость", name: "realEstate" },
    component: () => import("./pages/FindHomePage.vue"),
  },
  {
    path: "find-home/:num(\\d+)?",
    name: "formFindResult",
    meta: { title: "Недвижимость", name: "realEstate" },
    component: () => import("./pages/FindHomePage.vue"),
  },
];
