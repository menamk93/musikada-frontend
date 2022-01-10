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
            label-for="name"
            >
                <b-form-input
                id="name"
                type="name"
                placeholder="Nome"
                v-model.trim="$v.form.name.$model"
                :state="getValidation('name')"
                ></b-form-input>
            </b-form-group>

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
import UsersModel from "@/model/UsersModel"
import ToastMixin from "@/mixins/toastMixin.js";
import facebookLogin from 'facebook-login-vuejs';

/* const baseURL = "http://localhost:3000/dados" */

export default {
  mixins: [ToastMixin],
  components: {facebookLogin},
  data() {
    return {
      modalShow: false,
      form: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }
    }
  },

  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3),
      },

      email: {
        required,
        email,
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

      const user = new UsersModel(this.form);
      user.save();

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
        email: "",
        name: "",
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
