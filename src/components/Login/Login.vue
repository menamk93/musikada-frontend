<template>
  <b-row class="log">
    <b-col class="d-flex justify-content-center align-items-center left-login">
      <div>
        <div class="face-cadastrar">
          <facebook-login class="button"
            appId="326022817735322"
            @login="getUserData"
            @logout="onLogout"
            @get-initial-status="getUserData">
          </facebook-login>
        </div>
        <br><center>Ou</center><br>
        <b-form>
          <b-form-group
            
            label-for="email"
            >
              <b-form-input
                id="email"
                type="email"
                placeholder="Email"
                autocomplete="off"
                v-model.trim="$v.form.email.$model"
                :state="getValidation('email')"
                
              ></b-form-input>
          </b-form-group>

          <b-form-group
            label-for="password"
          >
            <label class="d-flex justify-content-between">
              
              
            </label>

            <b-form-input
              id="password"
              type="password"
              placeholder="Digite a sua senha"
              v-model.trim="$v.form.password.$model"
              :state="getValidation('password')"
              
            ></b-form-input>
          </b-form-group>

          <b-button
            type="button"
            variant="primary"
            block
            @click="login">
            <i class="fas fa-sign-in-alt"></i> Entrar
          </b-button>
          <small><a href="#">Esqueceu sua senha?</a></small>
        </b-form>
      </div>
    </b-col>
  </b-row>
</template>

<script>

import { required, minLength, email } from "vuelidate/lib/validators"
//import UsersModel from "@/model/UsersModel";
import ToastMixin from "@/mixins/toastMixin.js";
import facebookLogin from 'facebook-login-vuejs';
import axios from 'axios'


export default {
  mixins: [ToastMixin],
  components:{facebookLogin},
  name: 'Login',
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    }
  },
  

  validations: {
    form: {
      email: {
        required, 
        email
      },

      password: {
        required,
        minLength: minLength(6),
      },
    },
  },

  methods: {
    async login() {
      this.$v.$touch();  
      if (this.$v.$error) return;

     /* let user = await UsersModel.params({
          email: this.form.email
        }).get();
        
      //alert(user)
      window.alert(user[8].email)

      if(!user || !user[0] || !user[0].email) {
        
        this.showToast("danger", "Erro!", "Usuário e/ou senha incorretos");
        this.clearForm();
        return;
      }

      user = user[0];
      //window.alert(user.email)
      if(user.password !== this.form.password) {
        this.showToast("danger", "Erro!", "Usuário e/ou senha incorretos");
        this.clearForm();
        return;
      }

      localStorage.setItem('authUser', JSON.stringify(user)); 
      //this.showToast("danger", "Erro!", "Usuário e/ou senha incorretos");
      //this.clearForm();
      //window.alert(user)
      this.closeModal();
      //this.$router.push({name: "Home-logado"});
      //this.buttonClicked();
      /* this.$root.$emit('logado', true); */
      //this.$router.push({name: 'Home'})*/

      
      let loginRequest = {
        email: this.form.email,
        password: this.form.password
      };

      //console.log(loginRequest)*/
      
      axios({
        method: 'post',
        url: 'https://musikada-user-heroku.herokuapp.com/users/login',
        data: loginRequest,
        headers: {
          'Content-Type': 'application/json'
        }

      }).then(resposta => {
        this.storage({
          userName: resposta.data.userName,
          userEmail: resposta.data.userEmail,
          
        },
        ); 
        this.showToast("success", "Sucesso!", "Login feito com sucesso");
        this.clearForm();
        this.closeModal();
        //localStorage.setItem('authUser', JSON.stringify(user));
        
      }).catch(error => {
        console.log(error)
      })

      


      this.loged();
    },

    clearForm() {
      this.form = {
        email: "",
        password: ""
      }
    },

    closeModal(){
      this.$root.$emit('myEvent', false);
    },

    storage(loginData){
      localStorage.setItem('authUser', JSON.stringify(loginData));
    },


    getValidation(field) {
      if (this.$v.form.$dirty === false) {
        return null;
      }

      return !this.$v.form[field].$error;
    },

    goToRegister() {
      this.$router.push({ name: "register" });
    },
    loged(){
       this.$root.$emit('logado', 'log');
    }
  },
}
</script>

<style>

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

.row-login {
  margin-left: 0;
}

.title-login {
  font-weight: bold;
}

.img-login {
  width: 600px;
  height: 600px;
}

.log{
  width: 100%;
}

.face-cadastrar {
  text-align: center;
  justify-items: center; 
}
</style>
