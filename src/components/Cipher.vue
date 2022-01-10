<template>
  <div class="cifras-container">
    <div class="cifras">
      <div class="cantor">
        <b-container class="bv-example-row">
          <b-row> 
            <b-col cols="2">
              <h2 id="number"> {{number}}</h2>
            </b-col>
            <b-col cols="10">
                <h6>{{ singerName }}</h6>
                <p>{{ songTitle }}</p> 
            </b-col>
          </b-row>
        </b-container>

       <!--  <div><h2> {{number}}</h2></div>
         <div>
          <h6>{{ singerName }}</h6>
          <p>{{ songTitle }}</p>
         </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cipher",
  props: ["number", "singerName", "songTitle"],
  data() {
    return {};
  },
};
</script>
<style scoped>
.cifras-container{
  padding-bottom: 10px;
  margin-left: 20px;
  
}

.cifras {
  background-color: #c4c4c4; 
  overflow: auto;
  min-width: 10%; 
  max-width: 100%;
  /* margin-left: 60px; */
  
}

/* #number {
  font-size: 3vw;
} */

.cantor{
 padding-top: 20px;
 
}

.cantor p{
  color: #f0833b;
  opacity: 0.7;
}

.conteudo {
  padding-top: 20px;
  padding-bottom: 10px;
  justify-content: center;
  align-items: center;
  
}

p {font-size: 1.1vw;}

h6 {font-size: 1.5vw;}

h2 {font-size: 2.5vw;} 

</style>

