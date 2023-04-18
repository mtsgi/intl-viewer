<script lang="ts" setup>
import { routes } from '../router';
</script>

<template>
  <main class="p-3">
    <h2 class="h2">Home</h2>

    <hr />

    <div class="Box">
      <div class="Box-row d-flex flex-items-center" v-for="route in routes" :key="route.path">
        <div class="flex-auto">
          <strong>{{ route.name }}</strong>
          <div class="text-small color-fg-subtle">
            Intl {{ route.name }}
          </div>
        </div>
        <router-link class="btn btn-primary" :to="route.path">
          View
        </router-link>
      </div>
    </div>
  </main>
</template>
