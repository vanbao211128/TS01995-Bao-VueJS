<template>
    <div class="container mt-4">
        <h2 class="text-center text-primary">Ứng dụng Bình luận</h2>
        
        <Bai4 v-if="!isLoggedIn" @loggedIn="handleLoginSuccess" />

        <Bai4a v-else :username="loggedInUser" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Bai4 from './Bai4.vue';   
import Bai4a from './Bai4a.vue'; 

const isLoggedIn = ref(false);
const loggedInUser = ref('');

function handleLoginSuccess(username) {
    loggedInUser.value = username;
    isLoggedIn.value = true; 
}
</script>