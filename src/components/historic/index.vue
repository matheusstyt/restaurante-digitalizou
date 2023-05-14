<template>
    <aside>
        <h2>Linha do Tempo</h2>
        <h4>Obs: ordem de chegada</h4>
        <ul>
            <template v-for="(request, index) in list_requests_local" :key="index">
                <li >
                    <h3>Mesa : {{ request.table_number }}</h3>
                    <p>Numero do pedido : {{  request.id }}</p>
                    <p>Refeição : {{  request.cliente.refeicao }}</p>
                    <p>Cliente : {{ request.cliente.nome }}</p>
                    <p>Horário : {{ request.horario }}</p>
                    <p>Status : {{  request.status }}</p>
                </li>
            </template>
            
        </ul>
    </aside>
</template>
<script>

export default {
    props : {
        list_requests : Array 
    },
    mounted (){
        this.list_requests_local = this.list_requests;
        console.log(this.list_requests_local)
    },
    data () {
        return {
            list_requests_local : []
        }
    },

}
</script>

<style lang="scss" scoped>
    @import "./historic.scss";
</style>