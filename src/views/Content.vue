<script setup>
import { useImgContent } from "../stores/imgContent";
import { ref } from "vue";
import SubContent from "../components/SubContent.vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const id = parseInt(props.id);

const store = useImgContent();

const { imgContent1, imgContent2, imgContent3, imgContent4, imgContent5 } =
  store.getContent(id);

const contents = ref([
  {
    id: 1,
    title: "朝代地区",
    subContent: imgContent1,
  },
  {
    id: 2,
    title: "背景介绍",
    subContent: imgContent2,
  },
  {
    id: 3,
    title: "特点特色",
    subContent: imgContent3,
  },
  {
    id: 4,
    title: "相关故事与冷知识",
    subContent: imgContent4,
  },
  {
    id: 5,
    title: "版权来源",
    subContent: imgContent5,
  },
]);

const mainTitle = ref(store.getTitle(id));
</script>

<template>
  <div
    class="container mx-auto py-4 w-11/12 md:w-5/6 font-noto whitespace-pre-line text-stone-800"
  >
    <h1 class="text-3xl font-bold my-10 text-amber-800">{{ mainTitle }}</h1>
    <ul>
      <li v-for="content in contents">
        <SubContent :props-content="content" />
      </li>
    </ul>
  </div>
</template>
