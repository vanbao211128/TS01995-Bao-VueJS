<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card shadow">
                    <div class="card-header text-info text-center">
                        <h4 text-center>Đăng nhập</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="xuLyDangNhap">
                            <div class="mb-3 text-start">
                                <label class="form-label">Tên đăng nhập</label>
                                <input type="text" class="form-control" v-model="username" placeholder="Nhập tài khoản...">
                            </div>
                            <div class="mb-3 text-start">
                                <label class="form-label">Mật khẩu</label>
                                <input type="password" class="form-control" v-model="password"
                                    placeholder="Nhập mật khẩu...">
                            </div>
                            <button type="submit" class="btn btn-primary w-100">Đăng nhập</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        xuLyDangNhap() {
            if (this.username && this.password) {
                
                
                const users = JSON.parse(localStorage.getItem('users') || '[]');

               
                const user = users.find(u => u.username === this.username && u.password === this.password);

                if (user) {
                    
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    alert('Đăng nhập thành công! Vai trò: ' + user.role);
                    if (user.role === 'admin') {
                        
                        window.location.href = '/admin'; 
                    } else {
                       
                        window.location.href = '/'; 
                    }

                 
                } else {
                    alert('Sai tên đăng nhập hoặc mật khẩu!');
                }

            } else {
                alert('Vui lòng nhập đầy đủ thông tin!');
            }
        }
    }
}
</script>