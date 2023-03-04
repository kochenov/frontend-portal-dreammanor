import { boot } from "quasar/wrappers";
import { useAuthStore } from "stores/all";

export default boot(async ({ router }) => {
  // Маршруты для гостей
  const guestAuthRoutes = [
    "login",
    "registration",
    "forgotPassword",
    "passwordReset",
  ];

  router.beforeEach(async (to) => {
    const authStore = useAuthStore();
    // получить текущего пользователя
    await authStore.getAuthUser();

    if (authStore.user) {
      console.log(authStore.user);
      //const userStore = useUserStore();
    }
    // если страница закрыта для гостей, то переадресует на страницу авторизации
    if (to.meta.auth && !user) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      return {
        path: "/login",
        // save the location we were at to come back later
        query: { redirect: to.fullPath },
      };
    }

    // Переадресует авторизованного пользователя если он зашёл на страницу для гостя
    if (authStore.user && guestAuthRoutes.includes(to.name)) {
      return {
        path: "/",
      };
    }
  });
});
