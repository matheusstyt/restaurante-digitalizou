<template>
    <div class="modal-table">
        <div class="container-table-add">
            <button @click="close">x</button>
            <span>
                <h4>Reservar  {{ table_now }}</h4>
            </span>
            
            <form>
                <select name="tables" id="cb-tables">
                    <option value="">Escolha uma mesa.</option>
                    <template v-for="(item, index) in list_table" :key="index">
                        <option :value="item.label">{{ item.label }}</option>
                    </template>
                </select>
               
                <Field
                    label="Nome do Cliente"
                    :text_input="cliente"
                    :required="true"
                ></Field>

                
                <div class="form-field">
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
                </div>
                <div class="form-field">
                    <div class="input-field">
                        <p>Horário de entrada:</p>
                        <input type="datetime-local" v-model="horario_entrada"/>
                    </div>
                    <div class="input-field">
                        <p>Quantas horas?</p>
                        <input type="time" v-model="tempo_reserva"/>
                    </div>
                </div>
                

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
            table_now : "Mesa 01",
            number_mesa : 0,
            refeicao : "",
            cliente : "",
            horario_entrada : this.horario_formatado(new Date()),
            tempo_reserva : "01:00",
            list_table : [
                {
                    number : 1,
                    label : "Mesa 01"
                },
                {
                    number : 2,
                    label : "Mesa 02"
                },
                {
                    number : 3,
                    label : "Mesa 03"
                },
                {
                    number : 4,
                    label : "Mesa 04"
                },
                {
                    number : 5,
                    label : "Mesa 05"
                },
                {
                    number : 6,
                    label : "Mesa 06"
                },
                {
                    number : 7,
                    label : "Mesa 07"
                },
                {
                    number : 8,
                    label : "Mesa 08"
                },
                {
                    number : 9,
                    label : "Mesa 09"
                },
                {
                    number : 10,
                    label : "Mesa 10"
                },
                {
                    number : 11,
                    label : "Mesa 11"
                },
                {
                    number : 12,
                    label : "Mesa 12"
                },
                {
                    number : 13,
                    label : "Mesa 13"
                },
                {
                    number : 14,
                    label : "Mesa 14"
                },
                {
                    number : 15,
                    label : "Mesa 15"
                },
            ]
        }
    },
    methods : {
        close(){
            this.$emit("close_modal", false);
        },
        horario_formatado(date) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            
            return `${year}-${month}-${day}T${hours}:${minutes}`;
        },
    },
    mounted (){

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
        padding-bottom: 0.5em;
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
    select{
        width: 90%;
        padding: 0.5em 1em;
        background-color: #e6d6ca;
        border-radius: 0.5em;
    }
    
</style>