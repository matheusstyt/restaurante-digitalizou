<template>
    <table>
        <thead>
            <th>ID</th>
            <th>Mesa</th>
            <th>Cliente</th>
            <th>Observação</th>
            <th>Horário</th>
            <th>Tempo</th>
            
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
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
table{
    margin: 0 auto;
}
</style>