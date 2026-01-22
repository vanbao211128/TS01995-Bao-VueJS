<template>
    <div class="container mt-5">
        <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
        <div class="row">
            
            <div class="col-md-4">
                <div class="card">
                    <img :src="items[0].image" class="card-img-top" alt="Hình ảnh" style="height: 200px; object-fit: cover;">
                    <div class="card-body">
                        <h3 class="card-title">{{ items[0].title }}</h3>
                        <p class="card-text">{{ items[0].content }}</p>
                        <button class="btn btn-primary">Xem chi tiết</button>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card">
                    <img :src="items[1].image" class="card-img-top" alt="Hình ảnh" style="height: 200px; object-fit: cover;">
                    <div class="card-body">
                        <h3 class="card-title">{{ items[1].title }}</h3>
                        <p class="card-text">{{ items[1].content }}</p>
                        <button class="btn btn-primary">Xem chi tiết</button>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card">
                    <img :src="items[2].image" class="card-img-top" alt="Hình ảnh" style="height: 200px; object-fit: cover;">
                    <div class="card-body">
                        <h3 class="card-title">{{ items[2].title }}</h3>
                        <p class="card-text">{{ items[2].content }}</p>
                        <button class="btn btn-primary">Xem chi tiết</button>
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
/* CSS */
</style>