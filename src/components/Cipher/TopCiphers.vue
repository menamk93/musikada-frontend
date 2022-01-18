<template>
  <div>
    <b-container class="bv-example-row">
        <b-row id="cifra"> 
          <b-col sm="6">
            <Cipher v-bind:number="'1-'" v-bind:singerName="'Telma Lee'" v-bind:songTitle="'Te quero'" />
          </b-col>
          <b-col sm="6">
            <Cipher v-bind:number="'2-'" v-bind:singerName="'Ary'" v-bind:songTitle="'Sei la'"/>
          </b-col>
           <b-col sm="6">
            <Cipher v-bind:number="'3-'" v-bind:singerName="'C4 Pedro'" v-bind:songTitle="'Tu és a mulher'" />
          </b-col>
          <b-col sm="6">
            <Cipher v-bind:number="'4-'" v-bind:singerName="'Anselmo Ralph'" v-bind:songTitle="'Curtição'"/>
          </b-col>
          <b-col sm="6">
            <Cipher v-bind:number="'5-'" v-bind:singerName="'Gerilson Israel'" v-bind:songTitle="'Tarzan'" />
          </b-col>
          <b-col sm="6">
            <Cipher v-bind:number="'6-'" v-bind:singerName="'Pérola'" v-bind:songTitle="'Ninguém caminha só'"/>
          </b-col>
          <b-col sm="6">
            <Cipher v-bind:number="'7-'" v-bind:singerName="'Yola Semedo'" v-bind:songTitle="'Todo dia da semana'" />
          </b-col>
          <b-col sm="6">
            <Cipher v-bind:number="'8-'" v-bind:singerName="'Filho do Zua'" v-bind:songTitle="'Ndoki'"/>
          </b-col>
          <b-col sm="6">
            <Cipher v-bind:number="'9-'" v-bind:singerName="'C4 Pedro'" v-bind:songTitle="'Tudo ou nada'" />
          </b-col>
          <b-col sm="6">
            <Cipher v-bind:number="'10-'" v-bind:singerName="'Ary'" v-bind:songTitle="'Sei la'"/>
          </b-col>
        </b-row>        
    </b-container>
  </div>
</template>

<script>
import Cipher from "@/components/Cipher/Cipher.vue";

export default {
  name: "TopCiphers",
  components: {
    Cipher,
  },
  data() {
    return{
      
    }
  },
};
</script>
<style scoped>
.teste{
  padding-bottom: 10px;
}

#cifra {
  padding: 10px;
}

/* @media (max-width: 1000px) {
      .col-6 {
        padding-right: 100px !important;
        padding-left: 80px !important;
      }
      #cifra {
        
        } */

      /* .row.reorder-xs {
        transform: rotate(180deg);
        direction: rtl;  *//* Fix the horizontal alignment */
     /*  //} */

      /* .row.reorder-xs > [class*="col-"] {
        transform: rotate(-180deg);
        direction: ltr; */ /* Fix the horizontal alignment */
      /* }
    } */

/* .col-6 {
  padding-right: 100px !important;
  padding-left: 80px !important;
} */

</style>
