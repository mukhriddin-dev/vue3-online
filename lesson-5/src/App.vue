<template>
  <div>
    <header>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
        <li>
          <router-link to="/service">Service</router-link>
        </li>
      </ul>
    </header>
    <main>
      <router-view>
      </router-view>
    </main>
    <footer>
      <p>footer</p>
    </footer>

  </div>
</template>

<script setup>

</script>

<style scoped>
main {
  min-height: 100vh;
}

.router-link-exact-active {
  font-weight: bold;
  color: red;
}
</style>