<template>
    <div class="container">
        <div class="row">

            <form @submit.prevent="submitForm" class="col-5">
                <h3>Form Đăng Ký</h3>
                <div class="mb-3 mt-3">
                    <label for="name">Họ tên: </label>
                    <input type="text" class="form-control" v-model="student.name" id="name" required />
                </div>

                <div class="mb-3">
                    <label for="email">Email: </label>
                    <input type="text" class="form-control" v-model="student.email" id="email" required />

                </div>

                <div class="mb-3">
                    <label for="password">Mật khẩu: </label>
                    <input type="password" class="form-control" v-model="student.password" id="password" required />

                </div>

                <div class="mb-3">
                    <label for="dob">Ngày sinh : </label>
                    <input type="date" class="form-control" v-model="student.dob" id="dob" required />
                </div>

                <div class="mb-3">
                    <label for="gender">Giới tính : </label>

                    <div class="form-check form-check-inline">
                        <input v-model="student.gender" class="form-check-input" type="radio" name="sex" id="nam"
                            value="Nam">
                        <label class="form-check-label" for="nam">Nam</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input v-model="student.gender" class="form-check-input" type="radio" name="sex" id="nu"
                            value="Nữ">
                        <label class="form-check-label" for="nu">Nữ</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input v-model="student.gender" class="form-check-input" type="radio" name="sex" id="khac"
                            value="Khác">
                        <label class="form-check-label" for="khac">Khac</label>
                    </div>
                </div>

                <div class="mb-3">
                    <label for="ngonNgu">Ngôn ngữ : </label>
                    
                    <div class="form-check form-check-inline">
                        <input v-model="student.ngonNgu" class="form-check-input" type="checkbox" id="vi" value="Tiếng Việt">
                        <label class="form-check-label" for="vi">Tiếng Việt</label>
                    </div>

                     <div class="form-check form-check-inline">
                        <input v-model="student.ngonNgu" class="form-check-input" type="checkbox" id="eng" value="Tiếng Anh">
                        <label class="form-check-label" for="eng">Tiếng Anh</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input v-model="student.ngonNgu" class="form-check-input" type="checkbox" id="jp" value="Tiếng Nhật">
                        <label class="form-check-label" for="jp">Tiếng Nhật</label>
                    </div>
                </div>

                <button type="submit" class="btn btn-success">Đăng Ký</button>
            </form>

            <div class="col-7">
                <h3>Thông tin đã đăng ký</h3>
                <table class="table table-hover">
                    <thead>
                        <tr>

                            <th>Họ và tên</th>
                            <th>Điểm</th>
                            <th>Ngày sinh</th>
                            <th>Giới tính</th>
                            <th>Ngôn ngữ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(stu, index) in students" :key="index">
                            <td>{{ stu.name }}</td>
                            <td>{{ stu.email }}</td>
                            <td>{{ stu.dob }}</td>
                            <td>{{ stu.gender }}</td>
                            <td>{{ stu.ngonNgu }}</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const students = ref([])
// Biến quản lý trạng thái form
const student = ref({
    name: '',
    email: '',
    dob: '',
    gender: 'nam',
    ngonNgu: []


});

let isEditing = ref(false)
let editingIndex = ref(null)


function submitForm() {
    if (isEditing.value) {

        students.value[editingIndex.value] = { ...student.value }
        isEditing.value = false
        editingIndex.value = null
    } else {

        students.value.push({ ...student.value })
    }
    resetForm()
}

function resetForm(){
    student.value =  {name: '',
    email: '',
    dob: '',
    gender: 'nam',
    ngonNgu: []}

}
</script>

<style lang="scss" scoped></style>