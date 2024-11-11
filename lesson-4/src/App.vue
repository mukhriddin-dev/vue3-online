<template>
  <MainLayout>
    <template #header="pr">
      <header>
        <h1>Header {{ pr.title }}</h1>
      </header>
    </template>
    <template #main="pr">
      <h1>Main {{ pr.title }}</h1>
    </template>
    <template #footer="ft">
      <h1>Footer {{ ft.title }}</h1>
    </template>
  </MainLayout>
</template>

<script setup>
import MainLayout from "./layouts/main-layout.vue"

</script>
