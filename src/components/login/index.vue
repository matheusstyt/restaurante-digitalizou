<template>
    <form id="form-login" @submit="enviar_usuario">
        <h2>RESTAURANTE DIGITALIZOU</h2>
        <h3>Acessar o sistema</h3>
        <div class="input-field">
            <p >Email:</p>
            <div class="input-box">
                <img src="@/assets/ico/email.svg" alt="ícone de carta">
                <input spellcheck="false" type="email" placeholder="Insira o email" id="email" v-model="email">
            </div>
        </div>
        <div class="input-field">
            <p >Senha:</p>
            <div class="input-box">
                <img spellcheck="false" src="@/assets/ico/password.svg" alt="ícone de chave">
                <input type="password" id="senha" placeholder="Insira a senha" v-model="senha">
            </div>
        </div>
        <input type="submit" value="Entrar">
    </form>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import { validar_usuario } from "@/api/usuario";
import Field from "@/components/input";
export default {
    components : {
        Field
    },
    data() {
        return {
            email : null,
            senha : null
        }
    },
    methods: {
        isObject(variable) {
            return Object.prototype.toString.call(variable) === '[object Object]';
        },
        clean_input(){
            this.email = null;
            this.senha = null;
        },
        enviar_usuario(e){
            e.preventDefault();
            const body_usuario = {
                email : this.email,
                senha : this.senha
            }
            validar_usuario(body_usuario)
            .then( data => {
                if(data.user){
                    sessionStorage.setItem("user_id", data.user.id);
                    sessionStorage.setItem("user_email", data.user.email);

                    toast(data.message, {
                        autoClose: 1000, onClose:()=> window.location.replace("/")
                    }); 
                }else{
                    toast(data.message, {
                        autoClose: 1000, onClose:()=> this.clean_input()
                    }); 
                }   
                console.log(data)
            })
        }
    }
}
</script>
<style lang="scss">
    @import "./login.scss";
</style>