<template>
    <div class="modal-table">
        <div class="container-table-add">
            <button @click="close">x</button>
            <span>
                <h4>Reservar Mesa  </h4>
                <strong>
                    <p>{{ table.number }}</p>
                </strong>
                
            </span>
            
            <form>
                <Field
                label="Nome do Cliente"
                :text_input="cliente"
                :required="true"
                ></Field>
                <Field
                label="Qual Refeição?"
                :text_input="cliente"
                :required="true"
                ></Field>
                <Field
                label="Quantos?"
                :text_input="cliente"
                :required="true"
                placeholder="Quantidade"
                type="number"
                ></Field>
                <input type="submit" value="Reservar">
            </form>
        </div>
    </div>
</template>
<script>
import "./modal.scss";
import Field from "@/components/input"
export default {
    props : {
        table : Object
    },
    components : {
        Field
    },
    data () {
        return {
            number_mesa : 0,
            refeicao : "",
            cliente : "",
        }
    },
    methods : {
        close(){
            this.$emit("close_modal", false);
        }
    }
}
</script>
<style lang="scss">
    @import "@/styles/root.scss";
    span{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1em;
        strong{
            background-color: #fff;
            border-radius: 50%;
            width: 2em;
            aspect-ratio: 1/1;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
    }
     
    
</style>