<template>
  <div class="card">
    Hello world!
  </div>
</template>

<script setup>
import { onMounted, onBeforeMount, onBeforeUpdate, onUpdated , onBeforeUnmount , onUnmounted  } from "vue";




onMounted(() => {
  console.log("mounted H");
})

onUpdated(() => {
  console.log("updated H");
})

onBeforeUpdate(() => {
  console.log("onBeforeUpdate H");
})


onBeforeUnmount(() => { 
  console.log("beforeUnmount H");
})

onUnmounted(() => { 
  console.log("unmounted H");
})

onBeforeMount(() => {
  console.log("onBeforeMount H");
})

</script>

<style scoped>
.card{
  width: 400px;
  height: 400px;
  display: grid;
  place-content: center;
  background-color: #fee6e6;
  margin: 50px;
}
</style>