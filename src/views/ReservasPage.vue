<template>
    <div class="content-gantt">
        <Modal v-if="isModal" @close_modal="close_modal"></Modal>
        <div class="options">
            <button id="btn-add" @click="open_modal">Nova reserva</button>
            <div class="flex-btn">
                <button @click="() => { isGantt = true}" id="btn-gantt">Gráfico de gantt</button>
                <button @click="() => { isGantt = false}" id="btn-table">Tabela de reservas</button>
            </div>
        </div>
        <template v-if="isGantt">
            <h2>Gráfico de Gantt - Reservas</h2>
            <Gantt />
        </template>
        <template v-else>
            <h2>Tabela - Reservas</h2>
            <Table>
            </Table>
        </template>
        
    </div>
</template>
<script>
import axios from 'axios'
import { get_reservas } from '@/api/reserva';
import Gantt from "@/components/gantt";
import Modal from "@/components/modal_create_reserva";
import Table from "@/components/table_requests";
export default {
    components : {
        Gantt, Modal, Table
    },
    data (){
        return{
            HOST : require('@/config/env').HOST,
            PORT : require('@/config/env').PORT,
            lista_reservas : [],
            isModal : false,
            isGantt : true
        }
    },
    methods : {
        close_modal (value ) {
            this.isModal = value;
        },
        open_modal(){
            this.isModal = true;
        }
    },
    mounted (){
        // se não houver usuário no sessionLocal, então ele retorna para página de entrar
        !sessionStorage.getItem('user_id') && window.location.replace("/entrar");
        get_reservas()
        .then( data => {
            this.lista_reservas = data;
            console.log(this.lista_reservas)
        })
    }
}
</script>
<style lang="scss" scoped>
@import "@/styles/root.scss";
h2{
    color: $cor_texto;
    padding-bottom: 0.5em;
}
.content-gantt{
    margin-top: 1em;
    height: 90vh;
    overflow-y:auto;
}  

.options{
    padding: 1em 4em;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .flex-btn{
        display: flex;
        gap: 2em;
        #btn-gantt{
            background-color: #734ecb;
        }
        #btn-table{
            background-color: #d53f34;
        }
    }
    button{
        cursor: pointer;
        border-radius: 0.5em;
        padding: 0.7em 1em;
        background-color: rgb(40, 103, 218);
        color: #fff;
        opacity: 0.8;
        &:hover{
            opacity: 1;
        }
    }
}
</style>