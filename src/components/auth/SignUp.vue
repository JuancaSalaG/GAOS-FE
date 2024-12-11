<template>
    <main>
        <div class="container my-5" style="min-height: 79vh;">
            <h1 class="fw-bold fs-4 mt-6">REGISTRO DE PACIENTES</h1>
            <form @submit.prevent="submit">
                <div class="d-flex flex-column mx-auto w-50 text-start">
                    <h5 class="my-2">Autorización</h5>
                    <div class="mb-3">
                        <label for="email" class="form-label">Correo Electrónico</label>
                        <input type="email" class="form-control" id="email" placeholder="nombre@ejemplo.com" v-model="patient.email">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Contraseña</label>
                        <input type="text" class="form-control" id="password" v-model="patient.password">
                    </div>
                    <h5 class="my-2">Información</h5>
                    <div class="mb-3">
                        <label for="name" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="name" v-model="patient.name">
                    </div>
                    <div class="mb-3">
                        <label for="surname" class="form-label">Apellido</label>
                        <input type="text" class="form-control" id="surname" v-model="patient.surname">
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Celular</label>
                        <input type="text" class="form-control" id="phone" v-model="patient.phone">
                    </div>
                    <label for="typeId" class="form-label">Tipo DNI</label>
                    <select class="form-select" aria-label="Default select example" id="typeId" v-model="patient.dniType">
                        <option selected value="CC">CC</option>
                        <option value="CE">CE</option>
                        <option value="TI">TI</option>
                        <option value="PP">PP</option>
                        <option value="OTRO">OTRO</option>
                    </select>
                    <div class="mb-3">
                        <label for="dniNumber" class="form-label">Numero DNI</label>
                        <input type="text" class="form-control" id="dniNumber" v-model="patient.dniNumber">
                    </div>
                    <div class="d-flex justify-content-center">
                        <button type="submit" class="btn btn-secondary text-white fw-bold w-50">Registrarse</button>
                    </div>
                </div>
            </form>
        </div>
    </main>
</template>

<script setup lang="ts">
import { User } from '@/shared/models/user.model';
import { createUser } from '@/shared/services/users.service';
import { reactive } from 'vue';

const patient = reactive({
    email: '',
    password: '',
    name: '',
    surname: '',
    phone: '',
    dniType: 'CC',
    dniNumber: ''
});

const submit = () => {
    const { email, password, name, surname, phone, dniType, dniNumber } = patient;
    const model: User = {
        person: {
            name,
            surname,
            phone,
            dniType,
            dniNumber
        },
        auth: {
            email,
            password
        },
        role: {
            nameRole: 'PATIENT',
            office: '',
            position: '',
            status: 'ENROLLED'
        }
    };
    createUser(model)
        .then(response => console.log('Usuario creado', response))
        .catch(error => console.error(error));
}
</script>

<style scoped>
main {
  min-height: 84vh;
  background-color: #FBFBFB;
}
</style>