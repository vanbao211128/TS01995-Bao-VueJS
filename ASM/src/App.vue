<template>
  <!-- <Navbar />

  <div style="min-height: 80vh;">
      <router-view></router-view>
  </div>

  <Footer /> -->
  <Navbar v-if="route.path !== '/admin'" />

  <div style="min-height: 80vh;">
      <router-view></router-view>
  </div>

  <Footer v-if="route.path !== '/admin'" />
</template>

<script setup>
 import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
const route = useRoute();

// export default {
//   name: 'App',
//   components: {
//     Navbar,
//     Footer

//   }
// }
</script>

<style>
</style>