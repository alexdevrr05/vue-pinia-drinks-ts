import { onMounted, reactive, ref } from 'vue';
import { defineStore } from 'pinia';

import drinkServices from '@/drinks/services/drinkServices';

import type {
  Categories,
  CategoryDrink,
  Drink,
  Recipe,
} from '@/drinks/interfaces';

export const useDrinksStore = defineStore('drinks', () => {
  const categories = ref<CategoryDrink[]>([]);
  const recipes = ref<Drink[]>([]);

  const search = reactive({
    name: '',
    category: '',
  });

  onMounted(async () => {
    const { data } = await drinkServices.getCategory();
    const responseData: Categories = data;
    categories.value = responseData.drinks;
  });

  async function getRecipes() {
    const { data } = await drinkServices.searchRecibes(search);
    const responseData: Recipe = data;
    recipes.value = responseData.drinks;
  }

  return {
    // Properties
    categories,
    search,
    recipes,

    // Methods
    getRecipes,

    // Getters
  };
});
