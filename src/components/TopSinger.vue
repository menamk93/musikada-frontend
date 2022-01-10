<template>
    <div>
        <div class="singer">
            <div>
                <img style="width: 100px; float: left; padding-left: 10px" :src="dados[9].image" fluid alt="Responsive image" />
            </div>
            <div class="singerData">
                <ul>
                    <li>{{ dados[9].name }}</li>
                    <li style="color:#f0833b">{{ dados[9].titulo[1] }}</li>
                    <li>Tom-C</li>
                </ul> 
            </div>
        </div>
       <div class="sing" v-for="(item, index) of dados" :key="index.id" >
            <!-- <div v-for="(song, index) in dados.titulo" :key="index.id"> -->
                <div v-if="index === 9">
                    <ul>
                        <li>1 - {{item.titulo[1]}} </li>
                        <li>2 - {{item.titulo[2]}} </li>
                        <li>3 - {{item.titulo[3]}} </li>
                        <li>4 - {{item.titulo[4]}} </li>
                    </ul>
           <!--  </div> -->
           </div>
        </div>
    </div>
</template>

<script>

/* import axios from "axios" */
import DataModel from "../model/DataModel"

export default {
    name: 'TopSinger',
    data(){
        return {
            dados:[],
        };
    },

    /* async created() {
        try {
        const res = await axios.get("http://localhost:3000/dados");

        this.dados = res.data;
        
        } catch (e) {
        console.error(e); 
        }
    } */

       async created() {
      this.dados = await DataModel.get();

    },

}
</script>

<style scoped>

.singerData {
    float: left;
    padding-left: 10px;
    padding-top: 10px;
    text-align: initial;
    
}

.sing {
    float: left;
    padding-left: 10px;
    padding-top: 10px;
    text-align: initial;
    
}

ul li {
    list-style-type: none;
     
}

</style>>