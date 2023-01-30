export default [
  /*  {
    path: "",
    name: "realEstateTabs",
    //meta: { title: "" },
    component: () => import("pages/TestPage.vue"),
  }, */
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
