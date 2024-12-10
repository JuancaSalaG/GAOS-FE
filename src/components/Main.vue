<template>
    <main>
        <div class="container my-5" style="min-height: 79vh;">
            <h1 class="fw-bold fs-4 mt-6">PANEL DE CONTROL</h1>
            <div class="div-container">
                <div class="row">
                    <div class="col-6">
                        <Card :cardTitle="patients" :image="imagePatient" />
                    </div>
                    <div class="col-6">
                        <Card :cardTitle="admins" :image="imageAdmin"/>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import Card from './Card.vue';
import { ref } from "vue";

const patients = ref("Pacientes");
const admins = ref("Administradores");
const imagePatient = ref("https://guidewaycare.com/wp-content/themes/yootheme/cache/fa/6-ways-to-improve-patient-outcomes-fa42793a.jpeg");
const imageAdmin = ref("https://www.partnermd.com/hubfs/Blog%20Images%20%28Optimized%29/modern-hospital-building-picture-id1312706413%20%281%29%20%281%29.jpg");
</script>

<style scoped>
main {
  min-height: 84vh;
  background-color: #FBFBFB;
}

.div-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 70vh;
}
</style>