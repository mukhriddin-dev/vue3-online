<template>

    <div class="wrapper">
        <h1>Component B</h1>
        <ComponentC @counter="submitEmit" @users="submitEmitUsers" />
    </div>
</template>

<script setup>
import { defineEmits } from "vue";
import ComponentC from "./c-component.vue";

const emit = defineEmits();

const submitEmit = (e) => {
    console.log(e);
    emit("number", e);
}

const submitEmitUsers = (e) => {
    console.log(e);
    emit("data", e);
}

</script>

<style scoped>
.wrapper {
    border: 2px solid red;
    padding: 50px;
    background-color: rgba(119, 0, 255, 0.207) !important;
}
</style>