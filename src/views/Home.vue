<template>
  <div class="home">
    <Header/>
    <div class="home-body">
      
      <div class="topCipher">
        <h5>Cifras mais tocadas<br><br></h5>
        <TopCiphers />
      </div>
      <div class="topEventos">
         <!-- <TopEvents /> -->
         <!--  <Slick /> -->
          <SlickTeste />
      </div>
    </div>
    <TopVideos />
    <MusikadaFooter />
  </div>
</template>

<script>
import TopCiphers from "@/components/TopCiphers.vue";
import Header from "@/components/Header.vue";
import TopVideos from "@/components/TopVideos.vue";
import MusikadaFooter from "@/components/MusikadaFooter.vue";
/* import Slick from "@/components/Slick.vue" */
import SlickTeste from "@/components/SlickTeste.vue"


export default {
  name: "Home",
  components: {
    TopCiphers,
    MusikadaFooter,
    TopVideos,
    /* Slick,  */
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
.topCipher{
  border-right: 8px;
  margin-top: 30px;
  width: 50%;
  float: left;
  align-items: right;
  
}


</style>
