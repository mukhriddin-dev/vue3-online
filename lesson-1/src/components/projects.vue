<template>
    <section>
        <div class="container">
            <h1>Projects</h1>
            <div class="card-wrapper">
                <Card v-for="item in 4" />
            </div>
        </div>
    </section>
</template>

<script setup>
import Card from "../components/UI/card.vue"
</script>



<style scoped>
section {
    height: 90vh;
    padding: 45px 0;

    h1 {
        font-size: 42px;
        margin-bottom: 30px;
    }

    .card-wrapper {
        width: 100%;
        display: flex;

        gap: 10px;
    }

}
</style>