<template>
    <form id="form-singup" @submit="enviar_usuario">
        <h3>Registrar</h3>
        <div class="input-field">
            <p >Nome:</p>
            <div class="input-box">
                <input spellcheck="false" type="text" placeholder="Insira o nome" id="nome" v-model="nome">
            </div>
        </div>
        <div class="input-field">
            <p >Email:</p>
            <div class="input-box">
                <img src="@/assets/ico/email.svg" alt="ícone de carta">
                <input spellcheck="false" type="email" placeholder="Insira o email" id="email_singup" v-model="email">
            </div>
        </div>
        <div class="input-field">
            <p >Senha:</p>
            <div class="input-box">
                <img spellcheck="false" src="@/assets/ico/password.svg" alt="ícone de chave">
                <input type="password" id="senha_singup" placeholder="Insira a senha" v-model="senha">
            </div>
        </div>
        <input type="submit" value="Cadastrar">
    </form>
</template>

<script>

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import { post_usuario } from "@/api/usuario";
import Field from "@/components/input";

export default {
    components : {
        
    },
    data() {
        return {
            nome : "",
            email : "",
            senha : ""
        }
    },
    methods: {
        isObject(variable) {
            return Object.prototype.toString.call(variable) === '[object Object]';
        },
        clean_input(){
            this.nome = null;
            this.email = null;
            this.senha = null;
        },
        enviar_usuario(e){
            const body_usuario = {
                nome : this.nome,
                email : this.email,
                senha : this.senha,
                administrador : "true"
            }
            post_usuario(body_usuario)
            .then( data => {
                if(this.isObject(data)){
                    sessionStorage.setItem("user_id", data.id);
                    sessionStorage.setItem("user_email", data.email);
                    toast(data.message, {
                        autoClose: 1000, onClose:()=> window.location.replace("/")
                    }); 
                }else{
                    toast(data, {
                        autoClose: 1000, onClose:()=> this.clean_input()
                    }); 
                }
                console.log(data);
            })
            e.preventDefault();
        }
    }
}
</script>
<style lang="scss">
    @import "./singup.scss";
</style>