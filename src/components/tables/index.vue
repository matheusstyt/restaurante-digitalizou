<template>
  <main class='container-table'>
      <Modal v-if="isModal" :table="table_now" @close_modal="close_modal"></Modal>
      <div class="table-title">
        <h2>Mapa de Mesas</h2>
        <h2>Horário : {{ now }}</h2>
      </div>
      
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
  import Modal from "@/components/modal"
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
      mounted () {
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
          isModal : false,
          tables_local : [],
          table_now : null,
          now : ""
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