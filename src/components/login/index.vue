<template>
    <form >
        
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
                <input type="email" id="email" placeholder="Insira a senha" v-model="email">
            </div>
        </div>
    </form>
</template>

<script>
import "./login.scss";
import Field from "@/components/input";
export default {
    components : {
        Field
    },
    data() {
        return {
            email : "",
            senha : ""
        }
    }
}
</script>
<style lang="scss">
    .input-field{
    width: 100%;
    padding: 0.5em 0;
    p{
        color: #fff;
        text-align: left;
        padding-bottom: 0.5em;
    }
    .input-box{
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #ffc9a0;
        box-sizing: border-box;
        padding-left: 1em;
        .ico-input{
            padding-left: 1em;
            height: 1em;
            aspect-ratio: 1/1;
        }
        input{
            width: 90%;
            padding-left: 1em;
            background-color: transparent;
            border: none;
            outline: none;
            color: #190b02cb;
            &::placeholder{
                color: #190b02;
            }
        }
    }
}
</style>