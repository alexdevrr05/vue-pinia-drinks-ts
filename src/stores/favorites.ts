import { onMounted, ref, watch } from 'vue';
import { defineStore } from 'pinia';
import { useDrinksStore } from './drinks';
import type { DrinkDetails } from '@/drinks/interfaces';

export const useFavoritesStore = defineStore('favorites', () => {
  const drinksStore = useDrinksStore();
  const favorites = ref<DrinkDetails[]>([]);

  onMounted(() => {
    favorites.value = JSON.parse(localStorage.getItem('favorites') || '[]');
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

  function localStorageSyncronize() {
    localStorage.setItem('favorites', JSON.stringify(favorites.value));
  }

  function isFavoriteDrink() {
    const favoritesLocalStorage = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );

    return favoritesLocalStorage.some(
      (drink: DrinkDetails) => drink.idDrink === drinksStore.details!.idDrink
    );
  }

  function handleClickDelete() {
    const updatedFavorites = favorites.value.filter(
      (drink: DrinkDetails) => drink.idDrink !== drinksStore.details!.idDrink
    );
    favorites.value = updatedFavorites;
  }

  function addDrinkToFavorites() {
    if (drinksStore.details) {
      favorites.value.push(drinksStore.details);
    }
  }

  function handleClickFavorite() {
    if (isFavoriteDrink()) return handleClickDelete();

    addDrinkToFavorites();
  }

  return {
    favorites,
    handleClickFavorite,
    isFavoriteDrink,
  };
});
