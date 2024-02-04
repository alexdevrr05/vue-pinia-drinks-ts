<script setup lang="ts">
import CardRecipe from '@/shared/components/CardRecipe.vue';
import { useFavoritesStore } from '@/stores/favorites';

const favoritesStore = useFavoritesStore();
</script>

<template>
  <h1 class="text-xl font-extrabold">Favoritos</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 gap-10">
    <CardRecipe
      v-for="recipe of favoritesStore.favorites"
      :key="recipe.idDrink"
      :recipe="recipe"
    />
  </div>
</template>
