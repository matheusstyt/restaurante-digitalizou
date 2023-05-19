<template>
    <div class="modal-table">
        <div class="container-table-add">
            <button @click="close">x</button>
            <h3 v-if="isExists">{{ msg }}</h3>
            <span>
                <h4>Reservar  {{ mesa }}</h4>
            </span>  
            <form @submit="enviar_reserva">
                <select name="tables" id="cb-tables" v-model="mesa">
                    <option value="">Escolha uma mesa.</option>
                    <template v-for="(item, index) in list_table" :key="index">
                        <option :value="item.table_id">Mesa {{ item.table_id }}</option>
                    </template>
                </select>
               
                <Field
                    label="Nome do Cliente"
                    :text_input="cliente_name"
                    :required="true"
                    @new_value="update_cliente"
                ></Field>
                <!-- <div class="form-field">
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
                </div> -->
                <div class="form-field">
                    <div class="input-field">
                        <p>Horário de entrada:</p>
                        <input type="datetime-local" v-model="horario_entrada"/>
                    </div>
                    <div class="input-field">
                        <p>Quantas horas?</p>
                        <input type="time" v-model="tempo"/>
                    </div>
                </div>
                <input type="submit" value="Reservar">
            </form>
        </div>
    </div>
</template>
<script>
import { formatar_data, parse_tempo, horario_formatado } from "@/api/time";
import "./modal.scss";
import Field from "@/components/input";
import { post_reserva } from '@/api/reserva';
import { rows_list_table } from "@/json/list_table.json";

export default {
    props : {
        table_number : {
            type: String,
            default: '01',
            required:false
        }
    },
    components : {
        Field
    },
    data () {
        return {
            isExists : false,
            msg : "",
            mesa : "",
            cliente_name : "",
            horario_entrada : formatar_data(new Date()),
            tempo : "01:00",
            list_table : rows_list_table
        }
    },
    methods : {
        isObject(variable) {
            return Object.prototype.toString.call(variable) === '[object Object]';
        },
        update_cliente(value){
            this.cliente_name = value;
        },
        enviar_reserva(e){
            
            const body_reserva = {
                mesa : this.mesa,
                cliente_name : this.cliente_name,
                horario_entrada: this.horario_entrada,
                tempo: this.tempo
            }
            post_reserva(body_reserva)
            .then( data => {
                //basicamente ele verifica se ata é objeto, se sim eu sei que post foi sucesso
                this.isExists = !this.isObject(data);
                
                if(this.isObject(data)){
                    this.isExists = false;
                    window.location.reload()
                }else{
                    // caso contrárrio, eu sei que é a mensagem de erro do back-end
                    this.msg = data
                    this.isExists = true;
                }
            })

            e.preventDefault();
            
        },
        close(){
            this.$emit("close_modal", false);
        },
    },
    mounted (){
        this.mesa = this.table_number;
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