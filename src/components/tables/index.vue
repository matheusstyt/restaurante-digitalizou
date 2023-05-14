<template>
  <main class='container-table'>
      <ul>
        <template v-for="(table, index) in tables_local">
          <template v-if="table.isEmpty">
            <li :key="table.id" class="table-card" :style="`{ backgroundColor : ${ table.color_status }`">
              <p> {{table.number}}</p>
              <h3>Desocupado</h3>
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
  export default {
      props : {
        tables : Array
      },
      mounted () {
        console.log(this.tables)
        this.tables_local = this.tables;
      },
      data() {
        return{
          tables_local : []
        }
      },
      methods : {
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