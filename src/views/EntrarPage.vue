<template>
    <div class="container-geral">
        <singup />
        <login />
    </div>
</template>
<script>

import login from '../components/login';
import singup from '../components/singup';
export default {
    components : {
        login,
        singup
    },
    data() {
        return {
            email : "",
            senha : ""
        }
    }

}

</script>
<style lang="scss">
@import "@/styles/entrar.scss"
</style>