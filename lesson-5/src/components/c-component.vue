<template>
    <div class="wrapper">
        <h1>Component C</h1>
        <ComponentD @counter="submitEmit" @users="submitEmitUsers" />
    </div>
</template>

<script setup>
import { defineEmits } from "vue";
import ComponentD from "./d-component.vue"

const emit = defineEmits();

const submitEmit = (e) => {
    console.log(e);
    emit("counter", e);
}


const submitEmitUsers = (e) => {
    console.log(e);
    emit("users", e);
}

</script>

<style scoped>
.wrapper {
    border: 2px solid red;
    padding: 50px;
    background-color: rgba(255, 247, 0, 0.207) !important;
}
</style>