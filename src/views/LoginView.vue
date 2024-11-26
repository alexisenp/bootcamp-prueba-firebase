<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100">
    <div class="card p-4 w-100" style="max-width: 400px;">
      <h3 class="text-center">Iniciar sesión</h3>
      <form @submit.prevent="onLogin">
        <div class="form-group">
          <input type="email" v-model="email" class="form-control" placeholder="Correo electrónico" required />
        </div>
        <div class="form-group mt-3">
          <input type="password" v-model="password" class="form-control" placeholder="Contraseña" required />
        </div>
        <div class="d-flex justify-content-end mt-3">
          <a href="#" @click="clicRegister" class="text-primary">Registro</a>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-primary btn-block mt-4">Iniciar sesión</button>
        </div>
      </form>
      <p class="text-muted mt-3 text-center">Bienvenido a nuestro sistema.</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['login']),
    async onLogin()  {
      const userData = {
        email: this.email,
        password: this.password,
      };
      let result = await this.login(userData);
      if (!result) {
        alert('Usuario o contraseña incorrectos');
      } else {
        this.$router.push('/home');
      }
    },
    clicRegister() {
      this.$router.push('/register');
    },
  },
};
</script>