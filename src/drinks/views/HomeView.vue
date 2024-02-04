<script setup lang="ts">
import CardRecipe from '@/shared/components/CardRecipe.vue';
import { useDrinksStore } from '@/stores/drinks';

const store = useDrinksStore();
</script>

<template>
  <h1 class="text-6xl font-extrabold">Recetas</h1>

  <p v-if="store.noRecipes" class="text-center mt-10 text-xl font-semibold">
    No hay resultados, comienza buscando tus bebidas...
  </p>

  <div
    v-else
    class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 gap-10"
  >
    <CardRecipe
      v-for="recipe of store.recipes"
      :key="recipe.idDrink"
      :recipe="recipe"
    />
  </div>
</template>
