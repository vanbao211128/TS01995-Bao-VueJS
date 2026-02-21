<template>
  <div class="border p-4 rounded shadow-sm bg-white h-100">
    <form @submit.prevent="xuLyDangKy">
      <h3 class="text-center text-primary mb-4">Đăng ký thông tin</h3>

      <div class="mb-3 text-start">
        <label class="form-label fw-bold">Họ và tên</label>
        <input type="text" class="form-control" v-model="username" placeholder="Nhập họ và tên">
      </div>

      <div class="mb-3 text-start">
        <label class="form-label fw-bold">Email</label>
        <input type="email" class="form-control" v-model="email" placeholder="Nhập Email">
      </div>

      <div class="mb-3 text-start">
        <label class="form-label fw-bold">Địa chỉ</label>
        <input type="text" class="form-control" v-model="address" placeholder="Nhập địa chỉ">
      </div>

      <div class="mb-3 text-start">
        <label class="form-label fw-bold">Số điện thoại</label>
        <input type="tel" class="form-control" v-model="phone" placeholder="Nhập số điện thoại">
      </div>

      <div class="mb-3 text-start">
        <label class="form-label fw-bold">Mật khẩu</label>
        <input type="password" class="form-control" v-model="password" placeholder="Nhập mật khẩu">
      </div>

      <div class="mb-3 text-start">
        <label class="form-label fw-bold">Xác nhận mật khẩu</label>
        <input type="password" class="form-control" v-model="confirmPassword" placeholder="Xác nhận lại mật khẩu">
      </div>



      <div class="mb-3 text-start">
        <label class="form-label d-block fw-bold">Giới tính</label>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="gioitinh" id="nam" value="Nam" v-model="gender">
          <label class="form-check-label" for="nam">Nam</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="gioitinh" id="nu" value="Nữ" v-model="gender">
          <label class="form-check-label" for="nu">Nữ</label>
        </div>
      </div>



      <div class="mb-3 form-check text-start">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="agree">
        <label class="form-check-label" for="exampleCheck1">Tôi đồng ý với điều khoản</label>
      </div>

      <button type="submit" class="btn btn-primary w-100">Đăng ký ngay</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'Register', 
  data() {
    return {
      username: '',
      email: '',
      address: '',
      phone: '',
      password: '',
      confirmPassword: '',
      role: 'user',
      gender: 'Nam',

      agree: false
    }
  },
  methods: {
    xuLyDangKy() {
 
      if (!this.username || !this.password || !this.confirmPassword) {
        alert('Vui lòng nhập đầy đủ thông tin!');
        return;
      }


      if (this.password !== this.confirmPassword) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
      }

 
      const users = JSON.parse(localStorage.getItem('users') || '[]');

  
      const existingUser = users.find(u => u.username === this.username);
      if (existingUser) {
        alert('Tên đăng nhập này đã có người dùng!');
        return;
      }


      const newUser = {
        id: Date.now(),
        username: this.username,
        password: this.password,
        email: this.email,
        address: this.address,
        phone: this.phone,
        gender: this.gender,
        role: this.role,
        avatar: ''
      };

      users.push(newUser);


      localStorage.setItem('users', JSON.stringify(users));

      alert('Đăng ký thành công! Hãy đăng nhập.');

      this.$router.push('/login');
    }
  }
}
</script>