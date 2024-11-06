<template>
  <section>
    <div class="container">
      <div class="wrapper">
        <div class="card" v-for="item in products">
          <img src="./assets/images/323-400x400.jpg" alt="">
          <div class="card-body">
            <h1 v-if="item.isActive">{{ item.name }}</h1>
            <h1 v-else style="text-decoration: line-through;">{{ item.name }}</h1>
            <p>{{ item.price }}</p>
            <button>buy now</button>
          </div>
        </div>
      </div>
    </div>
  </section>


</template>

<script setup>
import { ref } from 'vue';
import { products } from "./mocks/data.js"




</script>

<style lang="css" scoped>
section {
  padding: 20px;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 12px;
  align-items: center;
  margin-top: 20px;
}

.container {
  max-width: 1260px;
  margin: 0 auto;
  padding: 0 20px;
}

.card {
  width: 300px;
  height: 420px;
  background-color: #fff;
  border: 1px solid #000000;
  padding: 10px;
}

.card img {
  width: 100%;
}

.card h1,
p {
  margin-bottom: 12px;
}

.card button {
  background-color: #4CAF50;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
</style>