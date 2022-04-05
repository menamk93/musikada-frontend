<template>
  <div>
    <b-container>
      <b-form>
        <b-row class="my-4">
          <b-col sm="2" >
            <label for="input-default">Título do Evento:</label>
          </b-col>
          <b-col sm="4">
            <b-form-input 
              id="eventTitle" 
              v-model.trim="form.eventTitle"
              ></b-form-input>
          </b-col>
          <b-col sm="2" >
            <label for="input-default">Nome do Organizador:</label>
          </b-col>
          <b-col sm="4">
            <b-form-input id="eventTitle" v-model.trim="form.eventOrganizers"></b-form-input>
          </b-col>  
        </b-row>
        <b-row>
          <b-col cols="4">
            <b-row id="files">
              <b-col sm="2">
                <label style="margin-left: 80%" for="input-default">Foto:</label>
              </b-col>
              <b-col sm="10">
                <b-form-file :state="Boolean(form.file)" accept=".jpg, .png, .gif" v-model="form.file" plain>
                  Selected file: {{ form.file ? form.file.name : '' }}
                </b-form-file>
              </b-col>
            </b-row>
          </b-col>


          <b-col cols="7" >
            <b-row >
              <b-col cols="6" class="coluna">
                <b-row >
                  <b-col sm="4">
                    <label style="margin-left: 80%" for="input-default">Data inicio:</label>
                  </b-col>
                  <b-col sm="8">
                    <b-form-datepicker size="sm" class="mb-2" v-model="form.eventStartDate" locale="br"></b-form-datepicker>
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="6">
                <b-row >
                  <b-col sm="3">
                    <label style="margin-left: 80%" for="input-default">Hora de Início:</label>
                  </b-col>
                  <b-col sm="9">
                    <b-form-timepicker size="sm" class="mb-2" v-model="form.houri" locale="br"></b-form-timepicker>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>


            <b-row >
              <b-col cols="6">
                <b-row >
                  <b-col sm="4">
                    <label style="margin-left: 80%" for="input-default">Data Término:</label>
                  </b-col>
                  <b-col sm="8">
                    <b-form-datepicker size="sm" class="mb-2" v-model="form.eventFinishDate" locale="br"></b-form-datepicker>
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="6">
                <b-row >
                  <b-col sm="3">
                    <label style="margin-left: 80%" for="input-default">Hora do término:</label>
                  </b-col>
                  <b-col sm="9">
                    <b-form-timepicker size="sm" class="mb-2" v-model="form.hourf" locale="br"></b-form-timepicker>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row>


        <b-row >
          <b-col sm="4" id="radio">
            <b-form-radio name="radio-size" v-model="form.pago">Ingresso Pago</b-form-radio>
            <b-form-radio name="radio-size" v-model="form.free">Ingresso gratuito</b-form-radio>
          </b-col>
          <b-col>
            <b-row class="my-4">
              <b-col sm="2">
                <label for="input-default">Tipo:</label>
              </b-col>
              <b-col sm="10">
                <b-form-input id="input-default" v-model="form.tipo"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="my-4">
              <b-col sm="2">
                <label for="input-default">Telefone:</label>
              </b-col>
              <b-col sm="10">
                <b-form-input id="input-default" v-model="form.phone1"></b-form-input>
              </b-col>
            </b-row>
          </b-col>

          <b-col>
            <b-row class="my-4">
              <b-col sm="2">
                <label style="margin-left: -20px" for="input-default">Preço:</label>
              </b-col>
              <b-col sm="10">
                <b-form-input class="preco" id="input-default" v-model="form.eventPrice"></b-form-input>
              </b-col>
            </b-row>
          </b-col>
        </b-row>


        <b-row class="my-4">
          <b-col sm="2">
            <label for="input-default">Localização:</label>
          </b-col>
          <b-col sm="10">
            <b-form-input id="input-default" v-model="form.street"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-4">
          <b-col sm="2">
            <label for="input-default">Descrição do Evento:</label>
          </b-col>
          <b-col sm="10">
            <b-form-textarea id="textarea-rows" rows="12" v-model="form.eventDescription" ></b-form-textarea>
          </b-col>
        </b-row>
        <b-row class="my-5">
          <b-col class="col text-center">
            <b-button type="button" @click="submit" class="btn btn-default">Enviar</b-button>
          </b-col>
        </b-row>
      </b-form>
    </b-container>
  </div>
</template>

<script>

//import EventsModel from "../../model/EventsModel"
import axios from "axios"

  export default {
    data() {
      return {
        form: {
          eventTitle: "",
          eventOrganizers: "",
          file: null,
          eventStartDate: "",
          eventFinishDate: "",
          houri: "",
          hourf: "",
          pago: "",
          free: "",
          eventPrice: "",
          tipo: "",
          phone1: "",
          street: "",
          eventDescription: ""
        }
      }
    },

     mounted: function(){
      console.log(this.form.singer)
    }, 

    methods: {
    submit() {
      //this.$v.$touch();
      //if (this.$v.$error) return;

      //const event = new EventsModel(this.form);
      //axios.post('https://musikada-events.herokuapp.com/events');

     //console.log(event)
      let eventRequest = {
          eventTitle: this.form.eventTitle,
          eventDescription: this.form.eventDescription,
          eventOrganizers: this.form.eventOrganizers,
          eventPrice: this.form.eventPrice,
          eventStartDate: this.form.eventStartDate,
          eventFinishDate: this.form.eventFinishDate,
          eventContact: {
            phone1: this.form.phone1,
            phone2: "555199876532",
            phone3: "555199876532"
          },
          eventAdress: {
            street: this.form.street,
            number: "1055",
            zipCode: "93010004",
            reference1: "Banco BIC",
            reference2: "Próximo a esquadra policial",
            city: "Namibe",
            provincyOrState: "Namibe",
            country: "Angola"
          },
          eventOwner: "João Armando José"





        /*firstName: this.form.name,
        secondName: "Olimpio",
        lastName: "Musikada",
        celPhone: {
          phone1: "555199876532",
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
        password: this.form.password*/
      };

      console.log(eventRequest) 
      
      axios({
        method: 'post',
        url: 'https://musikada-events.herokuapp.com/events',
        data: eventRequest,
        headers: {
          'Content-Type': 'application/json'
        }

      }).then(resposta => {
        console.log(resposta);
        //this.showToast("success", "Sucesso!", "Usuário criado com sucesso");
        this.clearForm();
        //this.goToLogin();
        //this.closeModal();
      }).catch(error => {
        console.log(error)
      })



      //event.save();
      //this.clearForm();

      /*this.showToast("success", "Sucesso!", "Usuário criado com sucesso");
      this.clearForm();
      this.goToLogin();
      this.closeModal();*/
    },

    /*getValidation(field) {
      if (this.$v.form.$dirty === false) { 
        return null;
      }

      return !this.$v.form[field].$error;
    },*/

       clearForm() {
      this.form = {
        eventTitle: "",
        eventOrganizers: "",
        file: null,
        eventStartDate: "",
        eventFinishDate: "",
        houri: "",
        hourf: "",
        pago: "",
        free: "",
        eventPrice: "",
        tipo: "",
        phone1: "",
        street: "",
        eventDescription: ""
      }
    }, 
    }
  }
</script>

<style scoped>

.btn {
  background-color: #f0833b  !important;
  color: black !important;
  padding-left: 30px;
  padding-right: 30px;
  
}

.my-4{
  margin: 0 ;
  width:93% /* value of your choice which suits your alignment */
  
}

#input-default, #textarea-rows{
  background-color: #c4c4c4;
}

* {
  font-size: 12px;
}

#files {
  margin-left: 37%;
}

.preco {
  width: 50%;
}

#radio {
  margin-left: 15%;
  margin-right: -120px
}


</style>