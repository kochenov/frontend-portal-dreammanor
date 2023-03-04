<template>
  <div>Выходим</div>
</template>
<script setup>
import { useAuthStore } from "../store";

const authStore = useAuthStore();

const logout = async () => {
  await authStore.logout();
};

logout();
</script>
