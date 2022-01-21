<template>
  <div class="home">
    <HeaderSinger/>
    <div class="home-body">
      <div class="topSinger">
        <div class="topSing">
          <TopSinger />
        </div>
        <div class="topNote">
          <!-- <TopEvents /> -->
            <TopNote />
            <!-- {{teste}} -->
            <div v-for="(data, index) in dataReceivedFromHeader" :key="index.id">{{data.name[0].toUpperCase() + data.name.substr(1)}}</div>
        </div>
      </div>
      <div class="topEventos">
         <!-- <TopEvents /> -->
          <Carousel />
      </div>
    </div>
    <TopVideos />
    <MusikadaFooter />
  </div>
</template>

<script>

import TopVideos from "@/components/Videos/TopVideos.vue";
import MusikadaFooter from "@/components/Footer/MusikadaFooter.vue";
import TopSinger from "@/components/Singer/TopSinger.vue"
import TopNote from "@/components/Note/TopNote.vue"
import HeaderSinger from "@/components/Header/HeaderSinger.vue"
import Carousel from "@/components/Carousel/Carousel.vue"


export default {
  name: "Home",
  components: {
    MusikadaFooter,
    TopVideos,
    TopSinger,
    TopNote, 
    HeaderSinger, 
    Carousel
    
  },
  data() {
      return {
        dataReceivedFromHeader:[]
      }
    },
     mounted: function () { 
    this.$root.$on('myEvents', (text) => { // here you need to use the arrow function
      //this.modalShow = text;
      this.dataReceivedFromHeader = text;
      /* console.log(this.dados) */
    })
  }, 
};
</script>

<style scoped>
.home-body {
  display: flex;
  flex-direction: row;
  text-align: center;
}
.topEventos{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 50px;
}
.topEventos {
  width: 50%;
  float: right;
  border-left: 1px solid #000;
}
.topSinger{
  border-right: 8px;
  margin-top: 30px;
  width: 50%;
  float: left;
  align-items: right;
  
}

.topNote{
  width: 50%;
  float: right;
  border-left: 1px solid #000;
  
}

.topSing{
  border-right: 8px;
  /* margin-top: 30px; */
  width: 50%;
  float: left;
  align-items: right;
 
  
}


</style>
