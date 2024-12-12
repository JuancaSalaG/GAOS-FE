<template>
    <v-menu>
      <template v-slot:activator="{ props }">
        <img 
            width="55" 
            height="55" 
            src="https://img.icons8.com/stickers/55/user-male-circle.png" 
            alt="user-male-circle"
            v-bind="props"
        />
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <v-list-item-title :class="item.title === 'Cerrar Sesión'?  ['logout', 'fw-bold']: ''" @click="menu(item.title)">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
</template>
<script lang="ts">
  import router from "@/router";
import { userStore } from "@/store/index";
import { RouteRecordRaw } from "vue-router";
  export default {
    data: () => ({
      items: [
        { title: 'Perfil' },
        { title: 'Cerrar Sesión' }
      ],
    }),
    methods: {
      menu(value: string) {
        if (value === 'Cerrar Sesión') {
          userStore.setUser(null);
          localStorage.removeItem('user');
          router.push('/');        
        }
        if (value === 'Perfil') {
          router.push("/profile");
        }
      }
    },
  }
</script>
<style scoped>
.logout {
  color: red;
}
</style>