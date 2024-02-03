<script setup lang="ts">
import { useDrinksStore } from '@/stores/drinks';
import type { Drink } from '@/drinks/interfaces';

interface Props {
  recipe?: Drink;
}

const store = useDrinksStore();

defineProps<Props>();
</script>

<template>
  <div class="border shadow-lg" v-if="$props.recipe">
    <!-- Para que la imagen no sobresalga del card -->
    <div class="overflow-hidden">
      <img
        class="hover:scale-110 transition-transform hover:rotate-2"
        :src="$props.recipe.strDrinkThumb"
        :alt="`Imagen de Bebida ${$props.recipe?.strDrink}`"
      />
    </div>
    <div class="p-5">
      <h2 class="text-2xl truncate font-extrabold">
        {{ $props.recipe?.strDrink }}
      </h2>
      <button
        type="button"
        class="bg-orange-400 hover:bg-orange-500 transition-colors mt-5 w-full p-3 font-bold text-white text-lg"
        @click="store.selectDrink($props.recipe.idDrink)"
      >
        Ver receta
      </button>
    </div>
  </div>
</template>
