<template>
  <q-page class="">
    <tabs-conteiner
      tabs
      :component_lists="component_lists"
      :current_component="current_component"
      :nav_route="false"
      @setCurrentComponent="
        (c) => {
          current_component = c;
        }
      "
    >
      <PostList v-if="newsData !== null" :posts="newsData" />

      <div v-if="current_component == 'ListPosts'">Вывести все новости</div>
      <div v-if="current_component == 'AllNewsComments'">
        Вывести комментарии
      </div>
      <div v-if="current_component == 'Popular'">Вывести популярные</div>
      <!--component :is="tabs[current_component]"></component-->
    </tabs-conteiner>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import TabsConteiner from "src/components/blocks/tabs/TabsConteiner.vue";
import PostList from "../../components/news/PostList.vue";
import { news } from "../../services/newsService";
//import Toms from "src/components/test1Component.vue";
//import News from "src/components/test2Component.vue";
//import Popular from "src/components/test3Component.vue";
const tabs = {
  //Toms,
  //News,
  //Popular,
};
const newsData = ref(null);
const current_component = ref("ListPosts");
const component_lists = [
  {
    name_component: "ListPosts", // Имя файла компонента
    title: "Новости", // Заголовок текущего компонента
    sub_title: "Новости из всех категорий в одном месте",
    text_btn: "Новости", // Имя вкладки
    flag: "box-news",
    to: "/news/all-news",
  },
  {
    name_component: "AllNewsComments", // Имя файла компонента
    title: "Все комментарии", // Заголовок текущего компонента
    sub_title: "Все последние обсуждения новостей",
    text_btn: "Комментарии", // Имя вкладки
    flag: "box-news",
    to: "/news/all-news",
  },
  {
    name_component: "Popular", // Имя файла компонента
    title: "Популярное", // Заголовок текущего компонента
    sub_title: "Самые популятные новости",
    text_btn: "Популярное", // Имя вкладки
    flag: "box-news",
    to: "/news/all-news",
  },
];

onMounted(async () => {
  newsData.value = await news.list();
});
</script>

<style lang="scss" scoped></style>
