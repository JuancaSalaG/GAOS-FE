<template>
    <DefaultLayout>
        <template #header>                
            <Header />
        </template>
        <template #main>
            <Admin />
        </template>
        <template #footer>
            <Footer />
        </template>
    </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Admin from '@/components/users/Admin.vue';
import Profile from '@/components/users/Profile.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.meta);

</script>

<style scoped lang="scss"></style>