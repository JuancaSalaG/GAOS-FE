<template>
    <main>
        <div class="container my-5 d-flex flex-column align-items-center justify-content-center" style="min-height: 75vh;">
            <div class="card" style="width: 21rem;">
                <img src="https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg" height="240" width="200" class="card-img-top" alt="user">
                <div class="card-body">
                    <h5 class="card-title fw-bold">Bienvenido usuario</h5>
                    <div class="mb-3 text-start">
                        <label for="correo" class="form-label">Correo</label>
                        <input type="email" class="form-control" id="correo" placeholder="name@example.com" v-model="loginUser.email">
                    </div>
                    <div class="mb-3 text-start">
                        <label for="password" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" id="password" v-model="loginUser.password">
                    </div>
                    <a @click="goToApp" class="btn btn-primary my-2">Ingresar</a>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import router from '@/router';
import { reactive } from 'vue';
import { login } from "@/shared/services/users.service";

const loginUser = reactive({
    email: '',
    password: '',
});

const resetLogin = reactive({
    email: '',
    password: ''
});

const goToApp = () => {
    login(loginUser)
        .then((response) => {
            router.push("/dashboard");
            localStorage.setItem('user', JSON.stringify(response.data));
        })
        .catch((error) => {
            console.log(error);
        });
    Object.assign(loginUser, resetLogin);
}
</script>

<style scoped>
main {
  min-height: 84vh;
  background-color: #FBFBFB;
}
</style>