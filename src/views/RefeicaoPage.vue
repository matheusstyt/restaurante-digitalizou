<template>
    <div class="content-refeicao">

        <form @submit="enviar_refeicao">
            <Field
                label="Descrição da refeição"
                :text_input="descricao_refeicao"
                :required="true"
                type="text"
                @new_value="new_descricao"
                >
            </Field>
            <Field
                label="Preço"
                :text_input="preco_refeicao"
                placeholder="0,00"
                type="number"
                @new_value="new_preco"
                >
            </Field>
            <Field
                label="Observação"
                :text_input="obs_refeicao"
                :required="true"
                type="text"
                @new_value="new_obs"
                >
            </Field>
            <input type="submit" value="Cadastrar">
        </form>

        <table>
            <thead>
                <th>ID</th>
                <th>Descrição</th>
                <th>Preço</th>
                <th>Observação</th>
                <th>Tem no estoque?</th>
                <th></th>
                <th></th>
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

import Field from "@/components/input";

export default {
    components : {
        Field
    },
    data () {
        return {
            descricao_refeicao : "",
            obs_refeicao : "",
            preco_refeicao : 0,
            list_refeicao : []
        }
    },
    methods : {
        enviar_refeicao(e){
            var refeicao = {
                descricao : this.descricao_refeicao,
                preco : this.preco_refeicao,
                obs : this.obs_refeicao
            }
            this.list_refeicao.push(refeicao);
            e.preventDefault();  
        },
        new_descricao (value) {
            this.descricao_refeicao = value;
        },
        new_preco (value) {
            this.preco_refeicao = value;
        },
        new_obs (value) {
            this.obs_refeicao = value;
        },
    },
    mounted(){
        // se não houver usuário no sessionLocal, então ele retorna para página de entrar
        !sessionStorage.getItem('user_id') && window.location.replace("/entrar");
    }
}
</script>
<style lang="scss" scoped>
@import "@/styles/refeicao.scss"
</style>