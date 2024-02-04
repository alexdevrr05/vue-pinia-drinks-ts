import { ref, watch } from 'vue';
import { defineStore } from 'pinia';

export const useNotificationsStrore = defineStore('notifications', () => {
  const text = ref('');
  const error = ref(false);
  const show = ref(false);

  watch(show, () => {
    if (show.value) {
      setTimeout(() => {
        text.value = '';
        error.value = false;
        show.value = false;
      }, 3000);
    }
  });

  return {
    // State
    text,
    error,
    show,
    // Getters
    // Actions
  };
});
