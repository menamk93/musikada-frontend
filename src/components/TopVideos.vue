<template>
  <b-container fluid class="p-4" id="video-frame"> 
    <h6>Covers</h6>
    <b-row class="video">
      <b-col>
        <b-embed
          type="iframe"
          aspect="16by9"
          title="Pyromane"
          src="https://www.youtube.com/embed/_gqolE5uFDI?start=5"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></b-embed>
      </b-col>
      <b-col>
        <b-embed
          type="iframe"
          aspect="16by9"
          src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
          allowfullscreen
        ></b-embed>
      </b-col>
      <b-col>
        <b-embed
          type="iframe"
          aspect="16by9"
          src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
          allowfullscreen
        ></b-embed>
      </b-col>
      <b-col>
        <b-embed
          type="iframe"
          aspect="16by9"
          src="https://www.youtube.com/embed/JJSUT7VfF08?start=5"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></b-embed>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "TopVideos",
    data() {
    return{
      
    }
  },
};
</script>
<style scoped>
.video-home {
  margin-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  text-align: center;
}
/* .video  {
  
} */

#video-frame {
  background-color: #CCCCCC;
  flex-direction: row;
  text-align: center;
}

h6 {
  padding-bottom: 5px;
  font-size: 1.5vw
}

</style>
