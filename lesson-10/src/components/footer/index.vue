<template>
    <div>
     footer {{ count }}
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useCounterStore } from "@stores";
const ins = useCounterStore();

const {count}=storeToRefs(ins);

</script>

<style scoped>

</style>