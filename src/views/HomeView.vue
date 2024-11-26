<template>
  <div>
      <h2>Bienvenido a la página de inicio, {{ user.email }}</h2>
      <button class="btn btn-primary" @click="logout">Cerrar sesión</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
      ...mapState(['user']),
  },
  methods: {
      logout() {
          this.$store.dispatch('logout');
          this.$router.push('/login');
      },
  },
};
</script>