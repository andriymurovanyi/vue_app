<template>
  <div :style="setColor">
    <div v-if="show" class="bg-dark collapse show" id="navbarHeader" :style="setColor">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-md-7 py-4">
            <h4 class="text-white">About</h4>
            <p class="text-muted">Some info about future app will be here.
              Click on white square helps you to choose header color theme</p>
          </div>
          <div class="col-sm-4 offset-md-1 py-4">
            <h4 class="text-white">Contact</h4>
            <ul class="list-unstyled">
              <li><a href="#" class="text-white">Follow on Twitter</a></li>
              <li><a href="#" class="text-white">Like on Facebook</a></li>
              <li><a href="#" class="text-white">Email me</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar navbar-dark box-shadow" >
      <div class="container d-flex justify-content-between" >

        <a href="https://google.com"
           class="navbar-brand d-flex align-items-center"
           target="_blank"
        >

          <img src="../assets/img/logo.png" alt="logo" width="50px" height="50px">
        </a>
        <header-swatch v-model="color" class="bordered rounded"></header-swatch>
        <button class="navbar-toggler collapsed mr-3"
                type="button" data-toggle="collapse"
                data-target="#navbarHeader"
                aria-controls="navbarHeader"
                aria-expanded="false"
                aria-label="Toggle navigation"
                @click="show = !show"
        >
          <span class="navbar-toggler-icon"></span>
      </button>

      </div>
    </div>
  </div>
</template>

<script>
  import Swatches from 'vue-swatches'

  // Import the styles too, globally
  import "vue-swatches/dist/vue-swatches.min.css"


  export default {
    data(){
      return{
        color: '#343a40'
      }
    },

    props: {
      show: false,
    },

    methods: {

    },

    computed:{
      setColor(){
        let background = this.color;

        return {background}
      }
    },

    components:{
      headerSwatch: Swatches
    }


  }

</script>


<style scoped>
  .show{
    display: block;
  }

  .bordered{
    border: 2px solid beige;
  }
</style>
