<script setup lang="ts">
import SearchFormVue from './SearchForm.vue';
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

        <nav></nav>
      </div>

      <SearchFormVue />
    </div>
  </header>
</template>
