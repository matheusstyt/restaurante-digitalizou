<template>
  <main class='container-table'>
      <Modal v-if="isModal" :table_number="table_now" @close_modal="close_modal"></Modal>
      <div class="table-title">
        <h2>Mapa de Mesas</h2>
        <h2>Horário : {{ now }}</h2>
      </div>
      
      <ul>
        <template v-for="(table, index) in list_table">
          <template v-if="!table.ocupado">
            <li :key="table.table_id" class="table-card" :style="{ backgroundColor : cor_desocupado}" @click="open_modal_empy(table)">
              <p> {{table.table_id}}</p>
              <h3 class="isEmpty">Desocupado</h3>
            </li>
            
          </template>
          
          <template v-else>
            <li  class='table-card' :style="{ backgroundColor : cor_ocupado }"> 
            <p id='number'>{{table.table_id}}</p>
            <h3>Cliente: {{table.data.cliente_name}}</h3>
            <h4>Horário entrada: {{table.data.horario_entrada}}</h4>
            <div class="content-button">
              <!-- <button @click="liberar_mesa(table.id)"> Liberar Mesa</button> -->
              <button @click="alterar_status(table.status)">Desocupar</button>
            </div>
            
          </li>
          </template>
          
        </template>
      </ul>
  </main>
</template>
<script>
  import { get_reservas } from "@/api/reserva";
  import { rows_list_table } from "@/json/list_table.json"
  import "./tables.scss";
  import Modal from "@/components/modal"
  export default {
    components : {
      Modal
    },
      mounted () {
        this.list_table = rows_list_table;
        this.carregar_reservas();
        function horario_formatado() {
          const now = new Date();
          const day = now.getDate().toString().padStart(2, '0');
          const month = (now.getMonth() + 1).toString().padStart(2, '0');
          const year = now.getFullYear();
          const hours = now.getHours().toString().padStart(2, '0');
          const minutes = now.getMinutes().toString().padStart(2, '0');

          const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;
          return formattedDate;
        }

        const now = horario_formatado();

        this.now = now;
        setTimeout(() => {
          this.now = now;
        }, 60000);
      },
      data() {
        return{
          list_table : null,
          isModal : false,
          tables_local : [],
          table_now : null,
          now : "",
          cor_desocupado : "#69C3ED",
          cor_ocupado : "#ED7369"
        }
      },
      methods : {
        formatar_data(date) {
          const year = date.getFullYear();
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const day = String(date.getDate()).padStart(2, '0');
          const hours = String(date.getHours()).padStart(2, '0');
          const minutes = String(date.getMinutes()).padStart(2, '0');

          return `${year}-${month}-${day} ${hours}:${minutes}`;
        },
        parse_tempo(tempo) {
          const partesTempo = tempo.split(':');
          const horas = parseInt(partesTempo[0], 10);
          const minutos = parseInt(partesTempo[1], 10);

          return (horas * 60 + minutos) * 60 * 1000;
        },
        mesa_ocupada(reserva, horario_entrada, horario_saida){      
          const horario_agora = new Date();
          return [(horario_agora >= horario_entrada && horario_agora < horario_saida), reserva];
        },
        carregar_reservas(){
          get_reservas()
          .then( async reservas => {
            reservas.forEach(reserva => {
                this.list_table.forEach(mesa => {
                  if(reserva.mesa === mesa.table_id){
                    const horario_entrada = new Date(reserva.horario_entrada);
                    const horario_saida = new Date(
                    horario_entrada.getTime() + this.parse_tempo(reserva.tempo),
                    );
                    var [ocupado, quem] = this.mesa_ocupada(reserva, horario_entrada, horario_saida);
                      mesa['ocupado'] = ocupado;
                    // caso esteja ocupado no de acordo com horário atual
                    // irá adicionar o objeto da vez
                    if(ocupado){
                      mesa['data'] = quem;
                    }           
                  }
                });
              });
          })
          console.log(this.list_table)
        }, 
        close_modal (value){
          this.isModal = value
        },
        open_modal_empy(table){
          this.table_now = table.table_id;
          this.isModal = true;
        },
        alterar_status () {
          this.$emit('update_status')
        },
        liberar_mesa (id){
          this.$emit("liberar_mesa", id)
        }
      },
      watch : {
        tables_local(value){
          this.$emit('update_table', value)
        }
      }
    
  }
</script>