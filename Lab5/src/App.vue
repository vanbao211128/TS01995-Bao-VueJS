<script setup>
import { ref } from 'vue';
import Bai4 from './components/Bai4.vue';
import Bai4a from './components/Bai4a.vue';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
const posts = ref([])

function addpost(post) {
  posts.value.push(post)
}

// import Bai3 from './components/Bai3.vue';

// import Bai1 from './components/Bai1.vue';
// import Bai2 from './components/Bai2.vue';

// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <Bai1/>
  <Bai2/> -->
  <!-- <Bai3/> -->
  <div>

    <Bai4 @add-post="addpost" />
    <Bai4a :posts="posts" />
  </div>
</template>

<style>
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
