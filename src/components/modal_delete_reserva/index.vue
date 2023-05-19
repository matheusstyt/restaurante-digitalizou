<template>
    <div class="modal">
        <div class="container-delete-reserva">
            <button id="btn-delete" @click="close_modal_delete">x</button>
            <h3>Deletar reserva do sistema?</h3>
            <ul>
                <li>
                    <p>ID : </p>
                    <p>{{ reserva_atual.id }}</p>
                </li>
                <li>
                    <p>Mesa : </p>
                    <p>{{ reserva_atual.mesa }}</p>
                </li>
                <li>
                    <p>Cliente : </p>
                    <p>{{ reserva_atual.cliente_name }}</p>
                </li>
                <li>
                    <p>Horário de Entrada : </p>
                    <p>{{ reserva_atual.horario_entrada }}</p>
                </li>
                <li>
                    <p>Tempo no lugar : </p>
                    <p>{{ reserva_atual.tempo }}</p>
                </li>
            </ul>
            <button id="btn-create" @click="deletar(reserva_atual.id)">Deletar</button>
        </div>
    </div>
</template>
<script>

import { delete_reserva } from '@/api/reserva';

export default {
    props:{
        reserva_atual : Object
    },
    methods: {
        deletar(id){
            delete_reserva(id)
            .then( data => {
                if(data != null){
                    window.location.reload();
                }
                
            });
        },
        close_modal_delete(){
            this.$emit("close_modal_delete", false)
        }
    },
}
</script>
<style lang="scss" scoped>
    @import "@/styles/root.scss";
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
        position: relative;
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
            padding: 0.5em;
            color: #fff;
            opacity: 0.7;
            cursor: pointer;
            border-radius: 5px;
            &:hover{
                opacity: 1;
            }
        }
        #btn-delete{
            background-color: rgb(15, 67, 117);
            position: absolute;
            top: 1%;
            right: 1%;
        }
        #btn-create{
            background-color: rgb(159, 26, 26);
            
        }  
    }
</style>