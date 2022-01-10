<template>
  <div class="home">
     <HeaderWithoutBar/>
    <div class="home-body">
      <img style="padding: 20px" src="../assets/images/nomalanga.png" alt="">
    </div>
    <MusikadaFooter />
  </div>
</template>

<script>

import MusikadaFooter from "@/components/MusikadaFooter.vue";
import HeaderWithoutBar from "@/components/HeaderWithoutBar.vue"


export default {
  name: "CiphersView",
  components: {
    MusikadaFooter,
    HeaderWithoutBar
    
    
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


</style>
