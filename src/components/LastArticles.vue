<template>
  <section id="content">
    <h2 class="subheader">Últimos artículos</h2>

    <!--Listado de artículos-->
    <div id="articles">
      <article class="article-item" id="article-template">
        <div class="image-wrap">
          <img src="../assets/images/paramore.jpg" alt="paramore this is why" />
        </div>
        <h2>Artículo de prueba</h2>
        <span class="date"> Hace 5 minutos </span>
        <a href="#">Leer más</a>
        <div class="clearfix"></div>
      </article>
      <!--AÑADIR ARTÍCULOS VÍA JS-->
    </div>
  </section>
</template>

<script>
export default {
  name: "LastArticles",
};
</script>