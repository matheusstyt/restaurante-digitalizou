<template>
  <nav>
    <router-link to="/">Painel </router-link> |
    <router-link to="/refeicao">Cadastrar refeição</router-link> |
    <router-link to="/painel">Administrativo</router-link> |

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
  background-color: $cor_secundaria;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: $cor_primaria;
    }
  }
}
</style>
