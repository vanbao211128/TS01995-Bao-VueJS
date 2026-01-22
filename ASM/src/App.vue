<template>
  <Navbar />

  <div style="min-height: 80vh;">
      <router-view></router-view>
  </div>

  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Navbar,
    Footer

  }
}
</script>

<style>
</style>