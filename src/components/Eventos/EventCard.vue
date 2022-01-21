<template>
  <div>
    <b-row>
      <b-col>
        <div class="event-card">
          <div class="header-event-card" @click="mostrarInfo">
            <img :src="dados[11].image" fluid alt="Responsive image" />
          </div>
          <div class="content-event-card">
            <h4>{{dados[11].evento}}</h4>
            <!-- <h4>SABADÂO QUALQUER</h4> -->
            <p>20 DE MAIO</p>
            <p>Vila da Gamek 2</p>
          </div>
          <div class="icons-event-card">
              <div class="icons-heart">
                <b-icon icon="heart" font-scale="1"></b-icon>
              </div>
              <div class="icons-share">
                <b-icon icon="share-fill" font-scale="1"></b-icon>
              </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
/* import axios from "axios"; */
 import DataModel from '@/model/DataModel'

 export default {
  name: "EventCard",
  data() {
    return {
      dados:[]
    };
  },

  /* async created() {
    try {
      const res = await axios.get("http://localhost:3000/dados");

      this.dados = res.data;
    } catch (e) {
      console.error(e);
    }
  }, */

  async created() {
      this.dados = await DataModel.get();

    },

   methods: {
      mostrarInfo(){
          this.$router.push({name:"EventoExpandido"});
      }
  }, 
};
</script>


<style scoped>
.event-card {
  padding: 15px;
  border-radius: 10px;
  font-size: 16px;
  /* box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25); */
  overflow: auto;
  min-width: 10%; 
  max-width: 100%;
  background-color: #c4c4c4;
}
.header-event-card, .icons-heart, .icons-share:hover {
  cursor: pointer;
}
.header-event-card img {
  width: 100%;
}
.content-event-card {
  padding-top: 15px;
  border-bottom: 1px solid #e1e1e1;
}
.content-event-card h4 {
  letter-spacing: -0.015em;
  font-size: 1em;
  font-weight: bold;
}
.content-event-card p {
  margin-bottom: 0;
}
.icons-event-card {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icons-heart {
    padding-right: 25px;
}
 
p {font-size: 1.1vw;}

h4 {font-size: 1.5vw;}


</style>
