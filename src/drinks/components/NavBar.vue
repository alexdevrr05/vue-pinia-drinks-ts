<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import SearchFormVue from './SearchForm.vue';
import type { RouterLink } from '@/router/list-navbar-router';

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
  <header class="bg-quaternary" :class="{ header: isPageHome }">
    <div class="mx-auto container px-5 pb-16 pt-8">
      <div class="flex justify-between items-center">
        <div>
          <RouterLink :to="{ name: 'home' }">
            <img
              width="8rem"
              height="8rem"
              class="w-32"
              src="/img/vue-cocktail.svg"
              alt="Logotipo"
            />
          </RouterLink>
        </div>

        <!-- Se coloca text-white aqui y no directamente en el
           RouterLink porque da problemas con el active-class -->

        <nav class="flex gap-4 text-white">
          <RouterLink
            class="uppercase font-extrabold"
            v-for="link of $props.links"
            :key="link.path"
            :to="link.path"
            active-class="text-primary"
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
