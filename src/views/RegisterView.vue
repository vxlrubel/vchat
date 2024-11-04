<script setup>
import { ref } from 'vue'
import axios from 'axios'
const apiUrl = import.meta.env.VITE_API_URL

const name = ref('')
const email = ref('')
const username = ref('')
const password = ref('')

const register = async () => {
  console.log(apiUrl)
  if (!name.value || !email.value || !username.value || !password.value) {
    alert('Please fill in all fields.')
    return
  }

  try {
    const response = await axios.post(`${apiUrl}/wp-json/vchat/v1/register`, {
      name: name.value,
      email: email.value,
      username: username.value,
      password: password.value,
    })

    if (response.status === 200) {
      alert('Registration successful!')
      localStorage.setItem('username', username.value)
      localStorage.setItem('password', password.value)
      name.value = ''
      email.value = ''
      username.value = ''
      password.value = ''
    } else {
      alert('Something went wrong, please try again.')
    }
  } catch (error) {
    console.error(error)
    alert('An error occurred. Please try again later.')
  }
}
</script>

<template>
  <section class="clearfix py-3 py-lg-5 register-area">
    <div class="container">
      <div class="bg-info pe-md-4">
        <div class="row">
          <div class="col-md-6">
            <img
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1730746176~exp=1730749776~hmac=3b3cf904d2544a8ba7d5c2bba9ffde0c320bdec17fa9403bb037260b264d1489&w=826"
              alt="register image"
              class="img-fluid"
            />
          </div>
          <div class="col-md-6">
            <form @submit.prevent="register">
              <h2>Let's start your journey.</h2>
              <div class="input-field mb-3">
                <label class="form-label" for="applicant-name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="applicant-name"
                  v-model="name"
                  required
                />
              </div>
              <div class="input-field mb-3">
                <label class="form-label" for="applicant-email"
                  >Email Address</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="applicant-email"
                  v-model="email"
                  required
                />
              </div>
              <div class="input-field mb-3">
                <label class="form-label" for="applicant-username"
                  >Username</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="applicant-username"
                  v-model="username"
                  required
                />
              </div>
              <div class="input-field mb-3">
                <label class="form-label" for="applicant-password"
                  >Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="applicant-password"
                  v-model="password"
                  required
                />
              </div>
              <button class="btn btn-primary" type="submit">
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.register-area {
  .container {
    max-width: 960px;
    overflow: hidden;
  }
  img {
    max-height: 100% !important;
  }
}
</style>
