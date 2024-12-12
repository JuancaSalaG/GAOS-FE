<template>       
    <DefaultLayout>
        <template #header>                
            <Header />
        </template>
        <template #main>
            <div v-if="route.meta.home">
                <Main />
            </div>
            <div v-if="route.meta.login">
                <Login />
            </div>
        </template>
        <template #footer>
            <Footer />
        </template>
    </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Main from '@/components/Main.vue';
import Login from '@/components/auth/Login.vue';

export default defineComponent({
  components: {
    DefaultLayout,
    Header,
    Footer,
    Login,
    Main
  },
  setup() {
    const route = useRoute();
    return { route };
  }
});
</script>