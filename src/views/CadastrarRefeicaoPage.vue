<template>
    <div class="content-refeicao">
        <form>
            <Field
                label="Descrição da refeição"
                :text_input="descricao_refeicao"
                :required="true"
                type="text">
            </Field>
            <Field
                label="Preço"
                :text_input="cliente"
                type="number">
            </Field>
            <Field
                label="Cliente"
                :text_input="cliente"
                :required="true"
                type="text">
            </Field>
            <Field
                label="Cliente"
                :text_input="cliente"
                :required="true"
                type="text">
            </Field>
        </form>
    </div>
</template>
<script>
import Field from "@/components/input";

export default {
    components : {
        Field
    }
}
</script>