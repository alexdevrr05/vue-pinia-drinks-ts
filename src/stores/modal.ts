import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

// import { useDrinksStore } from './drinks';
import { useFavoritesStore } from './favorites';

export const useModalStore = defineStore('modal', () => {
  // const drinksStore = useDrinksStore();
  const favoritesStore = useFavoritesStore();
  const modal = ref(false);

  function handleClickModal() {
    modal.value = !modal.value;
  }

  const txtButton = computed(() => {
    return favoritesStore.isFavoriteDrink()
      ? 'Eliminar de favoritos'
      : 'Agregar a favoritos';
  });

  return {
    modal,
    txtButton,
    handleClickModal,
  };
});
