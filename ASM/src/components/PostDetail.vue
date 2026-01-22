<template>
  <div class="container py-5">
    <router-link to="/" class="btn btn-outline-secondary mb-4">
      <i class="fas fa-arrow-left"></i> Quay lại trang chủ
    </router-link>

    <div class="row" v-if="post">
      <div class="col-md-8 mx-auto">
        <h1 class="fw-bold text-info mb-3">{{ post.title }}</h1>
        <p class="text-muted small">Đăng bởi Admin - 20/01/2026</p>

        <img :src="post.image" class="img-fluid rounded w-100 mb-4 shadow-sm"
          style="max-height: 400px; object-fit: cover;">

        <div class="content fs-5 text-justify lh-lg">
          <p class="fw-bold">{{ post.content }}</p>
          <p>
            Đây là nội dung chi tiết mô phỏng cho bài viết <strong>{{ post.title }}</strong>.
            Trong thực tế, đoạn này sẽ chứa nội dung dài, hướng dẫn chi tiết về bài tập,
            lợi ích sức khỏe và các lời khuyên chuyên gia.
          </p>

        </div>
      </div>
      <div class="col-md-4 mt-5 pt-4">
        <div class="sticky-top" style="top: 20px; z-index: 1;">
          <h5 class="fw-bold mt-2">Bình luận bài viết tại đây</h5>
          <form @submit.prevent="guiBinhLuan" class="mt-3">
                  
                  <div class="mb-2">
                    <input v-model="tenNguoiDung" type="text" class="form-control" placeholder="Nhập tên của bạn (Bắt buộc)">
                  </div>

                  <div class="mb-2">
                    <textarea v-model="noiDungBinhLuan" class="form-control" rows="3" placeholder="Nhập bình luận..."></textarea>
                  </div>

                  <button type="submit" class="btn btn-success w-100">Gửi bình luận</button>
                </form>

          <h5 class="fw-bold mt-4">Danh sách các bình luận ({{ listBinhLuan.length }}):</h5>
          <div class="comment-list" style="max-height: 300px; overflow-y: auto;">
                    <div v-for="(bl, index) in listBinhLuan" :key="index" class="mb-2 border-bottom pb-1 bg-white p-2 rounded">
                        <strong class="text-primary">{{ bl.name }}:</strong> 
                        <span class="text-dark">{{ bl.text }}</span>
                    </div>
                </div>
          
        </div>
      </div>
    </div>

    <div v-else class="text-center py-5">
      <h3>Đang tải bài viết...</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostDetail',
  data() {
    return {
      post: null,
      noiDungBinhluan:  '',
      tenNguoiDung: '',
      listBinhLuan: [
        
      ],
      // Dữ liệu này phải giống hệt bên Blog.vue để tìm kiếm
      allPosts: [
        { id: 1, title: 'Phương pháp Pilates', image: '/images/tap-piltes.jpg', content: 'Tập luyện Pilates giúp cải thiện sự dẻo dai và vóc dáng cân đối mỗi ngày.' },
        { id: 2, title: 'Lợi ích tim mạch', image: '/images/tim-mach.jpg', content: 'Tim mạch khỏe mạnh là chìa khóa cho một cuộc sống dài lâu và hạnh phúc.' },
        { id: 3, title: 'Pilates nâng cao', image: '/images/tap-pilates2.jpg', content: 'Các bài tập nâng cao giúp đốt cháy mỡ thừa hiệu quả hơn gấp đôi.' },
        { id: 4, title: 'Dinh dưỡng luyện tập', image: '/images/tap-pilates1.jpg', content: 'Chế độ ăn uống hợp lý kết hợp với luyện tập đều đặn sẽ mang lại hiệu quả cao.' }
        , { id: 5, title: '9 tác dụng tuyệt vời của quả cam', image: '/images/orange_300x300.jpg', content: 'Nội dung chi tiết về quả cam...' },
        { id: 6, title: '10 công dụng bất ngờ từ dầu dừa', image: '/images/sesameoil_300x300.jpg', content: 'Nội dung chi tiết về dầu dừa...' },
        { id: 7, title: 'Lợi ích khi ăn rau mỗi ngày', image: '/images/spinach_300x300.jpg', content: 'Nội dung chi tiết về rau xanh...' }
      ,{ id: 8, title: 'Chạy bộ đúng cách cho người mới', image: '/images/health.jpg', desc: 'Hướng dẫn kỹ thuật chạy bộ để tránh chấn thương và đạt hiệu quả giảm cân tốt nhất.' },
    { id: 9, title: 'Thực đơn Eat Clean 7 ngày', image: '/images/health1.jpg', desc: 'Gợi ý thực đơn ăn uống lành mạnh, giúp thanh lọc cơ thể và giữ dáng thon gọn.' },
    { id: 10, title: 'Yoga thư giãn trước khi ngủ', image: '/images/health2.jpg', desc: '5 động tác Yoga nhẹ nhàng giúp bạn ngủ ngon hơn và giảm căng thẳng sau ngày dài.' },
    { id: 11, title: 'Uống nước bao nhiêu là đủ?', image: '/images/tap-piltes.jpg', desc: 'Nước đóng vai trò quan trọng trong trao đổi chất. Hãy tìm hiểu lượng nước cần thiết cho bạn.' }
      
      ]
    }
  },
  created() {
    // Lấy ID từ đường dẫn
    const id = parseInt(this.$route.params.id);
    // Tìm bài viết tương ứng
    this.post = this.allPosts.find(p => p.id === id);
  },
  methods: {
    guiBinhLuan() {
      if (this.tenNguoiDung.trim() !== '' && this.noiDungBinhLuan.trim() !== '') {
        
        this.listBinhLuan.unshift({
          name: this.tenNguoiDung,
          text: this.noiDungBinhLuan
        });
        this.noiDungBinhLuan = '';


      } else {
        alert('Vui lòng nhập đầy đủ thông tin!');

      }
    }
  }
}
</script>