<template>
  <main class='container-table'>
      <ModalRequest v-if="modal_deletar"  :reserva_atual="reserva_atual" @close_modal_delete="close_modal_delete"></ModalRequest>

      <Modal v-if="modal_create" :table_number="table_now" @close_modal="close_modal"></Modal>
      <div class="table-title">
        <h2>Mapa de Mesas</h2>
        <h2>Horário : {{ horario_real_referencia }}</h2>
        <div style="display : flex; gap: 1em; align-items: center;" >
          <h3>Filtrar:</h3>
          <input type="datetime-local" @change="filtrar_horario" v-model="horario_real_referencia"/>
          <!-- <button class="btn-filter" @click="filtrar_horario">Filtrar</button> -->
        </div>
        
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
              <button @click="desocupar(table.status)">Desocupar</button>
            </div>
            
          </li>
          </template>
          
        </template>
      </ul>
  </main>
</template>
<script>
  import { formatar_data, parse_tempo, horario_formatado } from "@/api/time";
  import { get_reservas } from "@/api/reserva";
  import { rows_list_table } from "@/json/list_table.json";
  import "./tables.scss";
  import Modal from "@/components/modal_create_reserva"
  import ModalRequest from '@/components/modal_delete_reserva';


  export default {
    components : {
      Modal, ModalRequest
    },
      mounted () {
        this.list_table = rows_list_table;
        this.carregar_reservas();
        const now = horario_formatado();

        this.now = now;
        setTimeout(() => {
          this.now = now;
        }, 60000);
      },
      data() {
        return{
          horario_real_referencia : formatar_data(new Date()),
          list_table : null,
          modal_deletar : false,
          modal_create : false,
          tables_local : [],
          table_now : null,
          now : "",
          cor_desocupado : "#69C3ED",
          cor_ocupado : "#ED7369"
        }
      },
      methods : {
        filtrar_horario(){
          this.carregar_reservas()
        },
        close_modal_delete(value){
          this.modal_deletar = value;
        },
        mesa_ocupada(reserva, horario_entrada, horario_saida){      
          const horario_agora = new Date(this.horario_real_referencia);
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
                    horario_entrada.getTime() + parse_tempo(reserva.tempo),
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
          this.modal_create = value
        },
        open_modal_empy(table){
          this.table_now = table.table_id;
          this.modal_create = true;
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