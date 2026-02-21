<template>
    <div>
        <div v-if="posts.length === 0" class="text-center py-5 text-muted bg-light rounded">
            <i class="fa-solid fa-suitcase-rolling fa-3x mb-3 text-secondary"></i>
            <p>Chưa có bài review nào.</p>
        </div>

        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col" v-for="(post, index) in posts" :key="index">
                <div class="card h-100 shadow-sm border-0 post-card cursor-pointer" @click="goToDetail(index)">

                    <div class="position-relative">
                        <img v-if="post.images && post.images.length > 0" :src="post.images[0]" class="card-img-top"
                            style="height: 200px; object-fit: cover;">

                        <img v-else-if="post.image" :src="post.image" class="card-img-top"
                            style="height: 200px; object-fit: cover;">

                        <img v-else src="https://via.placeholder.com/300x200?text=No+Image" class="card-img-top"
                            style="height: 200px; object-fit: cover;">

                        <span v-if="post.images && post.images.length > 1"
                            class="position-absolute bottom-0 end-0 bg-dark text-white px-2 py-1 m-2 rounded small opacity-75">
                            <i class="fa-regular fa-images"></i> +{{ post.images.length - 1 }}
                        </span>
                    </div>

                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title fw-bold text-dark hover-title">{{ post.title }}</h5>
                        <p class="text-muted small mb-2 border-bottom pb-2">
                            <i class="fa-solid fa-user me-1 text-primary"></i> {{ post.author || 'Member' }}
                            <span class="mx-1">•</span> {{ post.date }}
                        </p>
                        <p class="card-text text-secondary flex-grow-1 text-truncate-3">
                            {{ post.content }}
                        </p>
                        <div class="card-body d-flex flex-column">
                            <router-link :to="{ name: 'PostDetail', params: { id: index } }"
                                class="btn btn-outline-primary w-100 mt-2 fw-bold rounded-pill">
                                Xem chi tiết
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
defineProps(['posts']);

const router = useRouter();
const goToDetail = (index) => {
    router.push ({ name: 'PostDetail', params:{id: index}})
}
</script>

<style scoped>
.post-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.post-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.text-truncate-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.cursot-pointer{
    cursor: pointer;
}
</style>