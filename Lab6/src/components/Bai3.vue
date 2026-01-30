<template>
    <div class="container mt-5">
        <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
        <div class="row">
            
            <div class="col-md-4" v-for="(item, index) in items" :key="index">
                <div class="card">
                    <img :src="item.image" class="img-fluid" alt="Hình ảnh" style="height: 200px; object-fit: cover;">
                    <div class="card-body">
                        <h3 class="card-title">{{ item.title }}</h3>
                        <p class="card-text">{{ item.content }}</p>
                        <button class="btn btn-info">Xem chi tiết</button>
                    </div>
                </div>
            </div>

          

        </div>
    </div>
</template>

<script setup>

const items = [
    { 
        title: '8 loại rau củ quả giàu canxi', 
        content: 'Canxi là...', 
        image: '/images/img1.jpg' 
    },
    { 
        title: 'Các loại gia vị tốt cho sức khỏe', 
        content: 'Một số loại...', 
        image: '/images/img2.jpg' 
    },
    { 
        title: '9 loại đậu bổ dưỡng nên dùng nhiều', 
        content: 'Đậu lăng...', 
        image: '/images/img3.jpg' 
    }
];
</script>

<style scoped>

</style>