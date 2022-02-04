<template>
  <div>
    <b-container>
      <b-row class="my-4">
        <b-col sm="2" >
          <label for="input-default">Nome do cantor:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input id="input-default" v-model="singer"></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="4">
          <b-row id="files">
            <b-col sm="2">
              <label style="margin-left: 80%" for="input-default">Foto:</label>
            </b-col>
            <b-col sm="10">
               <b-form-file v-model="file" plain></b-form-file>
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
                  <b-form-datepicker size="sm" class="mb-2" v-model="datei" :min="min" :max="max" locale="br"></b-form-datepicker>
                </b-col>
              </b-row>
            </b-col>
            <b-col cols="6">
              <b-row >
                <b-col sm="3">
                  <label style="margin-left: 80%" for="input-default">Hora de Início:</label>
                </b-col>
                <b-col sm="9">
                  <b-form-timepicker size="sm" class="mb-2" v-model="houri" locale="br"></b-form-timepicker>
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
                  <b-form-datepicker size="sm" class="mb-2" v-model="datef" :min="min" :max="max" locale="br"></b-form-datepicker>
                </b-col>
              </b-row>
            </b-col>
            <b-col cols="6">
              <b-row >
                <b-col sm="3">
                  <label style="margin-left: 80%" for="input-default">Hora do término:</label>
                </b-col>
                <b-col sm="9">
                  <b-form-timepicker size="sm" class="mb-2" v-model="hourf" locale="br"></b-form-timepicker>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>


      <b-row >
        <b-col sm="4" id="radio">
          <b-form-radio name="radio-size" v-model="pago">Ingresso Pago</b-form-radio>
          <b-form-radio name="radio-size" v-model="free">Ingresso gratuito</b-form-radio>
        </b-col>
        <b-col>
          <b-row class="my-4">
            <b-col sm="2">
              <label for="input-default">Tipo:</label>
            </b-col>
            <b-col sm="10">
              <b-form-input id="input-default" v-model="type"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="my-4">
            <b-col sm="2">
              <label for="input-default">Telefone:</label>
            </b-col>
            <b-col sm="10">
              <b-form-input id="input-default" v-model="fone"></b-form-input>
            </b-col>
          </b-row>
        </b-col>

        <b-col>
          <b-row class="my-4">
            <b-col sm="2">
              <label style="margin-left: -20px" for="input-default">Preço:</label>
            </b-col>
            <b-col sm="10">
              <b-form-input class="preco" id="input-default" v-model="preco"></b-form-input>
            </b-col>
          </b-row>
        </b-col>
      </b-row>


      <b-row class="my-4">
        <b-col sm="2">
          <label for="input-default">Localização:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input id="input-default" v-model="localization"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-4">
        <b-col sm="2">
          <label for="input-default">Descrição:</label>
        </b-col>
        <b-col sm="10">
          <b-form-textarea id="textarea-rows" rows="12" v-model="description" ></b-form-textarea>
        </b-col>
      </b-row>
      <b-row class="my-5">
        <b-col class="col text-center"><b-button @click="submit" class="btn btn-default">Enviar</b-button></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        singer: '',
        title: '',
        text: '',
        file: '',
        pago: '',
        free: '',
        type: '',
        fone: '',
        localization: '',
        description: ''

      }
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