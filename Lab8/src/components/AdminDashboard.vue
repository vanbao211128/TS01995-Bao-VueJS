<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2 bg-dark min-vh-100 p-3">
                <h4 class="text-white fw-bold mb-4">ADMIN DASHBOARD</h4>
                <ul class="nav flex-column gap-2">
                    <li class="nav-item">
                        <button class="nav-link w-100 text-start"
                            :class="currentTab !== 'users' ? 'bg-primary text-white' : 'text-secondary'"
                            @click="currentTab = 'list'">
                            <i class="fa-solid fa-newspaper me-2"></i> Quản lý bài viết
                        </button>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link w-100 text-start"
                            :class="currentTab === 'users' ? 'bg-primary text-white' : 'text-secondary'"
                            @click="currentTab = 'users'">
                            <i class="fa-solid fa-users-gear me-2"></i> Quản lý User
                        </button>
                    </li>
                    <li class="nav-item mt-5 pt-3 border-top border-secondary">
                        <router-link to="/"
                            class="nav-link text-warning border border-warning rounded text-center mb-3">
                            <i class="fa-solid fa-arrow-left me-2"></i> Về trang chủ
                        </router-link>
                    </li>

                </ul>
            </div>

            <div class="col-md-10 p-4 bg-light position-relative">

                <h2 v-if="currentTab === 'users'" class="mb-4 fw-bold text-secondary">Danh sách tài khoản thành viên
                </h2>
                <h2 v-else class="mb-4 fw-bold text-secondary">Quản lý bài viết Du lịch</h2>

                <ul v-if="currentTab !== 'users'" class="nav nav-tabs mb-4">
                    <li class="nav-item">
                        <button class="nav-link fw-bold" :class="{ active: currentTab === 'create' }"
                            @click="currentTab = 'create'">
                            <i class="fa-solid fa-plus text-success"></i> Viết bài mới
                        </button>
                    </li>
                    <li class="nav-item">
                        <button class="nav-link" :class="{ active: currentTab === 'list' }"
                            @click="currentTab = 'list'">
                            Danh sách bài đăng
                        </button>
                    </li>
                    <li class="nav-item" v-if="currentTab === 'edit'">
                        <button class="nav-link active text-warning fw-bold"><i class="fa-solid fa-pen-to-square"></i>
                            Đang chỉnh sửa</button>
                    </li>
                </ul>

                <div v-if="currentTab === 'users'">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-hover align-middle">
                                    <thead class="table-dark">
                                        <tr>
                                            <th>ID</th>
                                            <th>Tên đăng nhập</th>
                                            <th>Mật khẩu</th>
                                            <th>Email</th>
                                            <th>Vai trò</th>
                                            <th>Hành động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(user, index) in users" :key="index">
                                            <td>#{{ index + 1 }}</td>
                                            <td class="fw-bold text-primary">{{ user.username }}</td>

                                            <td class="text-danger fw-bold font-monospace">{{ user.password }}</td>

                                            <td>{{ user.email || 'Chưa cập nhật' }}</td>
                                            <td>
                                                <span v-if="user.role === 'admin'" class="badge bg-danger">Admin</span>
                                                <span v-else class="badge bg-success">User</span>
                                            </td>
                                            <td>
                                                <button @click="openEditUserModal(index)"
                                                    class="btn btn-sm btn-outline-warning me-2">
                                                    <i class="fa-solid fa-user-pen"></i> Sửa
                                                </button>

                                                <button v-if="user.username !== 'admin'" @click="deleteUser(index)"
                                                    class="btn btn-sm btn-outline-danger">
                                                    <i class="fa-solid fa-user-xmark"></i> Xóa
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="showUserModal" class="user-modal-overlay">
                    <div class="card p-4 shadow-lg" style="width: 400px; background: white;">
                        <h4 class="text-center text-warning fw-bold mb-3">Chỉnh sửa thành viên</h4>

                        <div class="mb-3">
                            <label class="fw-bold form-label">Tên đăng nhập</label>
                            <input :value="editingUser.username" class="form-control" disabled readonly
                                style="background: #e9ecef;">
                        </div>

                        <div class="mb-3">
                            <label class="fw-bold form-label">Mật khẩu</label>
                            <input v-model="editingUser.password" type="text" class="form-control">
                        </div>

                        <div class="mb-3">
                            <label class="fw-bold form-label">Email</label>
                            <input v-model="editingUser.email" type="email" class="form-control">
                        </div>

                        <div class="mb-4">
                            <label class="fw-bold form-label">Vai trò</label>
                            <select v-model="editingUser.role" class="form-select">
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>

                        <div class="d-flex gap-2">
                            <button @click="saveUserChanges" class="btn btn-warning w-100 fw-bold text-white">Lưu thay
                                đổi</button>
                            <button @click="showUserModal = false" class="btn btn-secondary w-100">Hủy</button>
                        </div>
                    </div>
                </div>

                <div v-if="currentTab === 'list'">
                    <div class="table-responsive bg-white rounded shadow-sm p-3">
                        <table class="table table-hover align-middle">
                            <thead class="table-light">
                                <tr>
                                    <th>#</th>
                                    <th>Hình ảnh</th>
                                    <th>Tiêu đề & Tác giả</th>
                                    <th>Ngày đăng</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(post, index) in posts" :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td>
                                        <img :src="(post.images && post.images.length > 0) ? post.images[0] : (post.image || 'https://via.placeholder.com/50')"
                                            class="rounded" width="60" height="40" style="object-fit: cover;">
                                    </td>
                                    <td>
                                        <div class="fw-bold text-truncate" style="max-width: 200px;">{{ post.title }}
                                        </div>
                                        <small class="text-muted">{{ post.author }}</small>
                                    </td>
                                    <td>{{ post.date }}</td>
                                    <td>
                                        <button @click="deletePost(index)" class="btn btn-sm btn-outline-danger me-2"><i
                                                class="fa-solid fa-trash">Xóa</i></button>
                                        <button @click="updatePost(index)" class="btn btn-sm btn-outline-warning"><i
                                                class="fa-solid fa-pen"></i>Sửa</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div v-if="currentTab === 'create'">
                    <CreatePost @add-new-post="handleAddPost" />
                </div>

                <div v-if="currentTab === 'edit'" class="card p-4 shadow-sm">
                    <h4 class="mb-3 text-warning">Chỉnh sửa bài viết</h4>
                    <div class="mb-3">
                        <label class="form-label fw-bold">Tiêu đề</label>
                        <input v-model="editingPost.title" class="form-control">
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <label class="form-label fw-bold">Chuyên mục bài viết</label>
                            <select v-model="editingPost.category" class="form-select">
                                <option value="blog">Blog du lịch </option>
                                <option value="hotel">Khách sạn & Resort</option>
                                <option value="food">Ẩm thực & Ăn uống</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label fw-bold">Tác giả</label>
                            <input v-model="editingPost.author" class="form-control">
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label fw-bold">Album ảnh</label>
                        <div v-if="editingPost.images && editingPost.images.length > 0"
                            class="d-flex flex-wrap gap-2 mb-2 p-2 border rounded bg-light">
                            <div v-for="(img, idx) in editingPost.images" :key="idx" class="position-relative">
                                <img :src="img" class="rounded border"
                                    style="width: 100px; height: 100px; object-fit: cover;">
                                <button @click="removeEditImage(idx)"
                                    class="btn btn-danger btn-sm position-absolute top-0 end-0 p-0 rounded-circle"
                                    style="width: 20px; height: 20px;"><i class="fa-solid fa-xmark"></i></button>
                            </div>
                        </div>
                        <div class="input-group mb-2">
                            <span class="input-group-text"><i class="fa-solid fa-link"></i></span>
                            <input v-model="editImageUrl" @keyup.enter="addEditImageFromUrl" class="form-control"
                                placeholder="Dán link ảnh...">
                            <button @click="addEditImageFromUrl" class="btn btn-primary" type="button">Thêm</button>
                        </div>
                    </div>
                    <div class="mb-3"><label class="form-label fw-bold">Tác giả</label><input
                            v-model="editingPost.author" class="form-control"></div>
                    <div class="mb-3"><label class="form-label fw-bold">Nội dung</label><textarea
                            v-model="editingPost.content" class="form-control" rows="4"></textarea></div>
                    <div class="d-flex gap-2">
                        <button @click="submitUpdate" class="btn btn-warning text-white fw-bold">Lưu thay đổi</button>
                        <button @click="currentTab = 'list'" class="btn btn-secondary">Hủy bỏ</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import CreatePost from './CreatePost.vue';


const posts = ref([]);
const users = ref([]);
const currentTab = ref('list');
const editingIndex = ref(-1);
const editImageUrl = ref('');


const showUserModal = ref(false);
const editingUserIndex = ref(-1);
const editingUser = reactive({ username: '', password: '', email: '', role: 'user' });

const POST_KEY = 'dulich_data_final';
const USER_KEY = 'users';

const editingPost = reactive({ title: '', images: [], author: '', content: '', date: '', location: '' });


onMounted(() => {
  
    const postData = localStorage.getItem(POST_KEY);
    if (postData) {
        try {
            let parsedData = JSON.parse(postData);
            posts.value = parsedData.map(post => {
                if (post.image && (!post.images || post.images.length === 0)) return { ...post, images: [post.image] };
                return { ...post, images: post.images || [] };
            });
        } catch (e) { }
    }
  
    const userData = localStorage.getItem(USER_KEY);
    if (userData) users.value = JSON.parse(userData);
});


const deleteUser = (index) => {
    if (confirm(`Xóa user: ${users.value[index].username}?`)) {
        users.value.splice(index, 1);
        localStorage.setItem(USER_KEY, JSON.stringify(users.value));
    }
}


const openEditUserModal = (index) => {
    editingUserIndex.value = index;
    const user = users.value[index];
    editingUser.username = user.username;
    editingUser.password = user.password;
    editingUser.email = user.email;
    editingUser.role = user.role;

    showUserModal.value = true;
}


const saveUserChanges = () => {
    if (editingUserIndex.value !== -1) {
        const updatedUser = {
            ...users.value[editingUserIndex.value], // Giữ ID cũ
            password: editingUser.password,
            email: editingUser.email,
            role: editingUser.role
        };

        users.value[editingUserIndex.value] = updatedUser;
        localStorage.setItem(USER_KEY, JSON.stringify(users.value));

        alert("Đã cập nhật thông tin thành viên!");
        showUserModal.value = false;
    }
}


const saveToLocalStorage = () => { localStorage.setItem(POST_KEY, JSON.stringify(posts.value)); }
const handleAddPost = (newPostData) => {
    newPostData.date = new Date().toLocaleDateString();
    posts.value.unshift(newPostData);
    saveToLocalStorage();
    alert("Đăng bài thành công!");
    currentTab.value = 'list';
};
const deletePost = (index) => {
    if (confirm("Xóa bài này?")) { posts.value.splice(index, 1); saveToLocalStorage(); }
}
const updatePost = (index) => {
    editingIndex.value = index;
    Object.assign(editingPost, JSON.parse(JSON.stringify(posts.value[index])));
    currentTab.value = 'edit';
}
const addEditImageFromUrl = () => { if (editImageUrl.value.trim()) { editingPost.images.push(editImageUrl.value.trim()); editImageUrl.value = ''; } }
const removeEditImage = (index) => { editingPost.images.splice(index, 1); }
const handleEditImages = (e) => { }
const submitUpdate = () => {
    if (editingIndex.value !== -1) {
        posts.value[editingIndex.value] = JSON.parse(JSON.stringify(editingPost));
        saveToLocalStorage();
        alert("Cập nhật thành công!");
        currentTab.value = 'list';
    }
}
const resetData = () => { if (confirm("Xóa sạch dữ liệu bài viết?")) { localStorage.removeItem(POST_KEY); posts.value = []; window.location.reload(); } }
</script>

<style scoped>

.user-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1050;
    /* Đảm bảo nằm trên cùng */
}
</style>