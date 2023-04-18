<script lang="ts" setup>
import { computed, ref } from 'vue';

const type = ref<Intl.DisplayNamesType>("language");
const types: Intl.DisplayNamesType[] = ["language", "region", "script", "calendar", "dateTimeField", "currency"];
const locale = ref<Intl.LocalesArgument>("en");
const code = ref<string>("ja");

const instance = computed(() => {
  return new Intl.DisplayNames(locale.value, { type: type.value })
});

const result = computed(() => {
  try {
    return {
      ok: true,
      text: instance.value.of(code.value)
    };
  } catch (error) {
    return {
      ok: false,
      error: error
    };
  }
});
</script>

<template>
  <main class="p-3">
    <h2 class="h2">DisplayNames</h2>

    <hr />

    <div class="form-group">
      <div class="form-group-header">
        <label for="locale">Locale</label>
      </div>
      <div class="form-group-body">
        <input type="text" v-model="locale" id="locale" class="form-control input-block" />
      </div>
    </div>

    <div class="form-group">
      <div class="form-group-header">
        <label for="type">Type</label>
      </div>
      <select
        v-model="type"
        id="type"
        class="form-select input-block"
        >
        <option :value="type" v-for="type in types" :key="type">
          {{ type }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <div class="form-group-header">
        <label for="code">Code</label>
      </div>
      <div class="form-group-body">
        <input type="text" v-model="code" id="code" class="form-control input-block" />
      </div>
    </div>

    <div v-if="result.ok" class="flash mt-3 flash-success">
      <p><strong>{{ result.text }}</strong></p>
    </div>

    <p v-else class="flash mt-3 flash-error">
      <strong>{{ result.error }}</strong>
    </p>
  </main>
</template>
