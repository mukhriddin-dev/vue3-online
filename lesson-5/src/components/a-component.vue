<template>

    <div class="wrapper">
        <h1>Component A</h1>
        <ComponentB @data="submitEmitUsers" @number="submitEmit" />
    </div>
</template>

<script setup>
import { defineEmits } from 'vue';
import ComponentB from './b-component.vue';

const emit = defineEmits();

const submitEmit = (e) => {
    console.log(e);
    emit("counter", e);
}

const submitEmitUsers = (e) => {
    console.log(e);
    emit("user", e);
}
</script>

<style scoped>
.wrapper {
    border: 2px solid red;
    padding: 50px;
    background-color: rgba(0, 255, 0, 0.207) !important;
}
</style>