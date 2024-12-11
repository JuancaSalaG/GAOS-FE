<template>
    <DefaultLayout>
        <template #header>                
            <Header />
        </template>
        <template #main>
            <div>
                Hello from Dashboard
            </div>
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

const user = JSON.parse(localStorage.getItem('user') || '{}');
console.log('🔴 ', user);
</script>

<style scoped lang="scss"></style>