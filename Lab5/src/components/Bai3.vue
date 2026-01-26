<template>
    <div class="col-sm-8">
        <h1>Thông tin cá nhân</h1>
        <form>
            <div class="mb-3">
                <label>Họ và tên: </label>
                <input v-model="info.name" type="text" class="form-control" placeholder="Nhập họ tên ..." />
            </div>
            <div class="mb-3">
                <label>Tuổi: </label>
                <input v-model="info.age" type="text" class="form-control" placeholder="Nhập tuổi ..." />
            </div>
            <div class="mb-3">
                <label>Họ Email: </label>
                <input v-model="info.email" type="text" class="form-control" placeholder="Nhập email ..." />
            </div>

        </form>
        <div>
            <h2>Thông tin hiển thị: </h2>
            <p>Họ và tên: {{ info.name }}</p>
            <p>Tuổi: {{ info.age }}</p>
            <p>Email: {{ info.email }}</p>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
const info = reactive({
    name: '',
    age: '',
    email: ''
});

</script>

<style></style>