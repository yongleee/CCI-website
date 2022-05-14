<script setup>
import TheNavBar from "./components/TheNavBar.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <div class="bg-amber-100/40 h-full">
    <header>
      <TheNavBar />
    </header>
    <main class="pb-6">
      <router-view />
    </main>
    <footer>
      <TheFooter />
    </footer>
  </div>
</template>
