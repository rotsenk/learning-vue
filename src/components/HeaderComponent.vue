<template>
  <header id="header">
    <div class="center">
      <!-- LOGO -->
      <div id="logo">
        <img src="../assets/logo.png" class="app-logo" alt="Logotipo" />
        <span id="brand">
          <!-- marca del sitio -->
          <strong>Curso</strong>Vue
        </span>
      </div>
      <!-- MENU -->
      <nav id="menu">
        <ul>
          <li>
            <router-link to="/home">Inicio</router-link>
          </li>
          <li>
            <router-link to="/blog">Blog</router-link>
          </li>
          <li>
            <router-link to="/formulario">Formulario</router-link>
          </li>
          <li>
            <router-link to="/pagina">Página 1</router-link>
          </li>
          <li>
            <a href="#">Página 2</a>
          </li>
        </ul>
      </nav>

      <!-- LIMPIAR LOS FLOTADOS -->
      <div class="clearfix"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>