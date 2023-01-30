<template>
  <div ref="artRef"></div>
</template>

<script setup>
import Artplayer from "artplayer";
import { ref, onMounted, nextTick } from "vue";

const artRef = ref(null);
const instance = ref(null);

const props = defineProps(["option"]);
const emets = defineEmits(["get-instance"]);
const optionPlayer = {
  theme: "#ffad00",
  //autoSize: true,
  //autoMini: true,
  playbackRate: true,
  aspectRatio: true,
  screenshot: true,
  hotkey: true,
  pip: true,
  miniProgressBar: true,
  setting: true,
  fullscreen: true,
  //fullscreenWeb: true,
  playsInline: true,
  icons: {
    loading: "",
    state: "",
  },
  lang: "ru",
  i18n: {
    ru: {
      Play: "Воспроизвести",
      Screenshot: "Сделать фото кадра",
      "Show Setting": "Показать настройки",
      "Hide Setting": "Скрыть настройки",
      "Play Speed": "Скорость",
      "Aspect Ratio": "Формат",
      Default: "Стандарт",
      Fullscreen: "На весь экран",
      Volume: "Громкость",
    },
  },
  lock: true,
  autoOrientation: true,
};
onMounted(() => {
  let option = { ...optionPlayer, ...props.option };
  instance.value = new Artplayer({
    ...option,
    container: artRef.value,
  });
});

nextTick(() => {
  emets("get-instance", instance.value);
});
</script>
