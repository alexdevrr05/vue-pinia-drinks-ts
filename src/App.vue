<script setup lang="ts">
import NavBar from '@/drinks/components/NavBar.vue';
import { routerLinks } from '@/router/list-navbar-router';
</script>

<template>
  <NavBar :links="routerLinks" />

  <main class="container mx-auto mt-10">
    <RouterView />
  </main>
</template>
