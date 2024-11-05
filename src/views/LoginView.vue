<script setup>
import { ref } from 'vue';
import { loginUser } from '@/stores/loginUser';

const username = ref('');
const password = ref('');

async function handleLogin() {
  const token = await loginUser(username.value, password.value);
  
  if (token) {
    console.log('Login successful! Token stored in localStorage.');
  } else {
    console.log('Login failed. Check your credentials.');
  }
}
</script>

<template>
  <div class="container py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5">
          <input v-model="username" class="form-control" placeholder="Username" />
          <input v-model="password" class="form-control my-3" type="password" placeholder="Password" />
          <button @click="handleLogin" class="btn btn-primary px-5">Login</button>
        </div>
      </div>
    </div>
    
  </div>
</template>

