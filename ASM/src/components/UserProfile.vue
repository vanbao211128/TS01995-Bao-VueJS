<template>
  <div class="container py-5">
    <div class="row" v-if="user">
      <div class="col-lg-4">
        <div class="card mb-4 shadow-sm border-0">
          <div class="card-body text-center">
            <img :src="user.avatar || 'https://via.placeholder.com/150'" 
                 alt="avatar" 
                 class="rounded-circle img-fluid border border-2 border-primary p-1"
                 style="width: 150px; height: 150px; object-fit: cover;">
            
            <h5 class="my-3 fw-bold">{{ user.username }}</h5> <p class="text-muted mb-1">
                <span v-if="user.role === 'admin'" class="badge bg-danger">Admin</span>
                <span v-else class="badge bg-secondary">Thành viên</span>
            </p>
            <p class="text-muted mb-4">{{ user.address || 'Chưa cập nhật địa chỉ' }}</p>
            
            <div class="d-flex justify-content-center mb-2">
              <button @click="changeAvatar" type="button" class="btn btn-primary me-2">Đổi ảnh</button>
              <button @click="logout" type="button" class="btn btn-outline-danger">Đăng xuất</button>
            </div>
          </div>
        </div>

        <div class="card mb-4 mb-lg-0 border-0 shadow-sm">
          <div class="card-body p-0">
            <ul class="list-group list-group-flush rounded-3">
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fas fa-user text-primary"></i>
                <span class="mb-0 fw-bold">Hồ sơ của tôi</span>
              </li>
              <!-- <li class="list-group-item d-flex justify-content-between align-items-center p-3 text-muted">
                <i class="fas fa-lock text-warning"></i>
                <span class="mb-0">Đổi mật khẩu (Đang phát triển)</span>
              </li> -->
              
            </ul>
          </div>
        </div>
      </div>

      <div class="col-lg-8">
        <div class="card mb-4 border-0 shadow-sm">
          <div class="card-body">
            <h4 class="text-primary mb-4">Chỉnh sửa thông tin</h4>

            <form @submit.prevent="capNhatThongTin">
              <div class="row mb-3">
                <div class="col-sm-3">
                  <p class="mb-0 fw-bold">Tên đăng nhập</p>
                </div>
                <div class="col-sm-9">
                  <input type="text" class="form-control bg-light" :value="user.username" disabled readonly>
                </div>
              </div>
              <hr>

              <div class="row mb-3">
                <div class="col-sm-3">
                  <p class="mb-0 fw-bold">Email</p>
                </div>
                <div class="col-sm-9">
                  <input type="email" class="form-control" v-model="user.email">
                </div>
              </div>
              <hr>

              <div class="row mb-3">
                <div class="col-sm-3">
                  <p class="mb-0 fw-bold">Số điện thoại</p>
                </div>
                <div class="col-sm-9">
                  <input type="tel" class="form-control" v-model="user.phone" placeholder="Nhập số điện thoại...">
                </div>
              </div>
              <hr>

              <div class="row mb-3">
                <div class="col-sm-3">
                  <p class="mb-0 fw-bold">Địa chỉ</p>
                </div>
                <div class="col-sm-9">
                  <input type="text" class="form-control" v-model="user.address" placeholder="Nhập địa chỉ...">
                </div>
              </div>
              <hr>

              <div class="row mb-3">
                <div class="col-sm-3">
                  <p class="mb-0 fw-bold">Ngày sinh</p>
                </div>
                <div class="col-sm-9">
                  <input type="date" class="form-control" v-model="user.dob">
                </div>
              </div>

              <div class="mt-4 text-end">
                <button type="submit" class="btn btn-success px-4 fw-bold shadow-sm">
                    <i class="fa-solid fa-save me-1"></i> Lưu thay đổi
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-5">
        <h3>Bạn chưa đăng nhập!</h3>
        <router-link to="/login" class="btn btn-primary mt-3">Đăng nhập ngay</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      user: null 
    }
  },
  mounted() {
    
    const currentUserData = localStorage.getItem('currentUser');
    
    if (currentUserData) {
        this.user = JSON.parse(currentUserData);
    } else {
        
        this.$router.push('/login');
    }
  },
  methods: {
    
    changeAvatar() {
        const link = prompt("Vui lòng dán đường dẫn (Link) ảnh Avatar của bạn vào đây:");
        if (link) {
            this.user.avatar = link;
        }
    },

    
    capNhatThongTin() {
        if (!this.user) return;
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
        const index = allUsers.findIndex(u => u.username === this.user.username);
        
        if (index !== -1) {
            
            allUsers[index] = { ...this.user }; 
            localStorage.setItem('users', JSON.stringify(allUsers));
            
            alert('Cập nhật hồ sơ thành công!');
           
            window.location.reload(); 
        } else {
            alert('Lỗi: Không tìm thấy tài khoản trong hệ thống!');
        }
    },

   
    logout() {
        if(confirm('Bạn có chắc muốn đăng xuất?')) {
            localStorage.removeItem('currentUser');
            this.user = null;
            // window.location.href = '/login';
            this.$router.push('/login');
        }
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 15px;
}
</style>