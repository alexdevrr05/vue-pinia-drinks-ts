<script setup lang="ts">
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue';

import { useModalStore } from '@/stores/modal';
import { useDrinksStore } from '@/stores/drinks';

const modal = useModalStore();
const drinks = useDrinksStore();

const ingredientsFormat = () => {
  const ingredientsDiv = document.createElement('div');

  for (let i = 1; i <= 15; i++) {
    if ((drinks.details as any)[`strIngredient${i}`]) {
      const ingredient = (drinks.details as any)[`strIngredient${i}`];
      const qty = (drinks.details as any)[`strMeasure${i}`];

      const ingredientAndQty = document.createElement('p');
      ingredientAndQty.classList.add('text-lg', 'text-gray-500');
      ingredientAndQty.textContent = `${ingredient} - ${qty}`;

      ingredientsDiv.appendChild(ingredientAndQty);
    }
  }

  return ingredientsDiv;
};
</script>

<template>
  <TransitionRoot appear :show="modal.modal" as="template">
    <Dialog as="div" @close="modal.handleClickModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto" v-if="drinks.details">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <div>
                <div class="mt-3">
                  <DialogTitle
                    as="h3"
                    class="text-3xl font-extrabold my-5 text-gray-900"
                  >
                    {{ drinks.details.strDrink }}
                  </DialogTitle>

                  <img
                    :src="drinks.details.strDrinkThumb"
                    :alt="`Imagen de ${drinks.details.strDrink}`"
                    class="mx-auto w-90"
                  />

                  <DialogPanel
                    as="h3"
                    class="text-gray-900 text-2xl font-extrabold my-5"
                  >
                    Ingredientes y cantidades
                  </DialogPanel>

                  <div v-html="ingredientsFormat().outerHTML"></div>

                  <DialogPanel
                    as="h3"
                    class="text-gray-900 text-2xl font-extrabold my-5"
                  >
                    Instrucciones
                  </DialogPanel>

                  <p class="text-lg text-gray-500">
                    {{ drinks.details.strInstructions }}
                  </p>
                </div>
              </div>

              <div class="flex mt-5 justify-between gap-3">
                <button
                  type="button"
                  class="w-full text-white uppercase bg-gray-600 hover:bg-gray-500 shadow rounded p-2"
                  @click="modal.handleClickModal"
                >
                  Cerrar
                </button>

                <button
                  type="button"
                  class="w-full text-white uppercase bg-orange-600 hover:bg-orange-500 shadow rounded p-2"
                >
                  Agregar a favoritos
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
