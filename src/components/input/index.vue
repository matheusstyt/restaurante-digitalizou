<template>
    <div class="input-field">
        <p>{{label}}:</p>
        <div class="input-box">
            <img class="ico-input" :src="src">
            <input spellcheck="false" type="text" placeholder="Insira o {{label}}" v-model="text_input_local">
        </div>
    </div>
</template>
<script>
import "./input.scss";
export default {
    props : {
        label : String,
        text_input : String,
        src : String
    },
    data () {
        text_input_local : ""
    },
    mounted () {
        console.log(this.label)
        console.log(this.text_input)
        console.log(this.src)
    },  
    watch : {
        text_input_local ( value ) { 
            this.$emit("new_value", value)
        }
    }
}
</script>
