<template>
  <div class="container">
      <div id="filter">
        <b-form inline>
          <b-form-select
          class="mr-3"
          v-model="selected"
          :options="options"
          >

          </b-form-select>

          <b-form-input
          class="mr-3"
          placeholder="Digite o nome do evento"
          v-model="search"
          > 
          </b-form-input>

          <b-button title="limpar filtro" v-b-tooltip.houver @click="limparFiltro">
            <b-icon-trash></b-icon-trash>
          </b-button>

        </b-form>
      </div> 

    <br>
    <div class="row justify-content-center">
      <div class="col-md-12">
        <Slick ref="slick" :options="slickOptions" >
           
          <div id="eventcard"><EventCard/></div>
          <div id="eventcard"><EventCard/></div>
          <div id="eventcard"><EventCard/></div>
          <div id="eventcard"><EventCard/></div>
          
         </Slick>
      </div>
      <div class="col-md-12">
        <Slick ref="slick" :options="slickOptions">
          <div id="eventcard"><EventCard/></div>
          <div id="eventcard"><EventCard/></div>
          <div id="eventcard"><EventCard/></div>
          <div id="eventcard"><EventCard/></div>
          </Slick>
        </div>
      </div>

      <b-row>
        <b-col> 
         
          <b-table class="mt-3" striped hover :items="filteredItems" :fields="fields">
            <template #cell(isActive)="data">
              <template v-if="data.items.isActive">Ativo</template>
              <template v-else>Inativo</template>
            </template> 
          </b-table>
        </b-col> 
      </b-row> 

  </div>
</template>
<script>

 
 import Slick from 'vue-slick';
 import 'slick-carousel/slick/slick.css';
 /* import TopEvents from './TopEvents.vue' */
 import axios from "axios"
 import EventCard from './EventCard.vue'
 

  export default {
    name: "Slick",
    components:{
      Slick, 
     /*  TopEvents, */
      EventCard

    },

    data() {
        return {
          slickOptions: {
              "dots": false,
              "infinite": true,
              "slidesToShow": 3,
              "slidesToScroll": 1,
              "initialSlide": 0,
              "responsive": [
                {
                  "breakpoint": 1024,
                  "settings": {
                    "slidesToShow": 3,
                    "slidesToScroll": 3,
                    "infinite": true,
                    "dots": true
                  }
                },
                {
                  "breakpoint": 1000,
                  "settings": {
                    "slidesToShow": 2,
                    "slidesToScroll": 2,
                    "initialSlide": 2
                  }
                },
                {
                  "breakpoint": 800,
                  "settings": {
                    "slidesToShow": 1,
                    "slidesToScroll": 1
                  }
                }
              ]
            },
        
        fields: [
        {
          key: "name",
          label: "Nome",
        },
        {
          key: "email",
          label: "E-mail",
        },
       /*  {
          key: "isActive",
          label: "Status",
        }, */
      ],
      items: [],
      search: '',
      selected: null,

      options: [
        { value: null, text: "Filtrar por" },
        { value: true, text: "Ativo" },
        { value: false, text: "Inativo" },
        
      ],
      dados:[],
      };
    },

    async created() {
    try {
      const res = await axios.get(`http://localhost:3000/items`);

      /* this.dados = res.data; */
      this.items = res.data; 
    } catch (e) {
      console.error(e);
    }
  },

  computed: {
    filteredItems() {
     let items = [];
      items = this.items.filter((item) => {
        return (
          item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          item.email.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });

      items = items.filter((item) => {
        if (this.selected == null) return item;
        return (
          item.isActive === this.selected
        )
      });

      return items; 

      /*  let dados = [];
        dados = this.dados.filter((item) => {
        return (
          item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          item.email.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });

      dados = dados.filter((item) => {
        if (this.selected == null) return item;
        return item.isActive === this.selected;
      });

      return dados; */
    },
  },

  methods: {
    limparFiltro(){
      this.search = '',
      this.selected = null
    },
  }

  }
</script>

<style scoped>
.slick-prev 
.slick-next 
.slick-arrow {
    cursor: pointer;
    float: right !important;
    width: 50px;
    height: 20px;
    font-size: 10px;

}

button.slick-prev.slick-arrow{
    cursor: pointer;
    float: right !important;
    width: 50px !important;
    height: 20px;
    font-size: 10px;

}

#eventcard{
 padding-right: 10px;
  
}

  
</style>