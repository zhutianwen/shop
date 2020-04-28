<template>
    <div class="detailitemParams" v-if="Object.keys(itemParams).length !==0">
            <table class="table1" v-for="(table,index) in itemParams.rule.tables" :key="index">
                <tr class="tr1" v-for="(tr,indey) in table" :key="indey">
                    <td class="td1" v-for="(td,indez) in tr" :key="indez">{{td}}</td>
                </tr>
            </table>

        <table class="table2" v-for="(info,index) in itemParams.info.set">
            <tr>
                <td class="td2">{{info.key}}</td>
                <td class="td3">{{info.value}}</td>
            </tr>
        </table>  

        <!-- <div v-if="itemParams.image.length !==0">
            <img :src="itemParams.image" alt="">
        </div>   -->
    </div>
</template>

<script>
export default {
    name:'detailitemParams',
    props:{
        itemParams:{
            tyape:Object,
            default(){
                return {}
            }
        }
    },
}
</script>

<style>
    .detailitemParams{
        width: 98%;
        margin: 0 auto;
        margin-top: 0.4rem;
        border-bottom: 0.042rem solid #efe9d4;
        padding-bottom: 0.8rem;
    }
    .table1{
        font-size: 0.4rem;
        width: 100%;
        text-align: center;
        border-collapse: collapse;
    }
    .table2{
        font-size: 0.4rem;
        width: 100%;
        border-collapse: collapse;
    }
    .table2 tr{
        width: 100%;
    }
    .td1{
        width: 20%;
        border-bottom:1px solid  #cccccc;
        padding: 0.2rem 0 0.2rem 0;
    }
   .td2{
        width: 20%;
        text-align: center;
        border-bottom:1px solid  #cccccc;
        padding: 0.2rem 0 0.2rem 0;
   }
   .td3{
        width: 80%;
        text-align: center;
        border-bottom:1px solid  #cccccc;
        padding: 0.2rem 0 0.2rem 0;
   }
</style>

