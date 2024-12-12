<template>
    <main>
        <div class="alert alert-success" role="alert" v-show="flag">
            Usuario actualizado correctamente!!
        </div>
        <div class="container my-5">
            <h1 class="fw-bold fs-4 mt-6">ACTUALIZACIÓN DE USUARIO</h1>
            <form @submit.prevent="submit">
                <div class="d-flex flex-column mx-auto w-50 text-start">
                    <h5 class="my-2 fw-bold">Información</h5>
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
                    <select class="form-select mb-3" aria-label="Default select example" id="typeId" v-model="patient.dniType">
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
                    <div class="d-flex justify-content-center mt-4">
                        <button type="submit" class="btn btn-secondary text-white fw-bold w-50">Actualizar</button>
                    </div>
                </div>
            </form>
        </div>
    </main>
</template>

<script setup lang="ts">
import { updateUserById } from '@/shared/services/users.service';
import { reactive, ref } from 'vue';

const user = JSON.parse(localStorage.getItem('user') || '{}');
const person = user.person;

const patient = reactive({
    personId: person.personId,
    name: person.name,
    surname: person.surname,
    phone: person.phone,
    dniType: person.dniType,
    dniNumber: person.dniNumber
});

const flag = ref(false);

const submit = () => {
    const { name, surname, phone, dniType, dniNumber, personId } = patient;
    const model: any = {
        personId,
        name,
        surname,
        phone,
        dniType,
        dniNumber        
    };
    console.log('Modelo a enviar', model);    
    updateUserById(model.personId, model)
        .then(response => {
            console.log('Usuario actualizado', response);
            flag.value = true;
            user.person = model;
            localStorage.setItem('user', JSON.stringify(user));
            new Promise((resolve) => {
                setTimeout(() => {
                resolve(flag.value = false);
                }, 3000);
            });
        })
        .catch(error => console.error(error));
}
</script>

<style scoped>
main {
  background-color: #FBFBFB;
  min-height: 95vh;
}
</style>