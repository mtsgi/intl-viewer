<script lang="ts" setup>
import { routes } from '../router';
</script>

<template>
  <main class="p-3">
    <h2 class="h2">Home</h2>

    <hr />

    <nav class="menu">
      <router-link
        v-for="route in routes"
        class="menu-item"
        :to="route.path"
      >
        {{ route.name }}
      </router-link>
    </nav>
  </main>
</template>
