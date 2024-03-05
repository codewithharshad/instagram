<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import BaseFooter from './components/BaseFooter.vue';
</script>

<template>
    <NavBar />
    <main>
        <router-view />
    </main>
    <BaseFooter/>
</template>

<style scoped></style>
