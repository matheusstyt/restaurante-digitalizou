<template>
    
    <g-gantt-chart
        style="margin: 0 auto"
        :chart-start="chart_start"
        :chart-end="chart_end"
        precision="hour"
        bar-start="myBeginDate"
        bar-end="myEndDate"
        width="90%">   
        <template v-for="(item, index) in rows_tables">
            <g-gantt-row
            :label="`Mesa ${ item.table_id }`"
            :bars="item.requests"
            />
        </template>
        
    </g-gantt-chart>

</template>
<script>
  import { formatar_data, parse_tempo, horario_formatado } from "@/api/time";

    import { rows_list_table } from '@/json/list_table.json';
    import { get_reservas} from '@/api/reserva';
    import { ref } from "vue"
    export default {

        components : {
        },
        data() {
            return {
                chart_start : "",
                chart_end: "",
                rows_tables : ref( rows_list_table ),

            }
        },
        methods : {
            // já que o funcionamento do estabelecimento é 18h, 
            // então o gráfico de gantt vai exibir desde 17h para melhor visualização
            // lembrando que isso é a escala de exibição do gantt em horas do dia
            get_hour_start(){
                // visualização do gantt das 17:00 á 1:00
                const horario_funcionamento = "8:00";
                const date = new Date();
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                // atribui a data de hoje e a hora inicial de exibição em 17h
                this.chart_start = `${year}-${month}-${day} 17:00`;
                this.get_hour_end(horario_funcionamento);
            },
            get_hour_end(horario_funcionamento){
                const today = new Date(this.chart_start);
                // atribui a data de hoje e a hora final de exibição em 17h + tempo escolhido
                this.chart_end = `${ formatar_data(new Date( today.getTime() + parse_tempo(horario_funcionamento)) )  }`;
            },
        },
        mounted (){
            this.get_hour_start();
            get_reservas()
            .then( reserva => {
                // loop das mesas, e cada mesa terá um loop das reservas para adicionar ao gantt
                this.rows_tables.forEach(mesa => {
                    reserva.forEach( reserva => {
                        if(reserva.mesa === mesa.table_id){
                            // converter string em data e pegar horario de saída
                            const horario_entrada = new Date(reserva.horario_entrada);
                            const horario_saida = new Date(
                            horario_entrada.getTime() + parse_tempo(reserva.tempo),
                            );
                            mesa.requests.push({
                                myBeginDate: formatar_data(horario_entrada),
                                myEndDate: formatar_data(horario_saida),
                                ganttBarConfig: {
                                    id:reserva.id,
                                    label: reserva.cliente_name
                                }
                            })
                        }
                    })
                }); 
            })
        }
    }
</script>

<style lang="scss">

.g-gantt-bar{
    cursor: pointer;
    border-radius: 1em;
    color: #fff;
    background-color: rgb(45, 100, 228);
    opacity: 0.8;
    &:hover{
        opacity: 1;
    }
}
.g-gantt-row-label {
    top: 0.7em;
    left: 1em;
    cursor: pointer;
 
}
</style>