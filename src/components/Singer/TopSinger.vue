<template>
    <div>
        <div class="singer">
            <div>
                <img style="width: 100px; float: left; padding-left: 10px" :src="dados[0].image" fluid alt="Responsive image" />
            </div>
            <div class="singerData">
                <ul>
                    <li>{{ dados[0].name }}</li>
                    <li style="color:#f0833b">{{ dados[0].titulo[1] }}</li>
                    <li>Tom-C</li>
                </ul> 
            </div>
        </div>
       <div class="sing" v-for="(dado, index) of dados" :key="index.id" >
            <!-- <div v-for="(song, index) in dados.titulo" :key="index.id"> -->
                <div v-if="index === 0">
                    <ul>
                        <li>1 - {{dado.titulo[1]}} </li>
                        <li>2 - {{dado.titulo[2]}} </li>
                        <li>3 - {{dado.titulo[3]}} </li>
                        <li>4 - {{dado.titulo[4]}} </li>
                    </ul>
           <!--  </div> -->
           </div>
        </div>
    </div>
</template>

<script>

/* import axios from "axios" */
import SingerModel from "../../model/SingerModel"

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
      this.dados = await SingerModel.get();

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