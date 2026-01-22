<template>



    <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="/images/health.jpg" class="d-block w-100" alt="" style="height: 500px; object-fit: cover;">
            </div>

            <div class="carousel-item">
                <img src="/images/health1.jpg" class="d-block w-100" alt="..."
                    style="height: 500px; object-fit: cover;">
            </div>

            <div class="carousel-item">
                <img src="/images/health2.jpg" class="d-block w-100" alt="..."
                    style="height: 500px; object-fit: cover;">
            </div>
        </div>


        <div class="container mt-3">
            <div class="row">
                <div class="col-md-4">



                    <div class="card mt-4 border-1">
                        <div class="card-header bg-light border-0 ps-0">
                            <h3 class="text-info text-center">Bài viết nổi bật</h3>
                        </div>

                    </div>
                    <ul class="list-group">
                        <li class="list-group-item border-0 border-bottom py-3" v-for="item in baiVietNoiBat"
                            :key="item.id">

                            <router-link :to="'/blog/' + item.id"
                                class="d-flex align-items-center text-decoration-none">

                                <img :src="item.image" class="rounded-circle me-3" width="80" height="80"
                                    style="object-fit: cover;">

                                <div>
                                    <h6 class="mb-1 text-dark fw-bold hover-title">{{ item.title }}</h6>
                                    <p class="mb-0 text-muted small text-justify">
                                        {{ item.desc.substring(0, 50) }}... </p>
                                </div>

                            </router-link>
                        </li>
                    </ul>
                </div>


                <div class="col-md-8">
                    <div class="border p-3 bg-light rounded">
                        <h2 class="text-info mb-4 border-bottom pb-2">Tất cả bài viết</h2>

                        <div class="row row-cols-1 row-cols-md-2 g-4">
                            <div class="col" v-for="baiViet in listBaiViet" :key="baiViet.id">
                                <div class="card h-100 shadow-sm border-0 post-card">
                                    <router-link :to="'/blog/' + baiViet.id">
                                        <img :src="baiViet.image" class="card-img-top" alt="..."
                                            style="height: 200px; object-fit: cover;">
                                    </router-link>

                                    <div class="card-body d-flex flex-column">
                                        <router-link :to="'/blog/' + baiViet.id" class="text-decoration-none">
                                            <h5 class="card-title fw-bold text-dark hover-title">{{ baiViet.title }}
                                            </h5>
                                        </router-link>

                                        <p class="card-text text-secondary flex-grow-1">
                                            {{ baiViet.content }}
                                        </p>

                                        <router-link :to="'/blog/' + baiViet.id"
                                            class="btn btn-outline-info w-100 mt-2">
                                            Xem chi tiết
                                        </router-link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>







        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        <ul class="pagination justify-content-center">
            <li class="page-item"><a class="page-link" href="#" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="0"><i class="fas fa-arrow-left"></i></a></li>
            <li class="page-item"><a class="page-link" href="#" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="0">1</a></li>
            <li class="page-item"><a class="page-link" href="#" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="0">2</a></li>
            <li class="page-item"><a class="page-link" href="#" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="0">3</a></li>
            <li class="page-item"><a class="page-link" href="#" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="0">4</a></li>
            <li class="page-item"><a class="page-link" href="#" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="0"><i class="fas fa-arrow-right"></i></a></li>
        </ul>


    </div>

</template>
<script>
export default {
    name: 'Blog',

    data() {
        return {
            listBaiViet: [
                {
                    id: 1,
                    title: 'Phương pháp Pilates',
                    image: '/images/tap-piltes.jpg',
                    content: 'Tập luyện Pilates giúp cải thiện sự dẻo dai và vóc dáng cân đối mỗi ngày.'
                },
                {
                    id: 2,
                    title: 'Lợi ích tim mạch',
                    image: '/images/tim-mach.jpg',
                    content: 'Tim mạch khỏe mạnh là chìa khóa cho một cuộc sống dài lâu và hạnh phúc.'
                },
                {
                    id: 3,
                    title: 'Pilates nâng cao',
                    image: '/images/tap-pilates2.jpg',
                    content: 'Các bài tập nâng cao giúp đốt cháy mỡ thừa hiệu quả hơn gấp đôi.'
                },
                {
                    id: 4,
                    title: 'Dinh dưỡng luyện tập',
                    image: '/images/tap-pilates1.jpg',
                    content: 'Chế độ ăn uống hợp lý kết hợp với luyện tập đều đặn sẽ mang lại hiệu quả cao.'
                }

            ],
            baiVietNoiBat: [
                {
                    id: 5,
                    title: '9 tác dụng tuyệt vời của quả cam',
                    image: '/images/orange_300x300.jpg',
                    desc: 'Cam tự hào về khả năng chống lão hóa mạnh mẽ nhờ hàm lượng chất chống oxy hóa cao...'
                },
                {
                    id: 6,
                    title: '10 công dụng bất ngờ từ dầu dừa',
                    image: '/images/sesameoil_300x300.jpg',
                    desc: 'Dầu dừa như một loại kem dưỡng ẩm tự nhiên cho cơ thể, giúp việc sản xuất collagen...'
                },
                {
                    id: 7,
                    title: 'Lợi ích khi ăn rau mỗi ngày',
                    image: '/images/spinach_300x300.jpg',
                    desc: 'Tiêu thụ rau xanh hàng ngày sẽ giúp tăng cường thị lực, kiểm soát cân nặng...'
                },
                {
                    id: 8,
                    title: 'Chạy bộ đúng cách cho người mới',
                    image: '/images/health.jpg',  // Dùng lại ảnh health
                    desc: 'Hướng dẫn kỹ thuật chạy bộ để tránh chấn thương và đạt hiệu quả giảm cân tốt nhất.'
                },
                {
                    id: 9,
                    title: 'Thực đơn Eat Clean 7 ngày',
                    image: '/images/health1.jpg', // Dùng lại ảnh health1
                    desc: 'Gợi ý thực đơn ăn uống lành mạnh, giúp thanh lọc cơ thể và giữ dáng thon gọn.'
                },
                {
                    id: 10,
                    title: 'Yoga thư giãn trước khi ngủ',
                    image: '/images/health2.jpg', // Dùng lại ảnh health2
                    desc: '5 động tác Yoga nhẹ nhàng giúp bạn ngủ ngon hơn và giảm căng thẳng sau ngày dài.'
                },
                {
                    id: 11,
                    title: 'Uống nước bao nhiêu là đủ?',
                    image: '/images/tap-piltes.jpg', // Dùng lại ảnh khác
                    desc: 'Nước đóng vai trò quan trọng trong trao đổi chất. Hãy tìm hiểu lượng nước cần thiết cho bạn.'
                }

            ]
        }
    }
}
</script>

<style scoped>
.post-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.post-card:hover {
    transform: translateY(-5px);
    /* Nhấc thẻ lên 1 chút */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
    /* Đổ bóng đậm hơn */
}

.hover-title:hover {
    color: #0d6efd !important;
    /* Đổi màu tiêu đề khi di chuột */
}
</style>