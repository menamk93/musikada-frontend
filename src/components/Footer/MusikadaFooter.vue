<template>
  <div class="footer">
    <div class="footer-left">
      <div class="footer-logo-menu">
        <div class="footer-logo">
          <b-img style="cursor: pointer;" @click="gotToHome" src="@/assets/images/logo.png" fluid alt="Fluid image"></b-img>
        </div>
        <div class="footer-menu">
          <h5>Musikada</h5>
          <div class="menus">
            <ul>
              <li><router-link style="color:white" :to="{name: 'Home'}">Home</router-link></li>
              <li><router-link style="color:white" :to="{name: 'AboutUsView'}">Sobre nós</router-link></li>
              <li>Termos e Políticas</li>
              <li><a style="color:white" href="http://www.google.com" target="_blank">Testando</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright-redes">
        <div class="footer-copyright">
          <p>Copyright © 2019 - Todos direitos reservados a Musikada</p>
        </div>
        <div class="footer-redes">
          <h5>Siga-nos</h5>
          <div class="redes" style="font-size: 1.5rem">
            <div class="facebook"><a href="http://www.facebook.com" target="_blank"><img src="@/assets/images/facebook_icon.png"></a></div>
            <div class="instagram"><img src="@/assets/images/instagram_icon.png"></div>
            <!-- <div class="linkedin"><img src="../assets/images/instagram.png"></div> -->
            <div class="linkedin"><img src="@/assets/images/linkedin-icon.jpg"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-right">
      <div class="para-organizadores">
        <h5>Para organizadores de evento</h5>
        <ul>
          <li>Como funciona</li>
          <li>Serviços</li>
        </ul>
      </div>
      <div class="central-ajuda">
        <h5>Central de ajuda</h5>
        <p>Fale conosco</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusikadaFooter",
  data() {
    return {};
  },
  methods:{
    gotToHome(){
      this.$router.push({name:"Home"});
    },
  }

};



</script>
<style scoped>
.footer {
  background-color: black;
  color: white;
  display: flex;
  flex-direction: row;
  text-align: center;
  padding: 25px;
  justify-content: space-between;
}
.footer-right {
  width: 50%;
  float: right;
  display: flex;
  justify-content: space-between;
}
.footer-logo-menu {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
}
.footer-menu, .para-organizadores, .central-ajuda{
  text-align: left;
}
.footer-menu ul, .para-organizadores ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: right;
}
.footer-menu ul li:hover{
  cursor: pointer;
}
.para-organizadores ul li:hover{
  cursor: pointer;
}
.central-ajuda p:hover{
  cursor: pointer;
}
.footer-copyright-redes {
  display: flex;
   justify-content: space-between;
}
.footer-copyright{
  text-align: unset;
  margin-top: 20%;
}
.footer-copyright p{
  margin: 0;
}
.footer-redes {
  padding-right: 20px;
}
.redes {
  display: flex;
 
}
.footer-redes h5, .footer-menu h5, .central-ajuda h5, .para-organizadores h5{
  font-weight: bold;
}
.facebook,
.instagram,
.linkedin {
  padding-right: 15px;
}
.facebook,
.instagram,
.linkedin,
.twitter :hover{
  cursor: pointer;
}
.img-fluid {
  max-width: 100px;
  height: auto;
}

    
    .redes img {
      position:relative;
      top:50%;
      left:50%;
      margin-top:-50px;
      margin-left: -13px;
      width: 25px;
      /* border-radius: 30px; */
      
    }
    
    .linkedin img{
        /* background-color: #00acee;
        position:relative;
        overflow:hidden;
        width:25px;
        height:25px;
        clear:both;
        padding-top:10px;
        border:1px solid #000; */
        border-radius: 5px;
    }

    ul li router-link{
      color: white;
      background-color: aliceblue;
    }
</style>