<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeIcon from './icons/HomeIcon.vue'
import ProfileIcon from './icons/ProfileIcon.vue'
</script>

<template>
    <header class="clearfix">
        <div class="container">
            <RouterLink to="/" class="d-inline-flex align-items-center gap-1 text-decoration-none me-3">
                <HomeIcon /> Home
            </RouterLink>
            <RouterLink to="/about" class="d-inline-flex align-items-center gap-1 text-decoration-none">
                <ProfileIcon /> About
            </RouterLink>
    <br>
            
        </div>
    </header>
    <RouterView />
</template>