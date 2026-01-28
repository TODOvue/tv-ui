<script setup>
import { RouterView } from 'vue-router';
import { provide } from 'vue';

const resolvePath = (componentName, type, defaultPath) => {
  const kebabName = componentName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

  if (type === 'readme') {
    return `/demos/${kebabName}/README.md`;
  }
  if (type === 'changelog') {
    return `/demos/${kebabName}/CHANGELOG.md`;
  }
  return defaultPath;
};

provide('TV_DEMO_CONTEXT', {
  resolvePath
});
</script>

<template>
  <router-view />
  <tv-scroll-top />
</template>
