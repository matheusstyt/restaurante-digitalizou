<template>
  <div class="home">
    <Tables :tables="tables_list"> </Tables>
    <Historic :list_requests="list_requests"></Historic>
  </div>
</template>

<script>
import Tables from "@/components/tables";
import Historic from "@/components/historic";

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

      tables_list : [
      {
        id : 1,
        isEmpty : false,
        number : 1,
        cliente : {
          nome : "Fulano",
          refeicao : " x salada + refri"
        },
        horario : "13-05-2023 22:14"
      },
      {
        id : 2,
        isEmpty : false,
        number : 2,
        cliente : {
          nome : "Fulano",
          refeicao : " x salada + refri"
        },
        horario : "13-05-2023 22:14"
      },
      {
        id : 3,
        isEmpty : false,
        number : 3,
        cliente : {
          nome : "Fulano",
          refeicao : " x salada + refri"
        },
        horario : "13-05-2023 22:14"
      },
      {
        id : 4,
        isEmpty : false,
        number : 4,
        cliente : {
          nome : "Fulano",
          refeicao : " x salada + refri"
        },
        horario : "13-05-2023 22:14"
      },
      {
        id : 5,
        isEmpty : false,
        number : 5,
        cliente : {
          nome : "Fulano",
          refeicao : " x salada + refri"
        },
        horario : "13-05-2023 22:14"
      },
      {
        id : 6,
        isEmpty : false,
        number : 6,
        cliente : {
          nome : "Fulano",
          refeicao : " x salada + refri"
        },
        horario : "13-05-2023 22:14"
      },
      {
        id : 7,
        isEmpty : false,
        number : 7,
        cliente : {
          nome : "Fulano",
          refeicao : " x salada + refri"
        },
        horario : "13-05-2023 22:14"
      },
      {
        id : 8,
        isEmpty : false,
        number : 8,
        cliente : {
          nome : "Fulano",
          refeicao : " x salada + refri"
        },
        horario : "13-05-2023 22:14"
      },
      {
        id : 9,
        isEmpty : false,
        number : 9,
        cliente : {
          nome : "Fulano",
          refeicao : " x salada + refri"
        },
        horario : "13-05-2023 22:14"
      },
      {
        id : 10,
        isEmpty : false,
        number : 10,
        cliente : {
          nome : "Fulano",
          refeicao : " x salada + refri"
        },
        horario : "13-05-2023 22:14"
      },
      {
        id : 11,
        isEmpty : false,
        number : 11,
        cliente : {
          nome : "Fulano",
          refeicao : " x salada + refri"
        },
        horario : "13-05-2023 22:14"
      },
      {
        id : 12,
        isEmpty : false,
        number : 12,
        cliente : {
          nome : "Fulano",
          refeicao : " x salada + refri"
        },
        horario : "13-05-2023 22:14"
      },
      {
        id : 13,
        isEmpty : false,
        number : 13,
        cliente : {
          nome : "Fulano",
          refeicao : " x salada + refri"
        },
        horario : "13-05-2023 22:14"
      },
      {
        id : 14,
        isEmpty : false,
        number : 14,
        cliente : {
          nome : "Fulano",
          refeicao : " x salada + refri"
        },
        horario : "13-05-2023 22:14"
      },
      {
        id : 15,
        isEmpty : false,
        number : 15,
        cliente : {
          nome : "Fulano",
          refeicao : " x salada + refri"
        },
        horario : "13-05-2023 22:14"
      }
    ]
    }
  },
  mounted() {
    console.log(this.tables_list)
  }
}
</script>
<style lang="scss" scoped>
.home{
  display: flex;
  justify-content: space-evenly
}
</style>