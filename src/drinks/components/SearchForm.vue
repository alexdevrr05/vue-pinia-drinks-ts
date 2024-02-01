<script setup lang="ts"></script>

<template>
  <form
    class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
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
        type="text"
      >
        <option value="">-- Seleccione --</option>
      </select>
    </div>

    <input
      type="submit"
      class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold uppercase w-full rounded-lg p-2"
      value="Buscar recetas"
    />
  </form>
</template>
