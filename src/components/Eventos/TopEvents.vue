<template>
  <div>
    <b-container class="bv-example-row">
      <b-row> 
         <b-col>
            <EventCard />
          </b-col>
           <!-- <b-col>
            <EventCard />
          </b-col>
          <b-col>
            <EventCard />
          </b-col>
          <b-col>
            <EventCard />
          </b-col>
          <b-col>
            <EventCard />
          </b-col>  -->
      </b-row>
    </b-container>
  </div>
</template>
         

<script>
 import EventCard from "../EventCard.vue"; 
 import axios from "axios"

export default {
  name: "TopEvents",
  components: {
    EventCard,
  },
  data() {
    return {
      fields: [
        {
          key: "name",
          label: "Nome",
        },
        {
          key: "email",
          label: "E-mail",
        },
        {
          key: "isActive",
          label: "Status",
        },
      ],
      items: [
        {
          isActive: true,
          name: "Letícia Araujo Pereira",
          email: "LeticiaAraujoPereira@dayrep.com",
        },
        {
          isActive: false,
          name: "Marina Santos Araujo",
          email: "MarinaSantosAraujo@dayrep.com",
        },
        {
          isActive: false,
          name: "Felipe Lima Fernandes",
          email: "FelipeLimaFernandes@dayrep.com",
        },
        {
          isActive: true,
          name: "Thaís Lima Castro",
          email: "ThaisLimaCastro@rhyta.com",
        },
        {
          isActive: true,
          name: "Renan Melo Barros",
          email: "RenanMeloBarros@teleworm.us",
        },
        {
          isActive: true,
          name: "Matilde Pereira Carvalho",
          email: "MatildePereiraCarvalho@rhyta.com",
        },
        {
          isActive: true,
          name: "Gabriel Ferreira Gomes",
          email: "GabrielFerreiraGomes@jourrapide.com",
        },
      ],

      search: '',
      selected: null,
      /* options:[
        {value: null,text: 'Selecione o filtro'},
        {value: true,text: 'Bairro'},
        {value: false,text: 'Cidade'},
        {value: true,text: 'Organizador'},
      ] */

      options: [
        { value: null, text: "Filtrar por" },
        { value: true, text: "Ativo" },
        { value: false, text: "Inativo" },
      ],

      dados:[]
    };
  },

  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/dados`);

      this.dados = res.data;
    } catch (e) {
      console.error(e);
    }
  },

  computed: {
    filteredItems() {
     /*  let items = [];
      items = this.items.filter((item) => {
        return (
          item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          item.email.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });

      items = items.filter((item) => {
        if (this.selected == null) return item;
        return item.isActive === this.selected;
      });

      return items; */

      let items = [];
      items = this.items.filter((item) => {
        return (
          item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
          item.email.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });

      items = items.filter((item) => {
        if (this.selected == null) return item;
        return item.isActive === this.selected;
      });

      return items;
    },
  },

  methods: {
    limparFiltro(){
      this.search = '',
      this.selected = null
    },
  }


};
</script>

<style scoped>

/* #filter {
  margin-top: -50px;
  width: 100vh;
} */

</style>