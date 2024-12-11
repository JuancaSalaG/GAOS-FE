<template>       
    <DefaultLayout>
        <template #header>                
            <Header />
        </template>
        <template #main>
            <div v-if="$route.meta.home">
                <Main />
            </div>
            <div v-if="$route.meta.login">
                <Login />
            </div>
            {{ message }}
        </template>
        <template #footer>
            <Footer />
        </template>
    </DefaultLayout>
</template>

<script lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Main from '@/components/Main.vue';
import Login from '@/components/auth/Login.vue';
import { provide } from 'vue';

export default {
  components: {
    DefaultLayout,
    Header,
    Footer,
    Login,
    Main
  },
  setup() {
    const message = '';
    provide('sharedMessage', message);
    return {
      message
    }
  }
}
</script>