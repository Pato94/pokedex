<template>
  <div class="caja-login">
    <form @submit="formSubmit" class="box-login">
      <h1 class="header">Iniciar sesión</h1>
      <div class="container-login">
        <label>Nombre de usuario o correo</label>
        <br />
        <input
          class="input"
          type="text"
          v-model="usuario"
          placeholder="Username"
        />
      </div>
      <div class="container-login">
        <label>Contraseña</label>
        <br />
        <input
          class="input"
          type="password"
          v-model="password"
          placeholder="Password"
        />
      </div>
      <button class="submit-login">INICIAR SESIÓN</button>
      <router-link class="redirect" to="/register">Registarse</router-link>
    </form>
  </div>
</template>

<script>
import axios from "axios";
const API_URL = process.env.VUE_APP_API_URL;

export default {
  data() {
    return {
      usuario: "",
      password: "",
      output: "",
    };
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      let account = this;
      axios
        .post(`${API_URL}/login`, {
          username: this.usuario,
          password: this.password,
        })
        .then(function (response) {
          account.output = response.data;
        })
        .catch(function (error) {
          account.output = error;
        });
    },
  },
};
</script>

<style>
.caja-login {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-family: sans-serif;
  background-color: #d8d8d8;
}
.box-login {
  border-radius: 3px;
  background: #fff;
  max-width: 1000px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
  padding: calc(15px + 45 * ((100vw - 320px) / 880));
}

.container-login {
  padding: 15px;
}

.input {
  width: 100%;
  margin-top: 10px;
}

.header {
  margin-top: 0;
  text-align: center;
  font-weight: normal;
  font-family: "Roboto";
  color: #4d4d4d;
  font-size: calc(20px + 20 * ((100vw - 320px) / 880));
}

.submit-login {
  width: 100%;
  margin: 10px 10px 10px 10px;
  text-align: center;
  border-radius: 5px;
  padding: 1rem;
  font-family: "Roboto";
  font-weight: 500;
  background: #1b78d0;
  color: #fff;
}

.redirect {
  cursor: pointer;
  color: #1b78d0;
  text-decoration: none;
  margin: 36%;
}
</style>
