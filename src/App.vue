<script setup lang="ts">
</script>

<template>
  <header class="Header">
    <router-link to="/" class="Header-link h1">Intl Viewer</router-link>
  </header>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 1em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 1em #42b883aa);
}
</style>
