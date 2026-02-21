<template>
  <div class="container py-5">
    <router-link to="/" class="btn btn-outline-secondary mb-4">
      <i class="fas fa-arrow-left"></i> Quay lại trang chủ
    </router-link>

    <div class="row" v-if="post">
      <div class="col-md-8 mx-auto">
        <h1 class="fw-bold text-info mb-3">{{ post.title }}</h1>
        <p class="text-muted small">
          <i class="fa-solid fa-user me-1"></i> {{ post.author || 'Admin' }}
          -
          <i class="fa-regular fa-clock me-1"></i> {{ post.date }}
        </p>

        <div v-if="post.images && post.images.length > 0">
          <div v-for="(img, index) in post.images" :key="index" class="mb-4 position-relative">
            <img :src="img" class="img-fluid rounded w-100 shadow-sm" style="max-height: 500px; object-fit: cover;">

            <span class="position-absolute top-0 end-0 bg-dark text-white px-2 py-1 m-2 rounded small opacity-75">
              {{ index + 1 }} / {{ post.images.length }}
            </span>
          </div>
        </div>

        <div v-else-if="post.image">
          <img :src="post.image" class="img-fluid rounded w-100 mb-4 shadow-sm"
            style="max-height: 400px; object-fit: cover;">
        </div>
        <div class="content fs-5 text-justify lh-lg">
          <p class="fw-bold">{{ post.content }}</p>
          <p class="text-muted fst-italic mt-4 border-top pt-3">
            (Bài viết thuộc khu vực: <strong>{{ post.location || 'Chưa cập nhật' }}</strong>)
          </p>
        </div>
      </div>

      <div class="col-md-4 mt-5 pt-4">
        <div class="sticky-top" style="top: 20px; z-index: 1;">
          <h5 class="fw-bold mt-2">Bình luận bài viết</h5>

          <form @submit.prevent="guiBinhLuan" class="mt-3 bg-light p-3 rounded shadow-sm">
            <div class="mb-2">
              <input v-model="tenNguoiDung" type="text" class="form-control" placeholder="Tên của bạn..." required>
            </div>
            <div class="mb-2">
              <textarea v-model="noiDungBinhLuan" class="form-control" rows="3" placeholder="Viết bình luận..."
                required></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-100 fw-bold">Gửi bình luận</button>
          </form>

          <h5 class="fw-bold mt-4">Các bình luận ({{ listBinhLuan.length }}):</h5>
          <div class="comment-list mt-2" style="max-height: 400px; overflow-y: auto;">
            <div v-if="listBinhLuan.length === 0" class="text-muted text-center py-3">
              Chưa có bình luận nào.
            </div>

            <div v-for="(bl, index) in listBinhLuan" :key="index"
              class="mb-2 border-bottom pb-2 bg-white p-2 rounded shadow-sm">
              <div class="d-flex align-items-center mb-1">
                <strong class="text-primary me-2">{{ bl.name }}</strong>
                <small class="text-muted" style="font-size: 0.8rem;">{{ bl.date }}</small>
              </div>
              <span class="text-dark">{{ bl.text }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-5">
      <h3 class="text-danger">Không tìm thấy bài viết!</h3>
      <p>Có thể bài viết đã bị xóa hoặc đường dẫn không tồn tại.</p>
      <router-link to="/" class="btn btn-primary mt-3">Về trang chủ</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostDetail',
  data() {
    return {
      post: null,
      postId: null,
      noiDungBinhLuan: '',
      tenNguoiDung: '',
      listBinhLuan: []
    }
  },
  created() {
   
    this.postId = parseInt(this.$route.params.id);

    const storageData = localStorage.getItem('dulich_data_final');

    if (storageData) {
      const allPosts = JSON.parse(storageData);


      if (allPosts[this.postId]) {
        this.post = allPosts[this.postId];
        this.listBinhLuan = this.post.comments || [];
      }
    }
  },
  methods: {
    guiBinhLuan() {
      if (this.tenNguoiDung.trim() !== '' && this.noiDungBinhLuan.trim() !== '') {
        const newComment = {
          name: this.tenNguoiDung,
          text: this.noiDungBinhLuan,
          date: new Date().toLocaleString()
        };

        this.listBinhLuan.unshift(newComment);


        const allPosts = JSON.parse(localStorage.getItem('dulich_data_final') || '[]');
        if (allPosts[this.postId]) {
          allPosts[this.postId].comments = this.listBinhLuan;
          localStorage.setItem('dulich_data_final', JSON.stringify(allPosts));
        }

        this.noiDungBinhLuan = '';
      } else {
        alert('Vui lòng nhập đầy đủ thông tin!');
      }
    }
  }
}
</script>
