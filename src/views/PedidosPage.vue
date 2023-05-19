<template>
    <div class="content-pedidos" > 
        <table>
            <thead>
                <th>ID</th>
                <th>Mesa</th>
                <th>N° pedido</th>
                <th>Cliente</th>
                <th>Observação</th>
                <th>Horário</th>
                <th>Quem reservou?</th>
                <th>Status</th>
            </thead>
            <template v-for="(refeicao, index) in list_refeicao" :key="index">
                <tr>
                    <td>{{ index }}</td>
                    <td>{{ refeicao.descricao }}</td>
                    <td>{{ refeicao.preco }}</td>
                    <td>{{ refeicao.obs }}</td>
                    <td><button>Sim</button></td>
                    <td><img src="@/assets/ico/edit_ico.svg" alt="editar item"></td>
                    <td><img src="@/assets/ico/remove_ico.svg" alt="remover item"></td>
                </tr>
                
            </template>
            
        </table>
    </div>
</template>
<script>
export default {
    components : {
    },
    mounted(){
        // se não houver usuário no sessionLocal, então ele retorna para página de entrar
        !sessionStorage.getItem('user_id') && window.location.replace("/entrar");
    }
}
</script>

<style lang="scss">
.content-pedidos{
    padding-top: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    th, td{
        padding: 1em;
    }
}
</style>