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
              <div class="mt-2">
                <DialogTitle
                  as="h3"
                  class="text-4xl font-extrabold my-5 text-gray-900"
                >
                  {{ drinks.details.strDrink }}
                </DialogTitle>
                <p>{{ drinks.details.strInstructions }}</p>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="w-full text-white uppercase bg-gray-600 hover:bg-gray-500 shadow rounded p-3"
                  @click="modal.handleClickModal"
                >
                  Cerrar
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
