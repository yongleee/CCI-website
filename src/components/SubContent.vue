<script setup>
const { propsContent } = defineProps({
  propsContent: {
    type: [String, Object],
    required: true,
  },
});
</script>

<template>
  <h1 class="text-xl font-semibold my-2 text-amber-900">
    {{ propsContent.title }}
  </h1>
  <article v-if="Array.isArray(propsContent.subContent)">
    <ul>
      <li v-for="content in propsContent.subContent">
        <h2 class="text-lg font-medium my-1">{{ content.subTitle }}</h2>
        <p>{{ content.paragraph }}</p>
        <br />
      </li>
    </ul>
  </article>
  <article v-else>
    <p>{{ propsContent.subContent }}</p>
  </article>
  <br />
</template>
