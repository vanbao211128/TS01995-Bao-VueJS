<template>
    <div class="container p-4">
        <h1 class="mb-4">03 - Nguyễn Văn Bảo</h1>

        <div class="card p-3 mb-4 shadow-sm">
            <h3>Nhập điểm của Văn Bảo</h3>
            <input type="number" v-model="score" class="form-control mb-2" min="0" max="10" placeholder="Nhập điểm..." />
            
            <div >
                Xếp loại: 
                <span v-if="score >= 9">Xuất sắc</span>
                <span v-else-if="score >= 8">Giỏi</span>
                <span v-else-if="score >= 6.5">Khá</span>
                <span v-else-if="score >= 5">Trung bình</span>
                <span v-else>Yếu</span>
            </div>
        </div>

        <!-- <div class="card p-3 shadow-sm border-success">
          
            
            <div class="mb-3">
                <label class="fw-bold">Số lượng:</label>
                <input type="number" v-model="soLuong" class="form-control">
                <small v-if="soLuong >= 10">
                    <i>Bạn được giảm giá 10% vì mua trên 10 sản phẩm!</i> 
                </small>
            </div>

            <div class="mb-3">
                <label class="fw-bold">Đơn giá:</label>
                <input type="number" v-model="donGia" class="form-control">
            </div>

            <div>
                <h4>Tổng thành tiền:</h4>
                
                    {{ tongThanhTien.toLocaleString() }} VND
                
                <div v-if="soLuong > 10">
                    Giá gốc: {{ (soLuong * donGia).toLocaleString() }} VND
                </div>
            </div>
        </div> -->
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const score = ref(0);
// const soLuong = ref(1);
// const donGia = ref(0);


// const tongThanhTien = computed(() => {
//     let tong = soLuong.value * donGia.value;
    
   
//     if (soLuong.value > 10) {
//         tong = tong * 0.9;
//     }
    
//     return tong;
// });
</script>

<style scoped>

</style>