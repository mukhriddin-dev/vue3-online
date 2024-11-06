<template>
    <div>
        <h1>{{ count }}</h1>
        <hr>
        <p>{{ user }}</p>
        <hr>
        <p>{{ extarUser }}</p>
        <button @click="setUserName">change name</button>
    </div>
</template>

<script setup>

import { ref, reactive } from "vue"


const count = ref(1);

const extarUser = ref({
    name: "Jane Doe",
    age: 25,
    email: "jane.doe@example.com",
    address: {
        street: "456 Elm St",
        city: "Los Angeles",
        state: "CA",
        zip: "90001",
        additionalProperties: {
            property1: "value1",
            property2: "value2"
        }
    }
})

const user = reactive({
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zip: "10001"
    }
});

const setUserName = () => {

    count.value = 2;
    user.name = "Jahongir";
    extarUser.value.name = "Jaloliddin"
    extarUser.value.address.additionalProperties.property1 = 77777;

}


</script>

<style lang="scss" scoped></style>