<script setup>
import { useImgContent } from "../stores/imgContent";

const { imageName, imageID } = defineProps({
  imageName: {
    type: String,
    required: true,
  },
  imageID: {
    type: Number,
    required: true,
  },
});

function getImgUrl(name) {
  return new URL(`../assets/${name}.jpg`, import.meta.url).href;
}

const store = useImgContent();

const mainTitle = store.getTitle(imageID);
</script>

<template>
  <div class="overflow-hidden md:w-56 m-0.5">
    <router-link
      :to="{
        name: 'Content',
        params: { id: imageID, title: mainTitle },
      }"
    >
      <img
        :src="getImgUrl(imageName)"
        alt=""
        class="md:hover:scale-110 md:transition-all focus:brightness-110"
      />
    </router-link>
  </div>
</template>
