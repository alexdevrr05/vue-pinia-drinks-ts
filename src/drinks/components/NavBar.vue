<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import type { RouterLink } from '@/router/list-navbar-router';
import SearchFormVue from './SearchForm.vue';

interface Props {
  links: RouterLink[];
}

defineProps<Props>();

const route = useRoute();
// Para mostrar o ocultar el banner (buscador/imagen)
const isPageHome = computed(() => route.name === 'home');
</script>

<template>
  <!-- header es el nombre de la clase css "header" -->
  <header class="bg-slate-800" :class="{ header: isPageHome }">
    <div class="mx-auto container px-5 pb-16 pt-8">
      <div class="flex justify-between items-center">
        <div>
          <RouterLink :to="{ name: 'home' }">
            <img class="w-32" src="/img/logo.svg" alt="Logotipo" />
          </RouterLink>
        </div>

        <nav class="flex gap-4">
          <RouterLink
            class="text-white uppercase font-extrabold"
            v-for="link of $props.links"
            :key="link.path"
            :to="link.path"
            active-class="text-orange-500"
          >
            {{ link.title }}
          </RouterLink>
        </nav>
      </div>

      <SearchFormVue v-if="isPageHome" />
    </div>
  </header>
</template>

<style>
.header {
  background-image: url('/img/bg.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
