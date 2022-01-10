<template>
  <div class="home">
     <HeaderWithoutBar/>
    <div class="home-body">
      <img src="../assets/images/logo.png" alt="Logotipo do musikada" id="logogrande">
        <div class="aboutus">
          <div>
            <h1 id="Qs">QUEM SOMOS</h1>
            <div id="Qsomos">
              <p> apaixonadas por pessoas, que desejam agilizar o acesso a informação, e desenvolver soluções por meio de tecnologia.</p>
            </div> 
          </div>   
          <div>
            <h1 id="Qa">O QUE ACREDITAMOS</h1>
            <div id="Qacreditamos">
              <p>Tempo deve ser bem aproveitado. Aprendizado e diversão não podem ser negligenciados.</p>
            </div>
          </div>
          <div>
            <h1 id="Qp">O QUE PROPOMOS </h1>
            <div id="Qpropomos">
              <p>Praticidade e segurança na obtenção de informações sobre notas músicais, e compra de ingresso online.</p>
            </div>
          </div>
        </div>
    </div>
    <MusikadaFooter />
  </div>
</template>

<script>

import MusikadaFooter from "@/components/MusikadaFooter.vue";
import HeaderWithoutBar from "@/components/HeaderWithoutBar.vue"


export default {
  name: "AboutUsView",
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

.aboutus{
  padding-bottom: 50px;
  /* width: 100%; */
}
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

#logogrande{

        width: 50%;
        height: 100%;
        /* height: 450px; */
        float: left;
        margin: 5% 2% 0;
    }
    #Qs{
        /* margin-top: 30px;
        text-align: right;
        margin-right: 30px;
        font-weight: bold;
        font-size: 16pt;
         */
      
      font-weight: bold;
      margin-top: 30px;
      text-align: right;
      font-weight: bold;
      font-size: 3.5vh;
      padding-right: 15%;

    }
    #Qsomos{
        /* width: 300px;
        height: 120px;
        background-color: #BDBDBD;
        color: black;
        float: right; */
        padding: 10px;
        border-radius: 8px;
        font-size: 2.5vh;
        background-color: #c4c4c4;
        overflow: auto;
        min-width: 10%; 
        max-width: 50%;
        justify-content: center;
        align-items: center;
        float: right;
        margin-right: 20px;
       
    }
    #Qa{

        /* margin-top: 160px;
        text-align: left;
        margin-right: 180px;
        font-weight: bold;
        font-size: 16pt;
        padding-left: 50px; */

        font-weight: bold;
        margin-top: 200px;
        text-align: left;
        font-weight: bold;
        font-size: 3.5vh;
        padding-left: 15%;


    }
    #Qacreditamos{
        /* width: 300px;
        height: 120px;
        background-color: #BDBDBD;
        color: black;
        float: right;
        padding: 10px;
        border-radius: 8px;
        margin-right: 160px;
        margin-top: 10px;
        font-size: 12pt; */

        padding: 10px;
        border-radius: 8px;
        font-size: 2.5vh;
        background-color: #c4c4c4;
        overflow: auto;
        min-width: 10%; 
        max-width: 50%;
        justify-content: center;
        align-items: center;
        float: left;
        margin-right: 20px;
        
    }
    #Qp{
      /*  margin-top: 160px;
        text-align: right;
        margin-right: 30px;
        font-weight: bold;
        font-size: 16pt; */

        font-weight: bold;
        margin-top: 160px;
        text-align: right;
        font-weight: bold;
        font-size: 3.5vh;
        padding-right: 15%;
    }
    #Qpropomos{
        /* width: 300px;
        height: 120px;
        background-color: #BDBDBD;
        color: black;
        float: right;
        padding: 10px;
        border-radius: 8px;
        margin: 10px 20px 0 ;
        font-size: 12pt;
        padding-top: 100ppx;
         */

        padding: 10px;
        border-radius: 8px;
        font-size: 2.5vh;
        background-color: #c4c4c4;
        overflow: auto;
        min-width: 10%; 
        max-width: 50%;
        justify-content: center;
        align-items: center;
        float: right;
        margin-right: 20px;
    }


</style>
