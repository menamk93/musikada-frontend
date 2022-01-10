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
          <b-nav-item ></b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" text-variant="white">
          <div class="avatar-bell-user">
            <div class="bell" style="font-size: 3rem">
              <b-icon icon="bell-fill" class="p-2"></b-icon>
            </div>
            <div class="avatar">
              <b-avatar
                variant="dark"
                badge="7"
                badge-variant="danger"
              ></b-avatar>
            </div>
            <div class="user">
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                  <em>Xand Lara</em>
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
          <b-form-input id="search-bar" class="mr-sm-2" placeholder="Qual musica tocar?"></b-form-input>
          <b-button id="search-button" class="my-2 my-sm-0" type="submit">Pesquisar</b-button>
        </b-nav-form>
      </b-navbar>
    </div>
     <router-view>
      <Home />
    </router-view>
  </div>
</template>

<script>
/* import Login from "../views/Login.vue" */
import Modal from "../views/Modal.vue"
import Home from "../views/Home.vue"

export default {
  name: "Header",
  components: 
  {
    Home,
    Modal
  },
  props: ["Perfil", "Entrar", "Sair"],
  data() {
    return {
      resultado: "",
      teste: true,
      objeto: [],
      modalShow: false
    };
  },
  methods: {
    getDataInDataBase() {
      const objectoLocal = [
        { name: "Mena", idade: "20" },
        { name: "Artur", idade: "19" },
        { name: "Joao", idade: "15" },
      ];
      this.objeto = objectoLocal;
    },
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
</style>
