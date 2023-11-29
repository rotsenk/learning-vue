<template>
  <HeaderComponent></HeaderComponent>
  <SliderComponent></SliderComponent>
  <div class="center">
    <!-- <LastArticles></LastArticles> -->
    <router-view></router-view>
    <SidebarComponent></SidebarComponent>
  </div>
  <FooterComponent></FooterComponent>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import SliderComponent from "./components/SliderComponent.vue";
import SidebarComponent from "./components/SidebarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

@import "./assets/css/styles.css";
</style>
