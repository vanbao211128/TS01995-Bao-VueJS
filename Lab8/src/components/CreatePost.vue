<template>
    <div class="create-post-card p-4 mb-4">
        <h5 class="mb-3 fw-bold text-secondary">
            <i class="fa-solid fa-plane-departure text-primary me-2"></i>Chia sẻ hành trình
        </h5>

        <input v-model="post.title" class="form-control modern-input mb-3 fw-bold"
            placeholder="Tên chuyến đi của bạn (VD: Hà Giang mùa hoa)...">

        <div class="d-flex gap-3">
            <div class="avatar-circle bg-primary text-white d-flex justify-content-center align-items-center fw-bold">
                YOU
            </div>
            <div class="w-100">
                <textarea v-model="post.content" class="form-control modern-textarea mb-3" rows="3"
                    placeholder="Review chi tiết: Ăn gì, ở đâu, giá vé thế nào?"></textarea>

                <div class="input-group mb-3">
                    <span class="input-group-text bg-white border-end-0"><i
                            class="fa-solid fa-link text-muted"></i></span>
                    <input v-model="imageUrlInput" @keyup.enter="addImageFromUrl" class="form-control border-start-0"
                        placeholder="Dán link ảnh vào đây...">
                    <button @click="addImageFromUrl" class="btn btn-outline-primary" type="button">Thêm</button>
                </div>

                <div v-if="post.images.length > 0" class="d-flex flex-wrap gap-2 mt-2">
                    <div v-for="(img, index) in post.images" :key="index" class="position-relative">
                        <img :src="img" class="rounded-3 shadow-sm border"
                            style="width: 100px; height: 100px; object-fit: cover;">
                        <button @click="removeImage(index)"
                            class="btn btn-sm btn-danger position-absolute top-0 end-0 p-0 rounded-circle"
                            style="width: 20px; height: 20px; font-size: 10px; margin: 2px;">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
            <div class="d-flex gap-2 align-items-center">
                <label class="btn btn-light text-primary rounded-pill btn-sm hover-effect cursor-pointer">
                    <i class="fa-regular fa-image me-1"></i> Upload ảnh
                    <input ref="fileInput" type="file" @change="handleImages" hidden accept="image/*" multiple>
                </label>

                <input v-model="post.author" class="form-control form-control-sm rounded-pill border-0 bg-light"
                    placeholder="Tên bạn..." style="width: 120px;">

                <select v-model="post.location" class="form-select form-select-sm rounded-pill border-0 bg-light"
                    style="width: 130px;">
                    <option value="" disabled selected>Khu vực</option>
                    <option>Miền Bắc</option>
                    <option>Miền Trung</option>
                    <option>Miền Nam</option>
                    <option>Nước ngoài</option>
                </select>
                <select v-model="post.category"
                    class="form-select form-select-sm rounded-pill border-0 bg-light fw-bold text-secondary"
                    style="width: 160px;">
                    <option value="" disabled selected>Chọn chủ đề</option>
                    <option value="blog">Blog du lịch</option>
                    <option value="hotel">Khách sạn & Resort</option>
                    <option value="food">Ẩm thực & Ăn uống</option>
                </select>
            </div>

            <button @click="submit" :disabled="isSubmitting"
                class="btn btn-primary rounded-pill px-4 fw-bold shadow-sm custom-btn">
                <span v-if="isSubmitting"><i class="fa-solid fa-spinner fa-spin"></i> Đang đăng...</span>
                <span v-else>Đăng bài <i class="fa-solid fa-paper-plane ms-1"></i></span>
            </button>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
const emit = defineEmits(['add-new-post']);

const fileInput = ref(null);
const isSubmitting = ref(false);
const imageUrlInput = ref(''); 

const post = reactive({
    title: '',
    content: '',
    author: '',
    location: '',
    category: 'blog',
    images: []
});

const addImageFromUrl = () => {
    if (imageUrlInput.value.trim() !== '') {
        post.images.push(imageUrlInput.value.trim());
        imageUrlInput.value = ''; 
    }
}


const handleImages = (e) => {
    const files = e.target.files;
    if (files) {
        for (let i = 0; i < files.length; i++) {
            const reader = new FileReader();
            reader.onload = (e) => {
                post.images.push(e.target.result);
            };
            reader.readAsDataURL(files[i]);
        }
    }
};

const removeImage = (index) => {
    post.images.splice(index, 1);
}

const submit = () => {

    if (imageUrlInput.value.trim() !== '') {
        post.images.push(imageUrlInput.value.trim());
        imageUrlInput.value = '';
    }

    isSubmitting.value = true;

   
    emit('add-new-post', JSON.parse(JSON.stringify(post)));

    setTimeout(() => {
        post.title = '';
        post.content = '';
        post.images = [];
        post.location = '';
        post.category = 'blog';
        post.author = '';
        imageUrlInput.value = ''; 

        if (fileInput.value) {
            fileInput.value.value = '';
        }
        isSubmitting.value = false;
    }, 500);
};
</script>

<style scoped>
.create-post-card {
    background: white;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.modern-input {
    border: none;
    font-size: 1.1rem;
    padding-left: 0;
    outline: none;
}

.modern-input:focus {
    box-shadow: none;
    border-bottom: 2px solid #0d6efd;
}

.modern-textarea {
    border: none;
    background: #f8f9fa;
    border-radius: 15px;
    resize: none;
}

.modern-textarea:focus {
    background: white;
    box-shadow: 0 0 0 2px #e9ecef;
}

.avatar-circle {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    font-size: 0.8rem;
    flex-shrink: 0;
}

.hover-effect:hover {
    background-color: #e7f1ff;
    cursor: pointer;
}

.custom-btn {
    transition: transform 0.2s;
}

.custom-btn:active {
    transform: scale(0.95);
}
</style>