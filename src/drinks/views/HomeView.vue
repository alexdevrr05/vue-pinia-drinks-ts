<script setup lang="ts">
import CardRecipe from '@/shared/components/CardRecipe.vue';
import { useDrinksStore } from '@/stores/drinks';

const store = useDrinksStore();
</script>

<template>
  <h1 class="text-6xl font-extrabold">Recetas</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-10 gap-10">
    <CardRecipe
      v-for="recipe of store.recipes"
      :key="recipe.idDrink"
      :recipe="recipe"
    />
  </div>
</template>
