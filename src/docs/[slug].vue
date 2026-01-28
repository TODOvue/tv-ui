<script setup>
import { ref, watch, shallowRef } from 'vue';
import { componentRegistry } from '../registry';

const props = defineProps(['slug']);
const CurrentDemo = shallowRef(null);
const loading = ref(true);
const error = ref(false);

const loadDemo = async (slug) => {
  loading.value = true;
  error.value = false;

  const loader = componentRegistry[slug];

  if (loader) {
    try {
      const module = await loader();
      CurrentDemo.value = module.default;
    } catch (err) {
      error.value = true;
    }
  } else {
    error.value = true;
  }
  loading.value = false;
};

watch(() => props.slug, (newSlug) => loadDemo(newSlug), { immediate: true });
</script>

<template>
  <div class="demo-container">
    <div v-if="loading">Loading {{ slug }} demo...</div>
    <div v-else-if="error">The demo for component "{{ slug }}" does not exist.</div>
    <component :is="CurrentDemo" v-else />
  </div>
</template>
