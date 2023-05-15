<template>
  <nav>
    <router-link to="/">Painel </router-link> |
    <router-link to="/refeicao">Refeições</router-link> |
    <router-link to="/painel">Pedidos</router-link> |

    <router-link to="/logout">Sair da conta</router-link> |
  </nav>
  <router-view/>
</template>

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
  background-color: $cor_cabecalho;
  padding: 0.5em;
  color: #666666;
    box-shadow: 2px 0px 19px rgba(0, 0, 0, 0.735);
  a {
    font-weight: bold;
    color: #b8b7b7;
    text-decoration: none;

    &.router-link-exact-active {
      color: #fff;
    }
  }
}
</style>
