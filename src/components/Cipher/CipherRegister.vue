<template>
  <div>
    <b-container>
      <b-row class="my-4 ">
        <b-col sm="2" >
          <label for="input-default">Cantor:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input id="input-default" v-model="singer"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-4">
        <b-col sm="2">
          <label for="input-default">Título da música:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input id="input-default" v-model="title"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-4">
        <b-col sm="2">
          <label for="input-default">Música:</label>
        </b-col>
        <b-col sm="10">
          <b-form-textarea id="textarea-rows" rows="12" v-model="text" ></b-form-textarea>
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
        text: ''
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
  width:85% /* value of your choice which suits your alignment */
  
}

#input-default, #textarea-rows{
  background-color: #c4c4c4;
}

</style>