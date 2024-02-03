import { onMounted, reactive, ref } from 'vue';
import { defineStore } from 'pinia';

import drinkServices from '@/drinks/services/drinkServices';
import { useModalStore } from '@/stores/modal';

import type {
  Categories,
  CategoryDrink,
  Details,
  Drink,
  Recipe,
} from '@/drinks/interfaces';

export const useDrinksStore = defineStore('drinks', () => {
  const modalStore = useModalStore();

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
    // Open/close modal
    modalStore.handleClickModal();
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
