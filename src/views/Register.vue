<template>
    <DefaultLayout>
        <template #header>                
            <Header />
        </template>
        <template #main>
            <SignUp />
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
import SignUp from '@/components/auth/SignUp.vue';
</script>

<style scoped>
main {
  min-height: 84vh;
  background-color: #FBFBFB;
}
</style>