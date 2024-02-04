import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useDrinksStore } from './drinks';
import type { DrinkDetails } from '@/drinks/interfaces';

export const useFavoritesStore = defineStore('favorites', () => {
  const drinksStore = useDrinksStore();
  const favorites = ref<DrinkDetails[]>([]);

  const handleClickFavorite = () => {
    if (drinksStore.details) {
      favorites.value.push(drinksStore.details);
    }
  };

  return {
    favorites,
    handleClickFavorite,
  };
});
