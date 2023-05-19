<template>
    
    <ModalRequest v-if="modal_deletar"  :reserva_atual="reserva_atual" @close_modal_delete="close_modal_delete"></ModalRequest>
        
    <table>
        <thead>
            <th>ID</th>
            <th>Mesa</th>
            <th>Cliente</th>
            <th>Horário de Entrada</th>
            <th>Tempo no lugar</th>
            <th>*</th>
        </thead>
        <template v-for="(reserva, index) in lista_reserva" :key="index">
            <tr>
                <td>{{ reserva.id }}</td>
                <td>{{ reserva.mesa }}</td>
                <td>{{ reserva.cliente_name }}</td>
                <td>{{ reserva.horario_entrada }}</td>
                <td>{{ reserva.tempo }}</td>
                <td><img @click="delete_modal(reserva)" src="@/assets/ico/remove_ico.svg" alt="remover item"></td>
            </tr>
            
        </template>
        
    </table>
</template>
<script>

import ModalRequest from '@/components/modal_delete_reserva';
import { get_reservas, delete_reserva } from '@/api/reserva';

export default {
    components:{
        ModalRequest
    },
    data(){
        return{
            modal_deletar : false,
            lista_reserva : [],
            reserva_atual : Object
        }
    },
    mounted(){
        
        get_reservas()
            .then( reservas => {
                this.lista_reserva = reservas;
                // loop das mesas, e cada mesa terá um loop das reservas para adicionar ao gantt
                reservas.forEach( reserva => {
                    console.log(reserva)
                })
            });  
    },
    methods : {
        close_modal_delete(value){
          this.modal_deletar = value;
        },
        delete_modal(reserva){
            this.modal_deletar = true;
            this.reserva_atual = reserva;
        },
        deletar(id){
            delete_reserva(id)
            .then( data => {
                if(data != null){
                    window.location.reload();
                }
                
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "@/styles/root.scss";
    @import "./table.scss";
    .modal{
        z-index: 7;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        display: flex;
        top: 0;
        align-items: center;
        justify-content: center;
        }
    .container-delete-reserva{
        background-color: rgba(0, 0, 0, 0.5);
        border: 1px dashed #ffffff6c;
        padding: 1em;        
        ul{
            li{
                display: flex;
                justify-content: space-between;
                padding: 0.5em;
                p{
                    color: $cor_texto;
                }
            }
        }
        button{
            padding: 0.5em 1em;
            background-color: rgb(159, 26, 26);
            color: #fff;
            opacity: 0.7;
            cursor: pointer;
            border-radius: 5px;
            &:hover{
                opacity: 1;
            }
        }
    }
</style>