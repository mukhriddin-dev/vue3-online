<template>
    <div class="container">
        <slot :title="t" />
    </div>
</template>

<script setup>
const t = "container";
</script>

<style>
.container {
    max-width: 1250px;
    margin: 0 auto;
    padding: 0 20px;
}
</style>