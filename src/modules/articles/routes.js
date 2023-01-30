export default [
  {
    path: "/news",
    name: "news",
    meta: { title: "Новости" },
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "news",
        redirect: (to) => {
          // the function receives the target route as the argument
          // we return a redirect path/location here.
          return { path: "/news/all-news" };
        },
      },
      {
        path: "all-news",
        name: "all-news",
        meta: { title: "Все новости", name: "all-news" },
        component: () => import("./pages/news/AllNews.vue"),
      },
      {
        path: ":cat",
        name: "news-cats",
        meta: { title: "По категориям", name: "news-cats" },
        component: () => import("./pages/news/AllNews.vue"),
      },
      {
        path: "news/:cat/:num(\\d+)?",
        name: "news-cats",
        meta: { title: "Недвижимость", name: "realEstate" },
        component: () => import("./pages/news/AllNews.vue"),
      },
    ],
  },
];
