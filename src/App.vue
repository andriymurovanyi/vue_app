<template>
  <div>
    <app-header></app-header>

    <div class="container pt-5">
      <div class="row">
        <div class="col">
          <h1>Developers</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="form-group">
            <label for="search">Search</label>
            <input type="text"
                   class="form-control"
                   id="search"
                   placeholder="Developer name ..."
                   v-model="search"
            >
            <app-progress :val="search.length"
                          :max="maxValue"
                          class="mt-2"
            ></app-progress>
          </div>
          <hr>
          <ul class="list-group">
            <li v-for="(developer, index) in filterDevs"
                class="list-group-item list-group-item-action pointer"

                @click="selectDev(index)"
                :class="{'active': currentIndex === index}">
              {{developer.name}}
            </li>
          </ul>
        </div>
        <div class="col-md-8 pt-4">
          <div class="row">
            <div class="col-md-5">
              <h2>{{developer.name}}</h2>
              <!-- v-bind - : -->
              <!--  -->
              <img
                :src="require(`${developer.photo}`)"
                :alt="developer.name"
                class="rounded dev_photo">

            </div>
            <div class="col-md-7 pt-2">
              <h5>About developer</h5>
              <ul>
                <li>Company - <strong>{{developer.company}}</strong></li>
                <li>Product - <strong>{{developer.product}}</strong></li>
                <li>Occupation - <strong>{{developer.occupation}}</strong></li>
              </ul>
              <div class="block">
                <transition name="slide">
                  <p v-if="showLink"
                     class="alert alert-success"
                  >
                    To see more - click <a
                    :href="developer.link"
                    target="_blank"

                  >here</a></p>
                </transition>
              </div>
              <p>To cooperate - <strong>a button below :) </strong></p>
              <button @click="showLink = !showLink"
                      class="btn btn-primary rounded"
                      v-text="changeButton"></button>
              <button  class="btn btn-outline-success rounded mr-3"
                       @click="showModal = true"
              >Cooperate</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade show" tabindex="-1" role="dialog" v-if="showModal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Want to cooperate ? </h5>
              <button type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      @click="showModal = false"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>"Show link" button helps you to redirect on Wiki for further details</p>
            </div>
            <div class="modal-footer">
              <button type="button"
                      class="btn btn-success"
                      data-dismiss="modal"
                      @click="showModal = false"
              >Ok</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop fade show" v-if="showModal"></div>
    </div>
  </div>
</template>

<script defer>
  import Progress from "./components/progress"
  import Header from "./components/header"

  const developer = (name, company, occupation, product, photo, link) =>
                    ({name, company, occupation, product, photo, link});

  const developers = [
    developer("Jade Raymond",
      "Ubisoft",
      "Director",
      "Assassin's Creed Unity",
      "./assets/img/raymond.jpg",
      "https://en.wikipedia.org/wiki/Jade_Raymond"),

    developer(
      "Gabe Newell",
      "Valve",
      "Director",
      "Dota 2",
      "./assets/img/gabe.jpg",
      "https://en.wikipedia.org/wiki/Gabe_Newell"),

    developer("Guido van Rossum",
      "python.org",
      "Director",
      "Python",
      "./assets/img/rossum.jpg",
      "https://en.wikipedia.org/wiki/Guido_van_Rossum")

  ];
  export default {

    data(){
      return{
        developers: developers,
        developer: developers[0],
        currentIndex: 0,
        showLink: false,
        search: "",
        showModal: false,
        maxValue: 10,
      }
    },

    methods:{
      selectDev: function (index) {
        console.log("Click", index);
        this.developer = developers[index];
        this.currentIndex = index;
      }
    },
    computed:{
      changeButton(flag) {
        return this.showLink ? "Hide link": "Show link"
      },

      filterDevs() {
        return this.developers.filter(item => {
          return ~item.name.indexOf(this.search) ||
            ~item.company.indexOf(this.search)
        })
      },

      done(){
        return this.search.length >= this.maxValue
      },
    },
    components: {
      AppProgress: Progress,
      appHeader: Header,
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: url(assets/img/first_bg.gif);
  }

  .dev_photo{
    height: 200px;
    width: 270px;
  }

  .pointer{
    cursor: pointer;
  }

  .block{
    height: 50px;
  }

  .modal{
    display: block;
  }

  .slide-enter{
    opacity: 0;
  }

  .slide-enter-active{
    transition: opacity 0.5s;
  }

  .slide-leave-active{
    transition: opacity 0.5s;
  }

  .slide-leave-to{
    opacity: 0;
  }

  .progress{
    border: aqua 1px solid;
  }
</style>
