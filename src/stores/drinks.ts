import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useDrinkStore = defineStore('drinks', () => {
  const drinks = ref([]);
  const categories = ref(['category example']);

  return { drinks, categories };
});
