<template>
  <div class="home">
     <HeaderWithoutBar/>
    <div class="home-body">
      <!-- <h2>Enviar Cifras</h2> -->
      <CipherRegister/> 
    </div>
    <!-- <TopVideos /> -->
    <MusikadaFooter />
  </div>
</template>

<script>

/* import TopVideos from "@/components/TopVideos.vue"; */
import MusikadaFooter from "@/components/MusikadaFooter.vue";
import HeaderWithoutBar from "@/components/HeaderWithoutBar.vue"
import CipherRegister from "@/components/CipherRegister.vue"


export default {
  name: "CiphersView",
  components: {
    MusikadaFooter,
    /* TopVideos, */
    HeaderWithoutBar,
    CipherRegister
    
    
  },
  data() {
      return {
      }
    }
};
</script>

<style scoped>
/* .home-body {
  display: flex;
  flex-direction: row;
  text-align: center;
} */
/* .topEventos{
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
} */


</style>
