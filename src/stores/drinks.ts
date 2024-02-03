import { onMounted, reactive, ref } from 'vue';
import { defineStore } from 'pinia';

import drinkServices from '@/drinks/services/drinkServices';

import type {
  Categories,
  CategoryDrink,
  Details,
  Drink,
  Recipe,
} from '@/drinks/interfaces';

export const useDrinksStore = defineStore('drinks', () => {
  const categories = ref<CategoryDrink[]>([]);
  const recipes = ref<Drink[]>([]);
  const details = ref<{ [key: string]: null | string }>({});

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

  async function selectDrink(id: string) {
    const { data } = await drinkServices.getDetailsDrinkById(id);
    const responseData: Details = data;
    details.value = responseData.drinks[0];
  }

  return {
    // Properties
    categories,
    search,
    recipes,
    details,

    // Methods
    getRecipes,
    selectDrink,

    // Getters
  };
});
