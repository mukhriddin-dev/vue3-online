<template>
  <div>
    <h1>Life cycle methods!</h1>
    <h1>Counter:{{ count }}</h1>
    <h1>{{ num }}</h1>
    <button @click="count++">Increment</button>
    <button @click="IncrementNumber">IncrementNumber</button>
    <button @click="toggleCompontent">Toggle Component</button>

  </div>
  <HelloWorld v-if="toggle" />
</template>

<script setup>
import { onMounted, onBeforeMount , ref , onBeforeUpdate , onUpdated } from "vue";
import HelloWorld from "./components/HelloWorld.vue";


let num = 1;
const count = ref(1);
const toggle = ref(true);


const toggleCompontent = () => {
  toggle.value =!toggle.value;
}

const IncrementNumber = () => {
  num++;
}

onBeforeMount(() => {
  console.log("onBeforeMount");
})

onMounted(() => {
  console.log("mounted");
})

onUpdated(() => {
  console.log("updated");
})

onBeforeUpdate(() => {
  console.log("onBeforeUpdate");
})



</script>

<style lang="scss" scoped>

</style>