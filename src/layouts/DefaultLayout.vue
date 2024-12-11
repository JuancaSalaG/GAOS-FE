<template>
    <div>
        <slot name="header"></slot>
        <slot name="main">
            <router-view></router-view>
        </slot>
        <slot name="footer"></slot>  
    </div>
</template>

<script setup>
</script>

<style scoped>
</style>