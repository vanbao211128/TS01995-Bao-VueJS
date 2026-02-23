<template>
    <div class="row justify-content-center">
        <div v-if="!isLoggedIn" class="p-5  col-sm-4">
            <h3>Form đăng nhập</h3>
            <form @submit.prevent="login">
                <div class="mb-3">
                    <label>Tên đăng nhập: </label>
                    <input type="text" class="form-control" v-model="name" placeholder="Nhập tên đăng nhập">
                    <p v-if="nameError" style="color: red;">{{ nameError }}</p>
                </div>

                <div class="mb-3">
                    <label>Mật khẩu: </label>
                    <input type="password" class="form-control" v-model="password" placeholder="Nhập mật khẩu">
                    <p v-if="passwordError" style="color: red;">{{ passwordError }}</p>
                </div>
                <button type="submit" class="btn btn-primary">Đăng nhập</button>
            </form>
        </div>
       
    </div>
</template>

<script setup>
import { ref } from 'vue';


const emit = defineEmits(['loggedIn']);
const isLoggedIn = ref(false);
const name = ref('');
const password = ref('');
const nameError = ref('');
const passwordError = ref('');



const login = () => {
   
    nameError.value = '';
    passwordError.value = '';

 
    if (!name.value) {
        nameError.value = 'Tên đăng nhập là bắt buộc';
    } 


    if (!password.value) {
        passwordError.value = 'Mật khẩu là bắt buộc';
    }

    
    if (!nameError.value && !passwordError.value) {
        
        emit('loggedIn', name.value);
        
        alert("Đăng nhập thành công!");
    }
}


</script>

<style lang="scss" scoped></style>