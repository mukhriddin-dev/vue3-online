<template>
    <div>
        <img src="https://picsum.photos/id/323/400/400" alt="smsm">
        <img :src="image" :alt="imageAlt" :title="title">
    </div>
    <button @click="change">change</button>
</template>

<script setup>

import { ref } from "vue"
import image from "./assets/images/323-400x400.jpg";

// v-bind: -> :
// v-on: -> @

let imageURL = ref("http://picsum.photos/id/313/400/400");
let imageAlt = "smth image alt";
let title = "sth image alt";

const change = () => {
    console.log("changes");
    imageURL.value = "https://picsum.photos/id/343/400/400";

}

</script>

<style lang="scss" scoped></style>