<template>
  <div class="home">
    <Tables :tables="tables_list"> </Tables>
    <Historic :list_requests="list_requests"></Historic>
  </div>
</template>

<script>
import Tables from "@/components/table_map";
import Historic from "@/components/historic";
import tables_json from "@/json/map_table.json"
export default {
  name: 'HomeView',
  components: {
    Tables, Historic
  },
  data ( ){
    return{
      list_requests : [
        {
          id : 1,
          isEmpty : false,
          table_number : 1,
          cliente : {
            nome : "Fulano",
            refeicao : " x salada + refri"
          },
          horario : "13-05-2023 22:14"
        }
      ],

      tables_list : Array
    }
  },
  methods: {
    
  },
  mounted() {
    this.tables_list = tables_json.tables;

  }
}
</script>
<style lang="scss" scoped>
.home{
  display: flex;
  height: 86vh;
  padding-top: 2vmax;
  justify-content: space-evenly;
}
</style>