<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100">
    <div class="card p-4 w-100" style="max-width: 400px;">
      <h3 class="text-center">Regístrate</h3>
      <form @submit.prevent="onRegister">
        <div class="form-group">
          <label for="name">Nombre:</label>
          <input type="text" id="name" v-model="name" class="form-control" required />
        </div>
        <div class="form-group mt-3">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" class="form-control" required />
        </div>
        <div class="form-group mt-3">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" class="form-control" required />
        </div>
        <div class="d-flex justify-content-end mt-3">
          <router-link to="/login" class="text-primary">Login</router-link>
        </div>
        <div class="d-flex justify-content-end mt-4">
          <button type="submit" class="btn btn-primary">Registrarse</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['register']),
    onRegister() {
      const userData = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      this.register(userData);
    },
  },
};
</script>