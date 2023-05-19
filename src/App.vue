<template>
  <nav>
    <router-link to="/">Mapa de Ocupação </router-link> |
    <router-link to="/reservas">Reservas</router-link> |
    <router-link to="/refeicao" >Refeições</router-link> |
    <router-link to="/pedidos">Pedidos</router-link> |
    <router-link to="/">Sair da conta</router-link> 
  </nav>
  <router-view/>
</template>
<script>
export default {
  methods:{
  }
}
</script>
<style lang="scss">
@import "@/styles/root.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  background-color: linear-gradient(to left, $cor_cabecalho_2 0%, $cor_cabecalho_1);
  padding: 0.5em;
  color: #666666;
    box-shadow: 2px 0px 19px rgba(0, 0, 0, 0.735);
  a {
    font-weight: bold;
    color: #b8b7b7;
    text-decoration: none;
    cursor: pointer;
    &.router-link-exact-active {
      color: #fff;
    }
  }
}
</style>
