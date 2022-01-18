<template>
  <div id="header">
    <b-navbar toggleable="lg" type="dark" variant="info" style="color-bg: red">
      <b-navbar-brand href="#">
        <b-img src="@/assets/images/logo.png" fluid alt="Fluid image"></b-img>
      </b-navbar-brand>
 
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="menu">
        <b-navbar-nav>
          <b-nav-item @click="gotToHome">Página inicial</b-nav-item>
          <b-nav-item @click="gotToSinger">Cantor</b-nav-item>
          <b-nav-item @click="gotToCiphers">Enviar cifras</b-nav-item> 
          <b-nav-item @click="gotToEvents">Anunciar evento</b-nav-item>
          <b-nav-item @click="gotToAbout">Sobre nós</b-nav-item> 
          <b-nav-item></b-nav-item>
        </b-navbar-nav>
        
        <b-navbar-nav v-if="logado == false" class="ml-auto" text-variant="white">
          <div>
            <b-nav-item @click="modalShow = !modalShow">Entrar</b-nav-item>
           <b-modal v-model="modalShow">
             <Modal />
           </b-modal>
          </div>
        </b-navbar-nav>
        <b-navbar-nav v-else-if="logado == true" class="ml-auto" text-variant="white">
          <div class="avatar-bell-user" id="log">
            <div class="bell" style="font-size: 2rem">
              <b-icon icon="bell-fill" class="p-1"></b-icon>
            </div>
            <div class="avatar">
              <b-avatar
                variant="dark"
                badge="2"
                badge-variant="danger"
                size="1.8rem"
              ></b-avatar>
            </div>
            <div class="user">
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                  <em>Hasman</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>
            </div>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div id="search">
      <b-navbar>
        
        <b-nav-form>
          <b-form-input v-model="filter.bairro" id="search-bar" class="mr-sm-2" placeholder="Qual musica tocar?"></b-form-input>
          <b-button @click="buscarFilter" id="search-button" class="my-2 my-sm-0">Pesquisar</b-button>
        </b-nav-form>
      </b-navbar>
    </div>
    <div>
      <!-- {{filter}}<br>
      <div v-for="(dado, index) in dados" :key="index.id">{{dado.name}}</div>
      <br> -->
      <!-- {{dados}} -->
    </div>
  </div>
</template>

<script>
import Modal from "@/views/Modal.vue"
import ItemsModel from '../../model/ItemsModel'

export default {
  name: "Header",
  components: 
  {
    Modal
  },
  
  data() {
    return {
      dados:[],
      modalShow: false, 
      logado: false,
      filter: {
        bairro: null
        }
    };
  },

    async created() {
      this.dados = await ItemsModel.get();
    },

   mounted: function () { 
    this.$root.$on('myEvent', (text) => { // here you need to use the arrow function
     this.modalShow = text;
     this.logado = !text;
     /* console.log(this.dados) */
    })
  }, 

  methods: {
    gotToSinger(){
      this.$router.push({name:"SingerView"});
    },
    gotToCiphers(){
      this.$router.push({name:"CiphersView"});
    },
    gotToHome(){
      this.$router.push({name:"Home"});
    },
    gotToEvents(){
      this.$router.push({name:"EventsView"});
    },
    gotToAbout(){
      this.$router.push({name:"AboutUsView"});
    },
    gotToLogin(){
      this.$router.push({name:"Login"});
    },
    
    async buscarFilter(){
        let filter = { ... this.filter}
        filter = this.clean(filter)
        this.dados = await ItemsModel.params(filter).get();
    },

     clean(obj){
        for(var propName in obj){
            if(obj[propName] === null || obj[propName] === undefined){
                delete obj[propName]
            }
        }
        return obj;
    }
  },

};
</script>

<style scoped>
.bg-info {
  background-color: #CCCCCC !important;
}

.navbar-dark .navbar-nav a.nav-link:hover,
.justify-content-center {
  text-decoration:underline;
  opacity: 0.8;
  
}
.navbar-dark .navbar-nav a.nav-link:hover {
  
  transition: 0.2s opacity;
}

.navbar-dark .navbar-nav .nav-link,
.navbar-dark .navbar-brand,
em {
  color: black;
}

.nav-bottom {
  padding-bottom: 10px;
}

.img-fluid {
  max-width: 100px;
  height: auto;
}

#search {
  background-color: #f0833b !important;
  opacity: 0.9;
}

#search-bar {
  margin-left: 20px;
  width: 350px;
}

#search-button {
  background-color: #CCCCCC;
  color: black;
}

#log{
  display: flex;
  justify-content: left;
  align-items: left;
  flex-direction: row;
}
</style>
