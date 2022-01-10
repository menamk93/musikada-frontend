<template>
  <div class="singer">
    <div>
        <img style="width: 100px; float: left; padding-left: 10px" :src="dados[9].image" fluid alt="Responsive image" />
    </div>
    <div class="singerData">
        <ul>
            <li>{{ dados[9].name }}</li>
            <li style="color:#f0833b">{{ dados[9].title[3] }}</li>
            <li>Tom-C</li>
        </ul>
         
    </div>
    
  </div>
</template>

<script>

import axios from "axios"

export default {
    name: 'TopSinger',
    data(){
        return {
            dados:[],
        };
    },

    async created() {
        try {
        const res = await axios.get("http://localhost:3000/dados");

        this.dados = res.data;
        
        } catch (e) {
        console.error(e); 
        }
    }

}
</script>

<style scoped>

.singerData {
    float: left;
    padding-left: 10px;
    padding-top: 10px;
    text-align: initial;
    
}
ul li {
    list-style-type: none;
     
}

</style>>