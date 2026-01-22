<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-4">
        <div class="card mb-4 shadow-sm border-0">
          <div class="card-body text-center">
            <img :src="user.avatar" alt="avatar"
              class="rounded-circle img-fluid border border-2 border-primary p-1" style="width: 150px; height: 150px; object-fit: cover;">
            <h5 class="my-3 fw-bold">{{ user.name }}</h5>
            <p class="text-muted mb-1">Thành viên Hạng Bạc</p>
            <p class="text-muted mb-4">{{ user.address }}</p>
            <div class="d-flex justify-content-center mb-2">
              <button type="button" class="btn btn-primary me-2">Đổi ảnh</button>
              <button type="button" class="btn btn-outline-danger">Đăng xuất</button>
            </div>
          </div>
        </div>

        <div class="card mb-4 mb-lg-0 border-0 shadow-sm">
          <div class="card-body p-0">
            <ul class="list-group list-group-flush rounded-3">
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fas fa-user text-primary"></i>
                <span class="mb-0">Hồ sơ của tôi</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fas fa-lock text-warning"></i>
                <span class="mb-0">Đổi mật khẩu</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                <i class="fas fa-history text-info"></i>
                <span class="mb-0">Lịch sử tập luyện</span>
              </li>
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
                  <p class="mb-0 fw-bold">Họ và tên</p>
                </div>
                <div class="col-sm-9">
                  <input type="text" class="form-control" v-model="user.name">
                </div>
              </div>
              <hr>

              <div class="row mb-3">
                <div class="col-sm-3">
                  <p class="mb-0 fw-bold">Email</p>
                </div>
                <div class="col-sm-9">
                  <input type="email" class="form-control" v-model="user.email" disabled>
                  <small class="text-muted fst-italic">*Email không thể thay đổi</small>
                </div>
              </div>
              <hr>

              <div class="row mb-3">
                <div class="col-sm-3">
                  <p class="mb-0 fw-bold">Số điện thoại</p>
                </div>
                <div class="col-sm-9">
                  <input type="tel" class="form-control" v-model="user.phone">
                </div>
              </div>
              <hr>

              <div class="row mb-3">
                <div class="col-sm-3">
                  <p class="mb-0 fw-bold">Địa chỉ</p>
                </div>
                <div class="col-sm-9">
                  <input type="text" class="form-control" v-model="user.address">
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
                <button type="submit" class="btn btn-success px-4">Lưu thay đổi</button>
              </div>
            </form>

          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="card mb-4 mb-md-0 border-0 shadow-sm bg-primary text-white">
              <div class="card-body">
                <p class="mb-4"><span class="text-white font-italic me-1">Khóa học</span> Pilates cơ bản</p>
                <p class="mb-1" style="font-size: .77rem;">Tiến độ</p>
                <div class="progress rounded" style="height: 5px;">
                  <div class="progress-bar bg-light" role="progressbar" style="width: 80%" aria-valuenow="80"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-md-6">
            <div class="card mb-4 mb-md-0 border-0 shadow-sm bg-info text-white">
              <div class="card-body">
                <p class="mb-4"><span class="text-white font-italic me-1">Thẻ thành viên</span> Còn hạn 30 ngày</p>
                <p class="mb-1" style="font-size: .77rem;">Trạng thái</p>
                <div class="progress rounded" style="height: 5px;">
                  <div class="progress-bar bg-warning" role="progressbar" style="width: 100%" aria-valuenow="100"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      // Dữ liệu giả lập người dùng
      user: {
        name: 'Nguyễn Văn Bảo',
        email: 'baonv@example.com',
        phone: '0987 654 321',
        address: 'Quận 12, TP. Hồ Chí Minh',
        dob: '2000-01-01',
        avatar: '/images/health1.jpg' // Bạn có thể thay bằng ảnh avatar mặc định khác
      }
    }
  },
  methods: {
    capNhatThongTin() {
      // Sau này sẽ gọi API để lưu vào database
      alert('Đã cập nhật thông tin thành công cho: ' + this.user.name);
    }
  }
}
</script>

<style scoped>
/* Thêm một chút CSS để card đẹp hơn */
.card {
  border-radius: 15px;
}
</style>