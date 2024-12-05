<template>
  <Header />
  <Main>
    <div>
      <h1>App.ts</h1>

      <h2>{{ user.name }}</h2>
      <h1>{{ age }}</h1>

      <button @click="incrementAge">+++++</button>

    </div>
  </Main>
  <Footer />
</template>
<script setup lang="ts">
import { ref , reactive , toRefs } from "vue";
import { Header , Footer , Main } from "@/components"
import type { Iaddress } from "@Itypes";

const num = ref<number>(1);
const str = ref<string>('Hello, world');

const user = reactive<Iaddress>({
  name: 'Otabek',
  age: 30,
  email: 'user@example.com',
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001'
  }
});

let { name, age, email , address }=toRefs<Iaddress>(user)

const incrementAge = ():void=> {
  age.value=age.value+1
}

</script>
