const developer = (name, company, occupation, product, photo, link) => ({name, company, occupation, product, photo, link});
const developers = [
  developer("Jade Raymond",
      "Ubisoft",
      "Director",
      "Assassin's Creed Unity",
      "./img/raymond.jpg",
      "https://en.wikipedia.org/wiki/Jade_Raymond"),
  developer(
      "Gage Newell",
      "Valve",
      "Director",
      "Dota 2",
      "./img/gabe.jpg",
      "https://en.wikipedia.org/wiki/Gabe_Newell"),
  developer("Guido van Rossum",
      "python.org",
      "Director",
      "Python",
      "./img/rossum.jpg",
      "https://en.wikipedia.org/wiki/Guido_van_Rossum")

];


new Vue({
    el: "#app",

    data: {
        developers: developers,
        developer: developers[0],
        currentIndex: 0,
        showLink: false
    },

    methods:{
        selectDev: function (index) {
            console.log("Click", index);
            this.developer = developers[index];
            this.currentIndex = index;
        }
    }
});
