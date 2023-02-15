<template>
  <q-layout view="lHh Lpr lFf">
    <q-ajax-bar position="top" color="red" size="4px" />
    <q-header class="color-bg text-white" height-hint="69">
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          class="text-primary"
          @click="toggleLeftDrawer"
        />
        <div class="flex flex-center lt-md" style="width: 100%">
          <h6
            class="text-subtitle2 text-black cursor-pointer q-ma-none"
            @click.prevent="toggleRightDrawer"
          >
            МЕНЮ
          </h6>
        </div>
        <TopMenu
          @subMenu="
            (e) => {
              tab = e;
            }
          "
        />

        <q-space />
        <q-btn
          color="primary"
          outline
          dense
          flat
          square
          fab-mini
          icon="account_circle"
        >
          <q-menu>
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">Settings</div>
                <q-toggle v-model="mobileData" label="Use Mobile Data" />
                <q-toggle v-model="bluetooth" label="Bluetooth" />
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px">
                  <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

                <q-btn
                  color="primary"
                  label="Logout"
                  push
                  size="sm"
                  v-close-popup
                />
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>

      <SubMenu :tabName="tab" />
      <HeaderPromo />
      <BreadcrumbsHeader v-if="$route.name != 'home'" />
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <LeftPart />
    </q-drawer>
    <q-drawer
      v-model="rightDrawerOpen"
      bordered
      side="right"
      behavior="mobile"
      overlay
    >
      <q-list separator padding class="text-primary">
        <q-item v-ripple>
          <q-item-section avatar>
            <q-icon
              class="pointer"
              @click="subMenuMobail = null"
              v-if="subMenuMobail != null"
              name="keyboard_backspace"
            />
          </q-item-section>

          <q-item-section
            ><span
              class="pointer"
              @click="subMenuMobail = null"
              v-if="subMenuMobail != null"
              >Назад</span
            ></q-item-section
          >

          <q-separator vertical inset="item-thumbnail" />
          <q-item-section class="pointer" @click="toggleRightDrawer()" side>
            <q-icon name="close" />
          </q-item-section>
        </q-item>
        <q-separator />
        <TopMenu
          v-if="subMenuMobail == null"
          mobile
          @subMenuMobile="
            (e) => {
              subMenuMobail = e;
            }
          "
        />
        <SubMenu mobile :tab-name="subMenuMobail" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page class="">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useAuthStore } from "src/stores/all";
import { ref } from "vue";
import TopMenu from "../components/navs/menu/TopMenu.vue";
import SubMenu from "../components/navs/menu/SubMenu.vue";
import HeaderPromo from "../components/promo/HeaderPromo.vue";
import BreadcrumbsHeader from "../components/navs/BreadcrumbsHeader.vue";
import LeftPart from "../components/parts/LeftPart.vue";

const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);
const authStore = useAuthStore();

const tab = ref("home");
const subMenuMobail = ref(null);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
  subMenuMobail.value = null;
};
</script>
<style lang="scss">
.my-menu-link {
  color: white;
  background: #f2c037;
}
.pointer {
  cursor: pointer;
}
</style>
