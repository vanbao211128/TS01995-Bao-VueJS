<script setup>
import Bai2 from './components/Bai2.vue';
import Bai3 from './components/Bai3.vue';
import Bai4 from './components/Bai4.vue';
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue';
</script>

<template>
  <Test/>
  <Bai2/>
  <Bai3/>
  <Bai4/>
</template>

<style scoped>
.row {
  display: flex;        /* Lệnh xếp hàng ngang thần thánh */
  gap: 30px;            /* Khoảng cách giữa các bài cho thoáng */
  justify-content: center; /* Căn giữa màn hình cho đẹp */
}
</style>
