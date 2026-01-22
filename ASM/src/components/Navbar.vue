<template>
    <nav class="navbar navbar-expand-sm navbar-light">
        <div class="container-fluid">
           <router-link to="/">
        <img src="/images/logo-energy-pilates.png" alt="" style="width: 150px;">
    </router-link>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">
            <i class="fa-solid fa-list"></i> Bài viết
        </router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link "><i class="fa-solid fa-film"></i> Video</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><i class="fa-solid fa-info"></i> Giới thiệu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><i class="fa-regular fa-calendar"></i> Sự kiện</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">Tài khoản
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" to="/register">Đăng ký</router-link></li>
                            <li><router-link class="dropdown-item" to="/login">Đăng nhập</router-link></li>
                            <li><router-link class="dropdown-item" to="/user">Thông tin cá nhân</router-link></li>
                            <li><a class="dropdown-item">Quên mật khẩu</a></li>
                        </ul>
                    </li>

                </ul>
                <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                            <i class="fa-solid fa-language"></i> Ngôn ngữ
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" to="/register">Tiếng Việt</router-link></li>
                            <li><router-link class="dropdown-item" to="/login">Tiếng Anh</router-link></li>
                            
                        </ul>
                    </li>
            </div>
        </div>
    </nav>
</template>
<script>
    export default {
        name: 'Navbar'
    }
</script>