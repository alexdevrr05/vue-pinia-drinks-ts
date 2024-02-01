<script setup lang="ts">
import type { RouterLink } from '@/router/list-navbar-router';
import SearchFormVue from './SearchForm.vue';

interface Props {
  links: RouterLink[];
}

defineProps<Props>();
</script>

<template>
  <header class="bg-slate-800">
    <div class="mx-auto container px-5 py-16">
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
          >
            {{ link.title }}
          </RouterLink>
        </nav>
      </div>

      <SearchFormVue />
    </div>
  </header>
</template>
