// old APP.vue

<template>
    <h1>Parent component</h1>
    <input type="text" placeholder="enter username" v-model="user.name">
    <div class="wrapper">
        <ComponentA :user="user" @counter="submitEmit" @user="submitEmitUsers" />
    </div>
</template>

<script setup>
import { reactive, provide } from "vue"
import ComponentA from "./components/a-component.vue";


const user = reactive({
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
})

const name = "Javxirbek"

provide("user", user)
provide("name", name)

const submitEmit = (e) => {
    console.log(e);
}

const submitEmitUsers = (e) => {
    console.log(e);
}


</script>

<style scoped>
.wrapper {
    background-color: #f0f0f0;
    padding: 120px;
}
</style>