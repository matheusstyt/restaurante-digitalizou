<template>

    <g-gantt-chart
        style="margin: 0 auto"
        chart-start="2023-05-15 17:00"
        chart-end="2023-05-16 01:00"
        precision="hour"
        bar-start="myBeginDate"
        bar-end="myEndDate"
        width="90%">   
        <template v-for="(item, index) in rows_lists_table">
            <g-gantt-row
            :label="`Mesa ${ item.table_number }`"
            :bars="item.requests"
            />
        </template>
        
    </g-gantt-chart>

</template>
<script>
    import { ref } from "vue"

    export default {

        components : {
        },
        data() {
            return {
                rows_lists_table : ref([
                    {
                        table_number : "01",
                        requests : [
                            {
                                myBeginDate: "2023-05-15 18:00",
                                myEndDate: "2023-05-15 19:00",
                                ganttBarConfig: {    
                                    id: 1, 
                                    label: "Matheus"
                                }
                            },
                            {
                                myBeginDate: "2023-05-15 19:10",
                                myEndDate: "2023-05-15 20:00",
                                ganttBarConfig: {    
                                    id: 2, 
                                    label: "Thomas"
                                }
                            },
                        ]
                    },
                    {
                        table_number : "02",
                        requests : [
                            {
                                myBeginDate: "2023-05-15 18:00",
                                myEndDate: "2023-05-15 19:00",
                                ganttBarConfig: {    
                                    id: 1, 
                                    label: "Matheus"
                                }
                            },
                            {
                                myBeginDate: "2023-05-13 16:00",
                                myEndDate: "2023-05-13 19:00",
                                ganttBarConfig: {    
                                    id: 2, 
                                    label: "Thomas"
                                }
                            },
                        ]
                    },
                    {
                        table_number : "03",
                        requests : [
                            {
                                myBeginDate: "2023-05-15 18:00",
                                myEndDate: "2023-05-15 19:00",
                                ganttBarConfig: {    
                                    id: 1, 
                                    label: "Matheus"
                                }
                            },
                            {
                                myBeginDate: "2023-05-13 16:00",
                                myEndDate: "2023-05-13 19:00",
                                ganttBarConfig: {    
                                    id: 2, 
                                    label: "Thomas"
                                }
                            },
                        ]
                    },
                    {
                        table_number : "04",
                        requests : [
                            {
                                myBeginDate: "2023-05-15 18:00",
                                myEndDate: "2023-05-15 19:00",
                                ganttBarConfig: {    
                                    id: 1, 
                                    label: "Matheus"
                                }
                            },
                            {
                                myBeginDate: "2023-05-13 16:00",
                                myEndDate: "2023-05-13 19:00",
                                ganttBarConfig: {    
                                    id: 2, 
                                    label: "Thomas"
                                }
                            },
                        ]
                    },
                    {
                        table_number : "05",
                        requests : [
                            {
                                myBeginDate: "2023-05-15 18:00",
                                myEndDate: "2023-05-15 19:00",
                                ganttBarConfig: {    
                                    id: 1, 
                                    label: "Matheus"
                                }
                            },
                            {
                                myBeginDate: "2023-05-13 16:00",
                                myEndDate: "2023-05-13 19:00",
                                ganttBarConfig: {    
                                    id: 2, 
                                    label: "Thomas"
                                }
                            },
                        ]
                    },
                    {
                        table_number : "06",
                        requests : [
                            {
                                myBeginDate: "2023-05-15 18:00",
                                myEndDate: "2023-05-15 19:00",
                                ganttBarConfig: {    
                                    id: 1, 
                                    label: "Matheus"
                                }
                            },
                            {
                                myBeginDate: "2023-05-13 16:00",
                                myEndDate: "2023-05-13 19:00",
                                ganttBarConfig: {    
                                    id: 2, 
                                    label: "Thomas"
                                }
                            },
                        ]
                    },
                    {
                        table_number : "07",
                        requests : [
                            {
                                myBeginDate: "2023-05-15 18:00",
                                myEndDate: "2023-05-15 19:00",
                                ganttBarConfig: {    
                                    id: 1, 
                                    label: "Matheus"
                                }
                            },
                            {
                                myBeginDate: "2023-05-13 16:00",
                                myEndDate: "2023-05-13 19:00",
                                ganttBarConfig: {    
                                    id: 2, 
                                    label: "Thomas"
                                }
                            },
                        ]
                    },
                    {
                        table_number : "08",
                        requests : [
                            {
                                myBeginDate: "2023-05-15 18:00",
                                myEndDate: "2023-05-15 19:00",
                                ganttBarConfig: {    
                                    id: 1, 
                                    label: "Matheus"
                                }
                            },
                            {
                                myBeginDate: "2023-05-13 16:00",
                                myEndDate: "2023-05-13 19:00",
                                ganttBarConfig: {    
                                    id: 2, 
                                    label: "Thomas"
                                }
                            },
                        ]
                    },
                    {
                        table_number : "09",
                        requests : [
                            {
                                myBeginDate: "2023-05-15 18:00",
                                myEndDate: "2023-05-15 19:00",
                                ganttBarConfig: {    
                                    id: 1, 
                                    label: "Matheus"
                                }
                            },
                            {
                                myBeginDate: "2023-05-13 16:00",
                                myEndDate: "2023-05-13 19:00",
                                ganttBarConfig: {    
                                    id: 2, 
                                    label: "Thomas"
                                }
                            },
                        ]
                    },
                    {
                        table_number : "10",
                        requests : [
                            {
                                myBeginDate: "2023-05-15 18:00",
                                myEndDate: "2023-05-15 19:00",
                                ganttBarConfig: {    
                                    id: 1, 
                                    label: "Matheus"
                                }
                            },
                            {
                                myBeginDate: "2023-05-13 16:00",
                                myEndDate: "2023-05-13 19:00",
                                ganttBarConfig: {    
                                    id: 2, 
                                    label: "Thomas"
                                }
                            },
                        ]
                    },
                    {
                        table_number : "11",
                        requests : [
                            {
                                myBeginDate: "2023-05-15 18:00",
                                myEndDate: "2023-05-15 19:00",
                                ganttBarConfig: {    
                                    id: 1, 
                                    label: "Matheus"
                                }
                            },
                            {
                                myBeginDate: "2023-05-13 16:00",
                                myEndDate: "2023-05-13 19:00",
                                ganttBarConfig: {    
                                    id: 2, 
                                    label: "Thomas"
                                }
                            },
                        ]
                    },
                    {
                        table_number : "12",
                        requests : [
                            {
                                myBeginDate: "2023-05-15 18:00",
                                myEndDate: "2023-05-15 19:00",
                                ganttBarConfig: {    
                                    id: 1, 
                                    label: "Matheus"
                                }
                            },
                            {
                                myBeginDate: "2023-05-13 16:00",
                                myEndDate: "2023-05-13 19:00",
                                ganttBarConfig: {    
                                    id: 2, 
                                    label: "Thomas"
                                }
                            },
                        ]
                    },
                    {
                        table_number : "13",
                        requests : [
                            {
                                myBeginDate: "2023-05-15 18:00",
                                myEndDate: "2023-05-15 19:00",
                                ganttBarConfig: {    
                                    id: 1, 
                                    label: "Matheus"
                                }
                            },
                            {
                                myBeginDate: "2023-05-13 16:00",
                                myEndDate: "2023-05-13 19:00",
                                ganttBarConfig: {    
                                    id: 2, 
                                    label: "Thomas"
                                }
                            },
                        ]
                    },
                    {
                        table_number : "14",
                        requests : [
                            {
                                myBeginDate: "2023-05-15 18:00",
                                myEndDate: "2023-05-15 19:00",
                                ganttBarConfig: {    
                                    id: 1, 
                                    label: "Matheus"
                                }
                            },
                            {
                                myBeginDate: "2023-05-13 16:00",
                                myEndDate: "2023-05-13 19:00",
                                ganttBarConfig: {    
                                    id: 2, 
                                    label: "Thomas"
                                }
                            },
                        ]
                    },
                    {
                        table_number : "15",
                        requests : [
                            {
                                myBeginDate: "2023-05-15 18:00",
                                myEndDate: "2023-05-15 19:00",
                                ganttBarConfig: {    
                                    id: 1, 
                                    label: "Matheus"
                                }
                            },
                            {
                                myBeginDate: "2023-05-13 16:00",
                                myEndDate: "2023-05-13 19:00",
                                ganttBarConfig: {    
                                    id: 2, 
                                    label: "Thomas"
                                }
                            },
                        ]
                    },

                ]),

                mesa_1 : ref([
                    {
                        myBeginDate: "2021-07-13 13:00",
                        myEndDate: "2021-07-13 19:00",
                        ganttBarConfig: {    
                            id: 1, 
                            label: "Lorem ipsum dolor"
                        }
                    }
                ])

            }
        },
        methods : {

        },

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