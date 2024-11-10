<template>

    <div v-cloak>... Yuklanmoqda ...</div>

    <section v-memo="[firstName, lastName]">

        <h1>{{ firstName }} {{ lastName }}</h1>
        <h1>{{ fullName }}</h1>

        <input type="text" placeholder="enter  lastname" v-model="lastName">
        <input type="text" placeholder="enter  firstname" v-model="firstName">


    </section>


</template>

<script setup>

import { ref, computed, watch, watchEffect } from "vue";

const firstName = ref("Jakhongir");
const lastName = ref("Khamdamov");

const fullName = computed(() => `
    ${firstName.value} ${lastName.value}`
);


watch([firstName, lastName], (newVal, oldVal) => {

    console.log("oldVal-->", oldVal);
    console.log("newVal-->", newVal);

    if (newVal[0].length > 12) {
        alert("lorem Ipsum")
    }

})

console.log(firstName.value);
console.log(lastName.value);

console.log("------------");

watchEffect(() => {
    console.log(firstName.value);
    console.log(lastName.value);
})




</script>

<style lang="scss" scoped></style>