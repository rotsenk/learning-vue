<template>
  <section id="content">
    <h2 class="subheader">PÁGINA DE PRUEBA</h2>
    <h3>{{ id_desde_url }}</h3>
    <button @click="actualizarNombre()">Actualizar Nombre</button>
    <h4>{{nombre}}</h4>
  </section>
</template>

<script>
export default {
  name: "PaginaComponent",
  //cuando el componente se crea pero no se ha terminado de cargar
  created() {
    console.log("Componente creado!!");
  },
  mounted() {
    this.id_desde_url = this.$route.params.id;
    console.log("Componente montado!!");
  },
  updated() {
    console.log("Componente actualizado!!");
  },
  //cuando cambias de una ruta a otra, el componente se elimina (destroyed)
  unmounted() {
    console.log("Componente eliminado!!");
  },
  data() {
    return {
      id_desde_url: null,
      nombre: "Staenly",
    };
  },
  methods: {
    actualizarNombre() {
      (this.nombre = "STAENLY RIVAS"), console.log(this.nombre);
    },
  },
};
</script>