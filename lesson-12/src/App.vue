<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>

  <router-view></router-view>
  <h1 v-if="state.isPending">Loading...</h1>
  <h1 v-if="state.isError">Errorr...</h1>
  <ul>
    <li v-for="(el, index) in state.data">
      <p>{{ index }}</p>
    </li>
  </ul>

</template>

<script setup lang="ts">

import { onMounted } from "vue";
import { useCounter, useToggle, useFetch } from "./composables";
import { type Itodos } from "./types";
const { count, increment, decrement } = useCounter();
const { state, useQuery } = useFetch();
const { isToggle, toggle } = useToggle();


onMounted(() => {
  useQuery<Itodos[]>('https://jsonplaceholder.typicode.com/todos');
});


</script>

<style scoped>
.box {
  transition: all 0.5s;
  background-color: teal;
  padding: 20px;
  width: 400px;
  margin: 20px auto;
}

button {
  margin-top: 10px;
  padding: 10px 20px;
  cursor: pointer;
  background-color: limegreen;
}
</style>