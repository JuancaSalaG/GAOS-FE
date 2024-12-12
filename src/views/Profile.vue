<template>
    <DefaultLayout>
        <template #header>                
            <Header />
        </template>
        <template #main>
            <UpdateUser />
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
import UpdateUser from '@/components/users/UpdateUser.vue';
</script>

<style scoped>
</style>