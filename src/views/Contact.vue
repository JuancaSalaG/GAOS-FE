<template>
    <DefaultLayout>
        <template #header>                
            <Header />
        </template>
        <template #main>
            <main>
                <div class="container my-5">
                    Hello from Contact.vue
                </div>
            </main>
        </template>
        <template #footer>
            <Footer />
        </template>
    </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
main {
  min-height: 84vh;
  background-color: #FBFBFB;
}
</style>