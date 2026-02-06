<template>
    <div class="container py-4">
        <div class="row">
            <div class="col-md-4 col-lg-4">
                <div class="sticky-top" style="top: 20px; z-index: 1;">
                <div class="mb-5">
                    <h5 class="fw-bold text-dark mb-3">Danh mục</h5>
                    <ul class="list-group list-group-flush cursor-pointer">
                        <li class="list-group-item bg-transparent border-0 px-0 py-2"
                            @click.prevent="currentCategory = 'blog'">
                            <a href="#" class="text-decoration-none hover-link"
                                :class="currentCategory === 'blog' ? 'text-primary fw-bold' : 'text-secondary'">
                                <i class="fa-solid fa-angle-right me-2 small"></i>Blog du lịch
                            </a>
                        </li>
                        <li class="list-group-item bg-transparent border-0 px-0 py-2"
                            @click.prevent="currentCategory = 'hotel'">
                            <a href="#" class="text-decoration-none hover-link"
                                :class="currentCategory === 'hotel' ? 'text-primary fw-bold' : 'text-secondary'">
                                <i class="fa-solid fa-angle-right me-2 small"></i>Khách sạn, Resort
                            </a>
                        </li>
                        <li class="list-group-item bg-transparent border-0 px-0 py-2"
                            @click.prevent="currentCategory = 'food'">
                            <a href="#" class="text-decoration-none hover-link"
                                :class="currentCategory === 'food' ? 'text-primary fw-bold' : 'text-secondary'">
                                <i class="fa-solid fa-angle-right me-2 small"></i>Ẩm thực vùng miền
                            </a>
                        </li>
                        <li class="list-group-item bg-transparent border-0 px-0 py-2"
                            @click.prevent="currentCategory = 'all'">
                            <a href="#" class="text-decoration-none hover-link"
                                :class="currentCategory === 'all' ? 'text-primary fw-bold' : 'text-secondary'">
                                <i class="fa-solid fa-bars me-2 small"></i>Xem tất cả
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="mb-4">
                    <h5 class="fw-bold text-dark mb-3 border-bottom pb-2">Bài viết xem nhiều</h5>
                    
                    <div class="d-flex flex-column gap-3">
                        <div class="d-flex align-items-center gap-3 cursor-pointer sidebar-post" 
                             v-for="(post, index) in randomPosts" 
                             :key="index"
                             @click="$router.push({ name: 'PostDetail', params: { id: posts.indexOf(post) } })">
                            
                            <div class="flex-shrink-0 position-relative">
                                <img :src="post.images && post.images.length > 0 ? post.images[0] : (post.image || 'https://via.placeholder.com/150')" 
                                     class="rounded shadow-sm" 
                                     style="width: 80px; height: 80px; object-fit: cover;">
                                     
                                <span class="position-absolute top-0 start-0 bg-danger text-white text-xs fw-bold px-2 py-0 rounded-tl-3" 
                                      style="border-top-left-radius: 4px; font-size: 10px;">
                                    #{{ index + 1 }}
                                </span>
                            </div>
                            
                            <div>
                                <h6 class="fw-bold text-dark mb-1 small text-truncate-2 hover-title">
                                    {{ post.title || 'Bài viết chưa có tiêu đề' }}
                                </h6>
                                <div class="text-muted" style="font-size: 0.75rem;">
                                    <span class="me-2"><i class="fa-regular fa-eye me-1"></i> {{ Math.floor(Math.random() * 2000) + 500 }}</span>
                                    <span><i class="fa-solid fa-star text-warning"></i> 4.{{ Math.floor(Math.random() * 5) + 5 }}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div v-if="posts.length === 0" class="text-muted small fst-italic">
                            Chưa có dữ liệu bài viết nổi bật.
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div class="col-md-8 col-lg-8">
                <div class="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
                    <h2 class="fw-bold text-dark m-0">
                        <span v-if="currentCategory === 'blog'">Blog du lịch</span>
                        <span v-else-if="currentCategory === 'hotel'">Review Khách sạn</span>
                        <span v-else-if="currentCategory === 'food'">Thế giới Ẩm thực</span>
                        <span v-else>Tất cả bài viết</span>
                    </h2>

                    <div class="d-flex align-items-center gap-2">
                        <router-link v-if="isAdmin" to="/admin" class="btn btn-dark btn-sm fw-bold shadow-sm">
                            <i class="fa-solid fa-user-gear me-2"></i> Quản trị
                        </router-link>
                    </div>
                </div>

                <PostList :posts="filteredPosts" />
            </div>
        </div>
    </div>
</template>

<script>
import PostList from './PostList.vue';

export default {
    name: 'BlogPage',
    components: {
        PostList
    },
    data() {
        return {
            posts: [],
            currentUser: null,
            currentCategory: 'all',
            randomPosts: []
        }
    },
    computed: {
        isAdmin() {
            return this.currentUser && this.currentUser.role === 'admin';
        },
        filteredPosts() {
            if (this.currentCategory === 'all') {
                return this.posts;
            }
            return this.posts.filter(post => {
                const postCat = post.category || 'blog'; 
                return postCat === this.currentCategory;
            });
        }
    },
    watch: {
        // Lắng nghe URL để lọc danh mục
        '$route.query.category': {
            immediate: true,
            handler(newCategory) {
                if (newCategory) {
                    this.currentCategory = newCategory;
                } else {
                    this.currentCategory = 'all';
                }
            }
        }
    },
    mounted() {
        const STORAGE_KEY = 'dulich_data_final';
        const dataLocal = localStorage.getItem(STORAGE_KEY);
        if (dataLocal) {
            try {
                this.posts = JSON.parse(dataLocal);
                const tempPosts = [...this.posts];
                this.randomPosts = tempPosts.sort(() => 0.5 - Math.random()).slice(0, 5);
            } catch (e) {
                console.error("Lỗi dữ liệu:", e);
            }
        }
        const userStored = localStorage.getItem('currentUser');
        if (userStored) {
            this.currentUser = JSON.parse(userStored);
        }
    }
}
</script>

<style scoped>
.hover-link:hover {
    color: #d9534f !important;
    transform: translateX(5px);
    display: inline-block;
    transition: all 0.3s ease;
}

.hover-title:hover {
    color: #d9534f;
    cursor: pointer;
}

.text-xs {
    font-size: 0.75rem;
}

.cursor-pointer {
    cursor: pointer;
}

.text-truncate-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Hiệu ứng hover cho bài viết nhỏ ở sidebar */
.sidebar-post {
    padding: 5px;
    border-radius: 8px;
    transition: background-color 0.2s ease;
}
.sidebar-post:hover {
    background-color: #f8f9fa;
}
.sidebar-post:hover img {
    transform: scale(1.05);
    transition: transform 0.3s ease;
}
</style>