import { computed, onMounted, ref, watch } from 'vue';
import { defineStore } from 'pinia';
import { useDrinksStore } from './drinks';
import { useModalStore } from './modal';
import { useNotificationsStrore } from './notifications';
import type { DrinkDetails } from '@/drinks/interfaces';

export const useFavoritesStore = defineStore('favorites', () => {
  const drinksStore = useDrinksStore();
  const modalStore = useModalStore();
  const notificationsStore = useNotificationsStrore();
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

    const example = favoritesLocalStorage.some(
      (drink: DrinkDetails) => drink.idDrink === drinksStore.details!.idDrink
    );

    // console.log(example);
    return example;
  }

  function handleClickDelete() {
    const updatedFavorites = favorites.value.filter(
      (drink: DrinkDetails) => drink.idDrink !== drinksStore.details!.idDrink
    );

    favorites.value = updatedFavorites;

    notificationsStore.show = true;
    notificationsStore.text = 'Bebida eliminada correctamente';
  }

  function addDrinkToFavorites() {
    if (drinksStore.details) {
      favorites.value.push(drinksStore.details);
    }

    notificationsStore.show = true;
    notificationsStore.text = 'Bebida agregada correctamente';
  }

  function handleClickFavorite() {
    if (isFavoriteDrink()) {
      handleClickDelete();
    } else {
      addDrinkToFavorites();
    }
    // close modal
    modalStore.modal = false;
  }

  return {
    // State
    favorites,

    // Getters
    noFavorites: computed(() => favorites.value.length === 0),

    // Actions
    handleClickFavorite,
    isFavoriteDrink,
  };
});
