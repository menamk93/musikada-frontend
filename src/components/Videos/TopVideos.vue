<template>
  <b-container fluid class="p-4" id="video-frame"> 
    <h6>Covers</h6>

    <b-row class="video">
      <b-col>
        <carousel
            :autoplayHoverPause='true'
            :navigationEnabled="true"
            :paginationEnabled="false"
            :perPageCustom = "[[508, 2], [1000, 3]]" 
            :loop='true'
            :scrollPerPage='false'
            :centerMode='true'
            :navigationClickTargetSize=0     
        >
          <slide v-for="(video, index) in videos" :key="index.id" id="videocard">
            <b-embed
              type="iframe"
              aspect="16by9"
              title="Pyromane"
              :src="video.video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            ></b-embed>
          </slide>
        </carousel>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import VideoModel from "../../model/VideoModel"

export default {
  name: "TopVideos",
    data() {
    return{
      videos: []
    }
  },

  async created(){
    this.videos = await VideoModel.get()
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

#videocard{
  padding-right: 10px;
}

</style>
