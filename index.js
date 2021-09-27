/* global Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      fruits: ["apple", "banana", "cantaloupe", "blueberries"],
      newFruit: "",
    };
  },
  methods: {
    changeMessage: function () {
      this.message = "New message";
    },
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
    addNewFruit: function () {
      console.log("hello", this.newFruit);
      this.fruits.push(this.newFruit);
      this.newFruit = "";
    },
  },
});

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [{ text: "Learn JavaScript" }, { text: "Learn Vue" }, { text: "Build something awesome" }],
  },
});
