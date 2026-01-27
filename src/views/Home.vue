<script setup>
import { RouterLink } from 'vue-router';

import { componentRegistry } from '../registry';

const demos = Object.keys(componentRegistry);
</script>

<template>
  <ul>
    <li
      v-for="(demo, index) in demos"
      :key="index"
    >
      <router-link :to="demo">@todovue/tv-{{ demo }}</router-link>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin-left: 10px;
}

li {
  margin: 0.5em 0;
}
</style>
