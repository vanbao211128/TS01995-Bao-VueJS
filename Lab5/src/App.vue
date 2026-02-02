<script setup>
import Bai1 from './components/Bai1.vue';
import Bai2 from './components/Bai2.vue';
import Bai3 from './components/Bai3.vue';
import Bai4 from './components/Bai4.vue';
import Bai4a from './components/Bai4a.vue';

import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue'

const posts = ref([])

function addPost(post) {
posts.value.push(post)
}
</script>

<template>
 <!-- <Bai1/> -->
   <!-- <Bai2/>  -->
<!-- <Bai3/>  -->
   <!-- <Bai4/> 
   <Bai4a/> -->
  <div id="app" class="container mt-4">
    <h1>Ứng dụng Blog nhỏ với Vue.js</h1>

    <Bai4 @add-post="addPost" /> 
    
    <hr />

    <Bai4a :posts="posts"/>

  </div>
 
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
