import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useDrinksStore = defineStore('drinks', () => {
  const drinks = ref([]);
  const categories = ref([]);

  return { drinks, categories };
});
