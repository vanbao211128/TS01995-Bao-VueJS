<template>
    <div class="container mx-auto" style="max-width: 800px;">
    <h2 class="text-center mb-4 text-danger">Danh sách bài viết</h2>
    
  

    <div class="row gx-3 gy-4">
      <div v-for="(post, index) in posts" :key="index" class="col-12">
        <div 
          class="card h-100 shadow-sm" 
          :class="{ 'border-warning border-3': post.title && post.title.length > 20 }"
        >
          <div class="card-header bg-transparent d-flex justify-content-between align-items-center">
            <h5 class="card-title mb-0 text-success fw-bold">{{ post.title }}</h5>
            <span class="badge bg-secondary">Bài {{ index + 1 }}</span>
          </div>
          <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">
              <i class="fa-solid fa-user-pen me-1"></i>Tác giả: <span class="text-danger">{{ post.author }}</span>
            </h6>
            <p class="card-text mt-3">{{ post.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({

    posts: {
        type: Array,
        required: true
    }

});

</script>

<style scoped>
/* Hiệu ứng hover nhẹ khi di chuột vào bài viết */
.card:hover {
    transform: translateY(-3px);
    transition: all 0.3s ease;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}
</style>