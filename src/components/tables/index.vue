<template>
  <main class='container-table'>
      <Modal v-if="isModal" :table="table_now" @close_modal="close_modal"></Modal>
      <ul>
        <template v-for="(table, index) in tables">
          <template v-if="table.isEmpty">
            <li :key="table.id" class="table-card" :style="`{ backgroundColor : ${ table.color_status }`" @click="open_modal_empy(table)">
              <p> {{table.number}}</p>
              <h3 class="isEmpty">Desocupado</h3>
            </li>
            
          </template>
          
          <template v-else>
            <li :key="table.id" class='table-card' style="`{ backgroundColor : ${ table.color_status }`"> 
            <p id='number'>{{table.number}}</p>
            <h3>Cliente: {{table.cliente.nome}}</h3>
            <h4>Refeição: {{table.cliente.refeicao}}</h4>
            <h4>{{table.horario}}</h4>
            <div class="content-button">
              <button @click="liberar_mesa(table.id)"> Liberar Mesa</button>
              <button @click="alterar_status(table.status)">{{table.status}}</button>
            </div>
            
          </li>
          </template>
          
        </template>
      </ul>
  </main>
</template>
<script>
  import "./tables.scss";
  import Modal from "./modal"
  export default {
    components : {
      Modal
    },
      props : {
        tables : Array
      },
      created () {

        this.tables_local = this.tables;
      },
      data() {
        return{
          isModal : false,
          tables_local : [],
          table_now : null
        }
      },
      methods : {
        close_modal (value){
          this.isModal = value
        },
        open_modal_empy(table){
          this.table_now = table;
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