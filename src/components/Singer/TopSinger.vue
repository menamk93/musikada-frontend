<template>
    <div>
        <div v-if="teste != true">
            <div class="singer">
                <div>
                    <img style="width: 100px; float: left; padding-left: 10px" :src="dados[0].image" fluid alt="Responsive image" />
                </div>
                <div class="singerData">
                    <ul>
                        <li>{{ dados[0].name.toUpperCase()}}</li>
                        <!-- <li style="color:#f0833b">{{ dados[0].titulo.first.title}}</li> -->
                        <li>Tom-C</li>
                    </ul> 
                </div>
            </div>
            <div class="sing" v-for="(dado, index) of dados" :key="index.id" >
                <!-- <div v-for="(song, index) in dados.titulo" :key="index.id"> -->
                <div v-if="index === 0">
                    <ul>
                        <li>1 - {{dado.titulo.first.title}} </li>
                        <li>2 - {{dado.titulo[2]}} </li>
                        <li>3 - {{dado.titulo[3]}} </li>
                        <li>4 - {{dado.titulo[4]}} </li>
                    </ul>
                </div>
            </div>
        </div>
        <div v-else >            
            <div class="singer" v-for="(data, index) in dataReceivedFromHeader" :key="index.id">
                <div>
                   <img style="width: 88px; float: left; padding-left: 10px" :src="data.image[index].toUpperCase() + data.image.substr(1)" fluid alt="Responsive image" />
                </div>
                <div class="singerData">
                    <ul>
                        <li>{{ data.name[index].toUpperCase() + data.name.substr(1) }}</li>
                        <!-- <div v-for="(title, index) in data.titulo" :key="index.id"> -->
                        <li style="color:#f0833b">{{ data.titulo.first.title}}</li>
                        <!-- </div> -->
                        <li>Tom-C</li>
                    </ul> 
                </div>
                <div class="sing">
                    <div v-for="(titre, index1) in dataReceivedFromHeader" :key="index1.id">
                        <div>
                            <!-- <h4>Estrofe 1</h4> -->
                            {{titre.titulo.first.letra.estrofe1}}
                        </div><br>
                        <div>
                            <h5>Refrão</h5>
                            {{titre.titulo.first.letra.refrao}}
                        </div><br>
                        <div>
                            <!-- <h4>Estrofe 2</h4> -->
                            {{titre.titulo.first.letra.estrofe2}}
                        </div><br>
                        <div>
                            <!-- <h4>Estrofe 3</h4> -->
                            {{titre.titulo.first.letra.estrofe3}}
                        </div>
                    <div/>
                </div>
            </div>
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
            dataReceivedFromHeader: [],
            teste: false
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
    mounted: function () { 
    this.$root.$on('myEvents', (text) => { // here you need to use the arrow function
      this.dataReceivedFromHeader = text;
      this.teste = true
    })
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