<script setup lang="ts">
import { routerLinks } from '@/router/list-navbar-router';

import NavBar from '@/drinks/components/NavBar.vue';
import CustomModal from './shared/components/CustomModal.vue';
</script>

<template>
  <NavBar :links="routerLinks" />

  <main class="container mx-auto mt-10">
    <RouterView />
  </main>

  <CustomModal />
</template>
