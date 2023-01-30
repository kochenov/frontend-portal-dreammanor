<template>
  <video-player :option="option" :style="style" @get-instance="getInstance" />
</template>

<script setup>
import videoPlayer from "../components/videoPlayer.vue";

const option = {
  url: "",
  title: "your-video-title",
};

const style = {
  width: "97%",
  //maxWidth: "600px",
  height: "350px",
  //minHeight: "160px",
  margin: "0px auto",
};

const getInstance = (art) => {
  // console.log(art);
};
</script>
