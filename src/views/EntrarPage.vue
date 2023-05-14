<template>
    <div class="container-geral">
        <img class="banner-entrar" src="@/assets/banner-entrar.png" alt="">
        <login />
        
        
    </div>
</template>
<script>
import "@/styles/entrar.scss"
import login from '../components/login';
import singin from '../components/sing';
export default {
    components : {
        login,
        singin
    },
    data() {
        return {
            email : "",
            senha : ""
        }
    }

}

</script>
<style>

</style>