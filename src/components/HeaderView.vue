<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeIcon from './icons/HomeIcon.vue'
import ProfileIcon from './icons/ProfileIcon.vue'
</script>

<template>
    <header class="clearfix header-area bg-primary text-white">
        <div class="container h-100">
            <div class="row align-items-center h-100">
                <div class="col-6 col-md-3">
                    <RouterLink to="/" class="fs-3 d-inline-flex align-items-center gap-1 text-decoration-none me-3">
                        LOGOHERE
                    </RouterLink>
                </div>
                <div class="d-none d-md-block col-md-6">
                    <ul class="menu m-0 p-0 list-unstyled d-flex align-items-center justify-content-center">
                        <li>
                            <RouterLink to="/" class="d-inline-flex align-items-center gap-1 text-decoration-none me-3">
                                <HomeIcon /> Home
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/about" class="d-inline-flex align-items-center gap-1 text-decoration-none">
                                <ProfileIcon /> About
                            </RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="col-6 col-md-3">
                    <ul class="list-unstyled m-0 p-0 d-flex align-items-center justify-content-end">
                        <li>
                            <a href="/login" class="d-inline-flex align-items-center justify-content-center py-2 px-3">Login</a>
                        </li>
                        <li>
                            <a href="/register" class="d-inline-flex align-items-center justify-content-center py-2 px-3">Register</a>
                        </li>
                    </ul>
                </div>
                
                
                
                
            </div>
        </div>
    </header>
    <RouterView />
</template>

<style scoped lang="scss">
.header-area{
    --header-height: 3.125rem;
    height: var(--header-height);
    a{
        color: inherit;
    }
}
</style>