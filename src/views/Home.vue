<script setup>
import ImageLink from "../components/ImageLink.vue";
import { useImgContent } from "../stores/imgContent";

const store = useImgContent();
</script>

<template>
  <div class="my-2">
    <p class="sm:text-sm font-noto text-center text-xs text-amber-900">
      点击图片了解更多信息
    </p>
  </div>
  <div class="md:w-[42.75rem] mx-auto w-full">
    <ul class="flex flex-wrap">
      <li class="w-1/3" v-for="img in store.imgs" :key="img.id" :id="img.id">
        <ImageLink :image-name="img.imgName" :image-i-d="img.id" />
      </li>
    </ul>
  </div>
</template>
