<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        
        <!-- Login -->
        <b-tab title="Login" active>
          <Login />     
        </b-tab>

          <!-- Cadastro -->
        <b-tab title="Cadastro" v-model="cad">
          <Cadastro />
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>

import Cadastro from "../views/Cadastro.vue"
import Login from "../views/Login.vue"
  export default {
    components:
    {
        Cadastro, Login
    },

    data() {
      return {
        //modalShow: false
      }
    },

    methods: {
      closeFunction: function(){
        
      }
    }
  }
</script>