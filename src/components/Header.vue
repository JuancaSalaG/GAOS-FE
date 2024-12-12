<template>
    <header class="d-flex justify-content-between align-items-center py-3 px-4 text-center">
        <div class="d-flex align-items-center px-5">
          <img 
            width="60" 
            height="60" 
            src="https://img.icons8.com/clouds/60/apple-health.png" 
            alt="apple-health" 
            style="cursor: pointer;"
            @click="reload"/>
          <h1 class="mb-0 ms-3 fs-5 fw-bold">GAOS - Health Servie</h1>
        </div>
        <div class="d-flex align-items-center me-7 w-20">
          <nav class="py-0 px-5 fs-5" v-if="navFlag">
              <router-link to="/">Inicio</router-link>
              <router-link to="/about">Acerca de</router-link>
              <router-link to="/contact">Contacto</router-link>
          </nav>
          <nav class="py-0 px-5 fs-5" v-if="!navFlag">
              <router-link to="/dashboard">Inicio</router-link>
          </nav>
          <SlideMenu v-if="!navFlag" />
        </div>
    </header>
</template>

<script lang="ts">
import { userStore } from "@/store/index";
import SlideMenu from "./SlideMenu.vue";

export default {
  name: 'Header',
  components: {
    SlideMenu: SlideMenu
  },
  data() {
    return {
      user: userStore.user as any | null,
      navFlag: true,
    }
  },
  methods: {
    reload() {
      window.location.reload();
    }
  },
  watch: {
    'userStore.user': {
      handler(this: any, newValue: any | null): void {
        const partialUser: any  = JSON.parse(localStorage.getItem('user') || '{}');
        if (Object.keys(partialUser).length <= 0) {
          this.user = null;
          this.navFlag = true;
          return;
        }
        this.navFlag = false;
        this.user = partialUser;
      },
      immediate: true
    }
  }
}
</script>

<style scoped>
header {
  background-color: #227093;
  color: white;
  padding: 10px;
  text-align: center;
}
nav a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
}
nav a.router-link-exact-active {
  font-weight: bold;
}
</style>