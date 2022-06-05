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
          <b-row>
            <b-col cols="12" md="6" sm="12">
              <b-form-group
              label-for="firstName"
              >
                  <b-form-input
                  id="firstName"
                  type="firstName"
                  placeholder="Primeiro Nome"
                  v-model.trim="$v.form.firstName.$model"
                  :state="getValidation('firstName')"
                  ></b-form-input>
              </b-form-group>
            </b-col>

            <b-col cols="12" md="6" sm="12">
              <b-form-group
              label-for="lastName"
              >
                  <b-form-input
                  id="lastName"
                  type="lastName"
                  placeholder="Sobrenome"
                  v-model.trim="$v.form.lastName.$model"
                  :state="getValidation('lastName')"
                  ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>

            <b-form-group
            
            label-for="email"
            >
                <b-form-input
                id="email"
                type="email"
                placeholder="Email"
                v-model.trim="$v.form.email.$model"
                :state="getValidation('email')"
                ></b-form-input>
            </b-form-group>

            <b-form-group
            
              label-for="celPhone"
              >
                <b-form-input
                id="celPhone"
                type="celPhone"
                placeholder="Telefone"
                v-model.trim="$v.form.celPhone.$model"
                :state="getValidation('celPhone')"
                ></b-form-input>
            </b-form-group>


            <b-form-group
            label-for="password"
            >
            <!-- <label class="d-flex justify-content-between">

            </label> -->

            <b-form-input
                id="password"
                type="password"
                placeholder="Digite a sua senha"
                v-model.trim="$v.form.password.$model"
                :state="getValidation('password')"
            ></b-form-input>
            </b-form-group>

            <b-form-group
            label-for="password"
            >
            <!-- <label class="d-flex justify-content-between">
                
            </label> -->

            <b-form-input
                id="password"
                type="password"
                placeholder="Confirme a sua senha"
                v-model.trim="$v.form.confirmPassword.$model"
                :state="getValidation('confirmPassword')"
            ></b-form-input>
            </b-form-group>

            <b-button
            type="button"
            variant="primary"
            block
            @keyup.enter="register"
            @click="register">
            
            <i class="fas fa-sign-in-alt"></i> Cadastrar
            </b-button>
            <br>
            <p style="font-size: 10px">Obs: Tua senha deve ter carácteres maiúsculo, minúsculo e números</p>
            <hr>
            <p style="font-size: 12px">Ao cadastrar, você aceita os nossos termos de uso e privacidade </p>
        </b-form>         
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { required, minLength, email, sameAs  } from "vuelidate/lib/validators";
//import UsersModel from "@/model/UsersModel"
import ToastMixin from "@/mixins/toastMixin.js";
import facebookLogin from 'facebook-login-vuejs';
import axios from 'axios'

/* const baseURL = "http://localhost:3000/dados" */

export default {
  mixins: [ToastMixin],
  components: {facebookLogin},
  data() {
    return {
      modalShow: false,
      form: {
        firstName: "",
        lastName: '',
        email: "",
        celPhone: "", 
        password: "",
        confirmPassword: "",
      }
    }
  },

  validations: {
    form: {
      firstName: {
        required,
        minLength: minLength(3),
      },

      lastName: {
        required,
        minLength: minLength(3),
      },

      email: {
        required,
        email,
      },

      celPhone: {
        required,
        minLength: minLength(9),
      },

      password: {
        required,
        minLength: minLength(6),
      },

      confirmPassword: { 
        required, 
        sameAsPassword: sameAs('password') 
      }
    }
  },

    methods: {
    register() {
      this.$v.$touch();
      if (this.$v.$error) return;

      //const user = new UsersModel(this.form);
      //axios.post('https://musikada-events.herokuapp.com/events');

     
      let userRequest = {
        firstName: this.form.name,
        secondName: " ",
        lastName: this.form.lastName,
        celPhone: {
          phone1: this.form.celPhone,
          phone2: "555199876532",
          phone3: "555199876532"
        },
        email: this.form.email,
        adresses: [
          {
            street: "Castanheira",
            number: "1055",
            zipCode: "93010004",
            reference1: "Banco BIC",
            reference2: "Próximo a esquadra policial",
            city: "Cacuaco",
            provincyOrState: "Luanda",
            country: "Angola"
          }
        ],
        documentType: "BI",
        documentNumber: "B9874C32145",
        password: this.form.password
      };

      console.log(userRequest) 
      
      axios({
        method: 'post',
        url: 'https://musikada-user-heroku.herokuapp.com/users',
        data: userRequest,
        headers: {
          'Content-Type': 'application/json'
        }

      }).then(resposta => {
        console.log(resposta);
        this.showToast("success", "Sucesso!", "Usuário criado com sucesso");
        this.clearForm();
        //this.goToLogin();
        this.closeModal();
      }).catch(error => {
        console.log(error)
      })



      //user.save();

      this.showToast("success", "Sucesso!", "Usuário criado com sucesso");
      this.clearForm();
      this.goToLogin();
      this.closeModal();
    },

    getValidation(field) {
      if (this.$v.form.$dirty === false) { 
        return null;
      }

      return !this.$v.form[field].$error;
    },

    clearForm() {
      this.form = {
        firstName: "",
        lastName: "",
        celPhone: "",
        password: "",
        confirmPassword: ""

      }
    },

     closeModal(){
      this.$root.$emit('myEvent', false);
    },

    goToLogin() {
      this.$router.push({ name: "Modal" });
    },
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
