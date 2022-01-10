<template>
  <div class="home">
    <Header/>
    <div class="home-body">
      <div class="topSinger">
        <div class="topSing">
          <TopSinger />
        </div>
        <div class="topNote">
          <!-- <TopEvents /> -->
            <TopNote />
        </div>
      </div>
      <div class="topEventos">
         <!-- <TopEvents /> -->
          <!-- <Slick /> -->
          <SlickTeste />
      </div>
    </div>
    <TopVideos />
    <MusikadaFooter />
  </div>
</template>

<script>

import TopVideos from "@/components/TopVideos.vue";
import MusikadaFooter from "@/components/MusikadaFooter.vue";
/* import Slick from "@/components/Slick.vue" */
import TopSinger from "@/components/TopSinger.vue"
import TopNote from "@/components/TopNote.vue"
import Header from "@/components/Header.vue"
import SlickTeste from "@/components/SlickTeste.vue"


export default {
  name: "Home",
  components: {
    MusikadaFooter,
    TopVideos,
    /* Slick, */
    TopSinger,
    TopNote, 
    Header, 
    SlickTeste
    
    
  },
  data() {
      return {
      }
    }
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
