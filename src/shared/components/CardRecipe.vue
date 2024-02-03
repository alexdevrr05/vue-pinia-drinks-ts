<script setup lang="ts">
import type { Drink } from '@/drinks/interfaces';

interface Props {
  recipe?: Drink;
}

defineProps<Props>();
</script>

<template>
  <div class="">
    <h2>{{ $props.recipe }}</h2>
  </div>
</template>
