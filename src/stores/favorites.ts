import { onMounted, ref, watch } from 'vue';
import { defineStore } from 'pinia';
import { useDrinksStore } from './drinks';
import type { DrinkDetails } from '@/drinks/interfaces';

export const useFavoritesStore = defineStore('favorites', () => {
  const drinksStore = useDrinksStore();
  const favorites = ref<DrinkDetails[]>([]);

  onMounted(() => {
    favorites.value = JSON.parse(localStorage.getItem('favorites') || '');
  });

  watch(
    favorites,
    () => {
      localStorageSyncronize();
    },
    {
      deep: true,
    }
  );

  const localStorageSyncronize = () => {
    localStorage.setItem('favorites', JSON.stringify(favorites.value));
  };

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
