<template>
    <form >
        <Field ></Field>
        
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