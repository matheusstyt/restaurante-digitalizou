<template>
  <div class="home">
    <Tables :tables="tables_list"> </Tables>
    <Historic :list_requests="list_requests"></Historic>
  </div>
</template>

<script>
import Tables from "@/components/tables";
import Historic from "@/components/historic";
import tables_json from "@/assets/json/tables.json"
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
  mounted() {
    this.tables_list = tables_json.tables;
    console.log(this.tables_list)
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