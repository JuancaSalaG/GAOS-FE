<template>       
    <DefaultLayout>
        <template #header>                
            <Header />
        </template>
        <template #main>
            <Main />
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

export default {
  components: {
    DefaultLayout,
    Header,
    Footer,
    Main
  }
}
</script>