<script setup lang="ts">
import { useDrinksStore } from '@/stores/drinks';
import { useNotificationsStrore } from '@/stores/notifications';

// No destructuring para no perder la reactividad
const store = useDrinksStore();
const notifications = useNotificationsStrore();

const hadleSubmit = () => {
  // TODO: Validar

  // If either of the two params is empty
  if (Object.values(store.search).includes('')) {
    notifications.text = 'Todos los campos son obligatorios';
    notifications.error = true;
    notifications.show = true;

    return;
  }

  store.getRecipes();
};
</script>

<template>
  <form
    @submit.prevent="hadleSubmit"
    class="md:w-1/2 2xl:w-1/3 bg-primary my-32 p-10 rounded-lg shadow space-y-6"
  >
    <div class="space-y-4">
      <label
        class="block text-white uppercase font-extrabold text-lg"
        for="ingrediente"
        >Nombre o ingrediente</label
      >
      <input
        class="p-3 w-full rounded-lg focus:outline-none"
        id="ingrediente"
        type="text"
        placeholder="Nombre o ingrediente: Tequila, Whiskey, etc"
        v-model="store.search.name"
      />
    </div>

    <div class="space-y-4">
      <label
        class="block text-white uppercase font-extrabold text-lg"
        for="categoria"
        >Categoría</label
      >
      <select
        class="p-3 w-full rounded-lg focus:outline-none"
        id="categoria"
        v-model="store.search.category"
      >
        <option value="">-- Seleccione --</option>
        <option
          v-for="category of store.categories"
          :key="category.strCategory"
          :value="category.strCategory"
        >
          {{ category.strCategory }}
        </option>
      </select>
    </div>

    <input
      type="submit"
      class="bg-secondary hover:bg-secondary/90 cursor-pointer text-white font-extrabold uppercase w-full rounded-lg p-2 transition-colors"
      value="Buscar recetas"
    />
  </form>
</template>
