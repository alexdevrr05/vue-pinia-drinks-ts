import { onMounted, reactive, ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

import type { Categories, CategoryDrink } from '@/drinks/interfaces';

export const useDrinksStore = defineStore('drinks', () => {
  const categories = ref<CategoryDrink[]>([]);
  const search = reactive({
    name: '',
    category: '',
  });

  onMounted(async () => {
    const { data } = await axios.get<Categories>(
      'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    );
    categories.value = data.drinks;
  });

  return { categories, search };
});
