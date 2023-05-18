<template>
    <div class="input-field">
        <p>{{label}}:</p>
        <div class="input-box">
            <img v-if="src" class="ico-input" :src="src">
            <input
            min="0"
            step="0.01"
            
            :required="required" 
            spellcheck="false" 
            :type="type" 
            :placeholder="placeholder" 
            v-model="text_input_local">
        </div>
    </div>
</template>
<script>
import "./input.scss";
export default {
    props: {
        label: String,
        text_input: String,
        src: {
            type: String,
            default: null
        },
        type: {
            type: String,
            default: "text"
        },
        required: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: "Escreva.."
        }
    },
    data () {
        return {
            text_input_local : ""
        }
    },
    mounted () {
    },  
    watch : {
        text_input_local ( value ) { 
            this.$emit("new_value", value)
        }
    }
}
</script>
