<script setup lang="ts">
import { routes } from './router';
</script>

<template>
  <header class="Header">
    <router-link to="/" class="Header-link h1">Intl Viewer</router-link>
  </header>
  <nav class="UnderlineNav p-2">
    <div class="UnderlineNav-body" role="tablist">
      <router-link
        v-for="route in routes"
        class="UnderlineNav-item"
        :to="route.path"
        role="tab"
      >
        {{ route.name }}
      </router-link>
    </div>
  </nav>

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
