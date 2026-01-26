<template>
    <div class="card shadow-sm p-4 mb-5 bg-body rounded mx-auto text-start" style="max-width: 600px;">
    <h2 class="text-center mb-4 text-primary">Đăng bài viết mới</h2>
    
    <div class="mb-3">
      <label class="form-label fw-bold">Tiêu đề bài viết</label>
      <input v-model="title" type="text" class="form-control" placeholder="Nhập tiêu đề...">
    </div>

    <div class="mb-3">
      <label class="form-label fw-bold">Tên tác giả</label>
      <input v-model="author" type="text" class="form-control" placeholder="Nhập tên của bạn...">
    </div>

    <div class="mb-3">
      <label class="form-label fw-bold">Nội dung</label>
      <textarea v-model="content" class="form-control" rows="4" placeholder="Viết nội dung ở đây..."></textarea>
    </div>

    <div class="text-center">
      <button @click="submitPost" class="btn btn-success px-5 py-2 fw-bold">
        <i class="fa-solid fa-paper-plane me-2"></i>Đăng bài
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['add-post'])
const title = ref('')
const author = ref('')
const content = ref('')
function submitPost() {
    if(title.value && author.value && content.value){
        const newPost = {
            title: title.value,
            author: author.value,
            content: content.value
        }
        emit('add-post', newPost)
        title.value = ''
        author.value = ''
        content.value = ''
    }
}
</script>

<style></style>