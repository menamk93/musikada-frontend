<template>
  <div id="app">
    <!-- <Header/> -->
    <router-view>
     <!--  <Home /> -->
    </router-view>
  </div>
</template>

<script>
import './style/global-style.css'
/* import Header from "@/components/Header.vue"; */
/* import Home from "@/views/Home.vue"; */
/* import Slides from './components/Slides.vue'; */

export default {
  name: "App",
  components: {
    /* Home, */
    /* Header, */
  },
  created: function () {},
};
</script>