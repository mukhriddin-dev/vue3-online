<template>
    <div class="card">
        <img src="https://picsum.photos/id/123/120/120" alt="smth">
        <div class="body">
            <h3>Name: {{ user.name }} </h3>
            <h4>Age: {{ user.age }} </h4>
            <button @click="getMessage">show</button>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    user: {
        type: Object,
        required: true,
        default: {
            name: "John Doe",
            age: 30,
            id: 12
        }
    }
})


const getMessage = () => {
    alert(props.user.name)
}

</script>

<style src="./style.css" scoped></style>