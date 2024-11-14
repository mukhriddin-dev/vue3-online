<template>
    <div class="wrapper">
        <h1>Component D</h1>
        <h2>{{ count }}</h2>
        <button @click="sendDate">sed count</button>
    </div>
</template>

<script setup>
import { inject, defineEmits, ref } from "vue";
const count = ref(0);

const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
    { id: 4, name: "Alice" },
    { id: 5, name: "Eve" },
]

const user = inject("user");
const userjon = inject("name");

const emit = defineEmits();

const sendDate = () => {
    emit('counter', 11);
    emit('users', users);
}






</script>

<style scoped>
.wrapper {
    border: 2px solid red;
    padding: 50px;
    background-color: rgba(242, 0, 255, 0.207) !important;
}
</style>