<template>
  <div class="container">
      <div id="filter">
        <b-form inline class="mb-2">
          <b-form-select class="mr-2" v-model="filter.status" :options="options"></b-form-select> 
          <b-form-input class="mr-2" placeholder="Digite o nome do evento" v-model="filter.bairro"></b-form-input>
          <b-button variant="outline-secondary" title="buscar" @click="buscarFilter" class="mr-2">Buscar</b-button>
         <!--  <b-button title="limpar filtro"  @click="limparFiltro">
            <b-icon-trash></b-icon-trash>
          </b-button> --> 
        </b-form>
      </div> 

    <br>
    <div class="row justify-content-center">
      <div class="col-md-12" >
        <b-container>
          <b-row>
            <b-col>
              <carousel 
              :autoplay='true'
              :autoplayTimeout=5000 
              :autoplayHoverPause='true'
              :navigationEnabled="true"
              :paginationEnabled="false"
              :perPageCustom = "[[200, 1], [508, 2], [1000, 3]]" 
              :loop='true'
              :scrollPerPage='false'
              :centerMode='true'
              :navigationClickTargetSize=0
              >
                <!-- <slide><div id="eventcard"><EventCard/></div></slide>
                <slide><div id="eventcard"><EventCard/></div></slide>
                <slide><div id="eventcard"><EventCard/></div></slide>
                <slide><div id="eventcard"><EventCard/></div></slide>
                <slide><div id="eventcard"><EventCard/></div></slide>
                <slide><div id="eventcard"><EventCard/></div></slide>
                <slide><div id="eventcard"><EventCard/></div></slide>
                <slide><div id="eventcard"><EventCard/></div></slide> -->
                <slide v-for="(item, index) in items" :key="index.id" id="eventcard">
                  <div class="event-card" >
                    <div class="header-event-card" @click="mostrarInfo">
                      <img :src="item.image" fluid alt="Responsive image" />
                    </div>
                    <div class="content-event-card">
                      <h4>{{item.event}}</h4>
                      <p>{{item.data}}</p>
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
                </slide>
              </carousel>
            </b-col>
          </b-row>
        </b-container> 
      </div>
      <br>
      
      <div class="col-md-12" >         
          <b-container>
            <b-row>
              <b-col>
                <carousel 
                :autoplay='true'
                :autoplayTimeout=5000 
                :autoplayHoverPause='true'
                :navigationEnabled="true"
                :paginationEnabled="false"
                :perPageCustom = "[[200, 1], [508, 2], [1000, 3]]" 
                :loop='true'
                :scrollPerPage='false'
                :centerMode='true'
                :navigationClickTargetSize=0         
                >
                 
                    <slide v-for="(item, index) in items" :key="index.id" id="eventcard">
                      <div class="event-card" >
                        <div class="header-event-card" @click="mostrarInfo">
                          <img :src="item.image" fluid alt="Responsive image" />
                        </div>
                        <div class="content-event-card">
                          <h4>{{item.event}}</h4>
                          <p>{{item.data}}</p>
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
                    </slide>
                </carousel>
              </b-col>
            </b-row>
          </b-container> 
      </div>
    </div>
  </div>
</template>

<script>

 /* import EventCard from '../Eventos/EventCard.vue' */
 import ItemsModel from '@/model/ItemsModel'
 import Status from "@/valueObjects/status"
 

  export default {
    name: "SlickTeste",
    components:{
      /* EventCard */

    },

    data() {
        return { 
      items: [],
      status: Status,
      filter: {
          bairro: null,
          status: null
      },

      options: [
        { value: null, text: "Filtrar por" },
        { value: Status.ATIVO, text: "Ativo" },
        { value: Status.INATIVO, text: "Inativo" },
        { value: Status.BAIRRO, text: "Bairro" },
        { value: Status.ORGANIZADOR, text: "Organizador" },
        
      ],
      };
    },

    async created() {
      this.items = await ItemsModel.get();

    },

    methods: {
      async limparFiltro(){
        this.filter = {
            bairro: null,
            status: null
        }
        this.items = await ItemsModel.params({
            status: [
                this.status.ATIVO,
                this.status.INATIVO,
                this.status.BAIRRO,
                this.status.ORGANIZADOR,
            ]

        }).get();
      },

        mostrarInfo(){
            this.$router.push({name:"EventoExpandido"});
        },

        async buscarFilter(){
            let filter = { ... this.filter}
            filter = this.clean(filter)
            this.items = await ItemsModel.params(filter).get();
        },

        clean(obj){
            for(var propName in obj){
                if(obj[propName] === null || obj[propName] === undefined){
                    delete obj[propName]
                }
            }
            return obj;
        }
      }
    }

</script>

<style scoped>
/* .slick-prev 
.slick-next 
.slick-arrow {
  cursor: pointer;
  float: right !important;
  width: 50px;
  height: 20px;
  font-size: 10px;

} */

/* button.slick-prev.slick-arrow{
  cursor: pointer;
  float: right !important;
  width: 50px !important;
  height: 20px;
  font-size: 10px;

} */

#eventcard{
 padding-right: 10px;
 padding-bottom: 10px;
  
}


.event-card {
  padding: 8px;
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
  border-radius: 5px;
  /*  height: 10em;  */
   /* height: 13vw; */
 /*  max-width:200px;
  max-height:150px; */
  /* width: auto; */
  /* object-fit: scale-down; */
 /*  height: 170px; */
   height: 140px; 
}
.content-event-card {
  padding-top: 10px;
  border-bottom: 1px solid #e1e1e1;
}
.content-event-card h4 {
  letter-spacing: -0.015em;
  /* font-size: 1em; */
  font-size: 1.3vw;
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

/* h4 {font-size: 1.5vw;} */

 #eventcard1 {
 
  padding: 10px;
  display: flex;
  
}

  
</style>