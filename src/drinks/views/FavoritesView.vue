<script setup lang="ts">
import CardRecipe from '@/shared/components/CardRecipe.vue';
import { useFavoritesStore } from '@/stores/favorites';

const favoritesStore = useFavoritesStore();
</script>

<template>
  <div class="mx-4 sm:mx-0">
    <h1 class="text-5xl font-extrabold">Favoritos</h1>
    <p
      v-if="favoritesStore.noFavorites"
      class="text-xl text-center font-semibold mt-10"
    >
      Comienza agregando las bebidas de tu agrado
    </p>

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
