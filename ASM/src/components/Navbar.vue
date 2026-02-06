<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
        <div class="container">
            <router-link to="/" class="navbar-brand">
                <img src="/images/download.png" alt="Logo" style="height: 100px;">
            </router-link>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                    <li class="nav-item">
                        <router-link class="nav-link custom-link" :class="{ active: $route.query.category === 'blog' }"
                            :to="{ path: '/', query: { category: 'blog' } }">
                            <i class="fa-solid fa-list me-1"></i> Bài viết
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link custom-link" :class="{ active: $route.query.category === 'blog' }"
                            :to="{ path: '/', query: { category: 'blog' } }">
                            <i class="fa-solid fa-utensils me-1"></i> Du lịch
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link custom-link" :class="{ active: $route.query.category === 'food' }"
                            :to="{ path: '/', query: { category: 'food' } }">
                            <i class="fa-solid fa-utensils me-1"></i> Ẩm thực vùng miền
                        </router-link>
                    </li>

                    <li class="nav-item">
                        <router-link class="nav-link custom-link" :class="{ active: $route.query.category === 'hotel' }"
                            :to="{ path: '/', query: { category: 'hotel' } }">
                            <i class="fa-solid fa-hotel me-1"></i> Khách sạn
                        </router-link>
                    </li>

                    <li class="nav-item" v-if="currentUser && currentUser.role === 'admin'">
                        <router-link class="nav-link btn btn-dark text-white px-3 fw-bold ms-2" to="/admin">
                            <i class="fa-solid fa-user-shield"></i> Trang Admin
                        </router-link>
                    </li>
                </ul>

                <ul class="navbar-nav align-items-center">
                    <li class="nav-item dropdown" v-if="!currentUser">
                        <a class="nav-link dropdown-toggle custom-link fw-bold" href="#" role="button"
                            data-bs-toggle="dropdown">
                            <i class="fa-regular fa-user"></i> Tài khoản
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><router-link class="dropdown-item" to="/login">Đăng nhập</router-link></li>
                            <li><router-link class="dropdown-item" to="/register">Đăng ký</router-link></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown" v-else>
                        <a class="nav-link dropdown-toggle custom-link fw-bold text-primary" href="#" role="button"
                            data-bs-toggle="dropdown">
                            Xin chào, {{ currentUser.username }}
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><router-link class="dropdown-item" to="/user">Thông tin cá nhân</router-link></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item text-danger" href="#" @click.prevent="logout">Đăng xuất</a></li>
                        </ul>
                    </li>


                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            currentUser: null
        }
    },
    mounted() {
        // Khi Navbar hiện lên, kiểm tra xem có ai đang đăng nhập không
        this.checkLoginStatus();
    },
    methods: {
        checkLoginStatus() {
            const userStored = localStorage.getItem('currentUser');
            if (userStored) {
                this.currentUser = JSON.parse(userStored);
            }
        },
        logout() {
            // Xóa thông tin đăng nhập
            localStorage.removeItem('currentUser');
            this.currentUser = null;
            // Chuyển về trang đăng nhập
            // window.location.href = '/login';
            this.$router.push('/login');
        }
    }
}
</script>

<style scoped>
/* Tăng cỡ chữ và làm đậm để dễ nhìn */
.custom-link {
    font-size: 1.05rem;
    font-weight: 600;
    color: #444;
    transition: color 0.2s;
}

.custom-link:hover {
    color: #0d6efd;
    /* Màu xanh khi di chuột */
}

/* Khoảng cách giữa các mục menu */
.gap-3 {
    gap: 1rem !important;
}
</style>