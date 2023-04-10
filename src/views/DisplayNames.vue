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

    <p>
      Locale:
      <input type="text" v-model="locale" class="form-control" />
    </p>

    <p>
      Type:
      <select v-model="type" class="form-select">
        <option :value="type" v-for="type in types" :key="type">
          {{ type }}
        </option>
      </select>
    </p>

    <p>
      Code:
      <input type="text" v-model="code" class="form-control" />
    </p>

    <p v-if="result.ok" class="flash mt-3 flash-success">
      Result:
      <strong>{{ result.text }}</strong>
    </p>

    <p v-else class="flash mt-3 flash-error">
      <strong>{{ result.error }}</strong>
    </p>
  </main>
</template>
