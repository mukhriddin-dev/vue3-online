<template>
    <div class="min-h-screen">
      <slot/>
      <h1>{{ count }}</h1>
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@stores"
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);
</script>

<style scoped>

</style>