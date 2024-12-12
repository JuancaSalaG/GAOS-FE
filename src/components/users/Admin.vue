<template>
    <main>
        <div class="container mb-5 pt-5 text-start">
            <h2 class="border-bottom border-2 p-1">
                Tablero de administración
            </h2>
            <div class="d-flex flex-wrap mt-6">
                <div 
                    class="my-3 border rounded-3 p-3 shadow-lg w-auto me-5" 
                    style="background-color: #808e9b; color: white;"
                    v-for="(value, key ) in userList" :key="value.personId">
                    <h5 class="fw-bold">Paciente #id {{ value.personId }}</h5>
                    <div class="d-flex justify-content-between">
                        <div class="row w-100">
                            <div class="col-6">
                                <p class="m-0">
                                    <span class="fw-bold">Nombre Completo:</span> {{ value.name }} {{ value.surname }}
                                </p>
                                <p class="m-0">
                                    <span class="fw-bold">Celular:</span> {{ value.phone }}
                                </p>
                            </div>
                            <div class="col-6">
                                <p class="m-0">
                                    <span class="fw-bold">Tipo DNI:</span> {{ value.dniType }}
                                </p>
                                <p class="m-0">
                                    <span class="fw-bold">Número:</span> {{ value.dniNumber }}
                                </p>
                            </div>
                        </div>
                        <div style="cursor: pointer;" class="pe-3" @click="deleteUser(value.personId)">
                            <img width="50" height="50" src="https://img.icons8.com/plasticine/50/trash--v1.png" alt="trash--v1"/>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from "vue";
import { getUsers, deleteUserById } from "@/shared/services/users.service";

const userList: Ref<any[]> = ref([]);

onMounted(() => {
    getUsers().then((response) => {
        userList.value = response.data;        
    }).catch((error) => {
        console.log(error);
    });
});

const deleteUser = (id: number) => {   
    deleteUserById(id).then((response) => {
        console.log('User deleted', response);        
        userList.value = userList.value.filter((user) => user.personId !== id);
    }).catch((error) => {
        console.log(error);
    });
}
</script>

<style scoped lang="scss">
main {
  min-height: 100vh;
  background-color: #FBFBFB;
}
</style>