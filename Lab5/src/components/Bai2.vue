<template>
    <div>
<input v-model="user" placeholder="Nhập dữ liệu vào">
<p>Giá trị: {{ user }}</p>

    </div>
</template>

<script setup>
   import { ref } from 'vue';
   const user = ref('FPL');
</script>

<style lang="scss" scoped>

</style>