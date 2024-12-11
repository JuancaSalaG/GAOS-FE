<template>
    <v-card
      class="mx-auto"
      max-width="344"
    >
        <v-img
            height="200px"
            :src="image"
            cover
        ></v-img>

        <v-card-title class="fw-bold mt-2">
            {{ cardTitle }}
        </v-card-title>

        <div class="d-flex flex-column justify-content-center align-items-center my-3">
            <v-btn class="mb-5 w-auto">
                Ingresar
            </v-btn>
    
            <v-btn v-if="cardTitle === 'Pacientes'"
                class="mb-5 w-auto"
                color="#3a6e90"
                @click="goToRegister">
                Registrarse
            </v-btn>
        </div>
    </v-card>
</template>

<script setup lang="ts">
import router from "@/router";
import { defineProps, toRefs } from "vue";

const props = defineProps({
    cardTitle: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const goToRegister = () => {
    router.push("/sign-up");
}

const { cardTitle, image } = toRefs(props);
</script>