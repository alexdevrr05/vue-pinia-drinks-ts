<script setup lang="ts">
import CardRecipe from '@/shared/components/CardRecipe.vue';
import { useFavoritesStore } from '@/stores/favorites';

const favoritesStore = useFavoritesStore();
</script>

<template>
  <div class="mx-4 sm:mx-0">
    <h1 class="text-5xl font-extrabold">Favoritos</h1>
    <span v-if="favoritesStore.noFavorites" class="text-xl font-semibold mt-2">
      Comienza agregando las bebidas de tu agrado
    </span>

    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 gap-10"
    >
      <CardRecipe
        v-for="recipe of favoritesStore.favorites"
        :key="recipe.idDrink"
        :recipe="recipe"
      />
    </div>
  </div>
</template>
