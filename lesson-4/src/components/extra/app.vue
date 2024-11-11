<template>
    <Container v-slot="pr">tainer
        <h1>{{ pr.title }}</h1>
        <CardWrapper>
            <Card v-for="el in data" :user="el" />
        </CardWrapper>
    </Container>

    <Container v-slot="pr">
        <h1>{{ pr.title }}</h1>
        <CardWrapper>
            <Card v-for="el in data" :user="el" />
        </CardWrapper>
    </Container>
</template>

<script setup>
import { ref } from "vue";
import Card from "./components/card/index.vue"
import CardWrapper from "./components/layout/card-wrapper/index.vue"
import Container from "./components/layout/container/index.vue";
import { data } from "./constants"


</script>
