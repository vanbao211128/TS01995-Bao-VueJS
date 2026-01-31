<template>
    <div class="p-5">
        <p :style="{color: textColor}">{{ message }}</p>
        <button class="btn btn-dark" @click="updateMessage">Thay đổi thông điệp</button>


    </div>
</template>

<script setup>
import { ref } from 'vue';
   
const message = ref('thông điệp ban đầu');
const updateMessage = () => {
    if (message.value === 'thông điệp ban đầu') {
        message.value = 'Thông điệp này đã được thay đổi';
    }else {
        message.value = 'thông điệp ban đầu';
    }
    

};
</script>

<style lang="scss" scoped></style>