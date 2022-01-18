<template>
  <div class="home">
     <HeaderWithoutBar/>
    <div class="home-body">
      <div class="backimg">
        <div id="imgfundo"></div>
        <img src="../assets/images/sumer.jpg" alt="imagem do evento" id="imgevento">
       <!--  <img style="width:100%; opacity:0.7; height:500px; background-image: url(:src="../assets/images/nomalanga.png")" alt=""> -->
      <!--  <img style="opacity:0.9;"  src="../assets/images/sumer.jpg" alt=""> -->
      </div>
      <div>
        <!-- {{dados}} -->
        <div class="sing" v-for="(item, index) of dados" :key="index.id" >
            <!-- <div v-for="(song, index) in dados.titulo" :key="index.id"> -->
                <div v-if="index >= 15">
                  <div class="container">
                    <div class="row">
                      <div class="col" id="evento">
                        <div>
                          <br><h4>Paragem obrigatória</h4>
                          12/12/19993 <br><br>
                        </div>
                        <div>
                          <h5>Descrição do evento</h5>
                          {{item}}
                        </div>
                        <div>
                          <mdb-google-map
                            name="reg"
                            class="col-md-12"
                            style=" height: 500px"
                            :zoom="14"
                            :center="[{
                              latitude: -40.725118,
                              longitude: -40.997699
                            }]">
                          </mdb-google-map>
                        </div>
                      </div>
                      <div class="col">
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div>
      </div>
    </div>
    <MusikadaFooter />
  </div>
</template>

<script>

import MusikadaFooter from "@/components/Footer/MusikadaFooter.vue";
import HeaderWithoutBar from "@/components/Header/HeaderWithoutBar.vue"
import DataModel from "../model/DataModel"
import  {mdbGoogleMap}  from 'mdbvue';

export default {
  name: "CiphersView",
  components: {
    MusikadaFooter,
    HeaderWithoutBar,
    mdbGoogleMap
    
    
  },
  data() {
      return {
        dados:[]
      }
    },

    async created() {
      this.dados = await DataModel.get();

    },
};
</script>

<style scoped>
/* .home-body {
   display: flex;
  flex-direction: row;
  text-align: center; 
} */

/* .backimg {
  opacity: 0.5; 
  justify-content: center;
  align-items: center;
  
} */

#imgfundo{
        background-image: url("../assets/images/nomalanga.png");
        width: 100%;
        height: 400px;
        border-bottom: 1px solid black;    
        opacity: 0.4;
    }
    #imgevento{
        position: absolute;
        width: 40%;
        height: 400px;
        margin-top: -400px;
        margin-left: 30%;
    }

    #evento {
      float: left;
      padding: 0;
      margin: 0;
      width: 50%;
    }

</style>
