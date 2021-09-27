var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Calculator APP",
      numberOne: 0,
      numberTwo: 0,
      numberThree: 0,
      sum: 0,
    };
  },
  methods: {
    computeSum: function () {
      this.sum = parseInt(this.numberOne) + parseInt(this.numberTwo) + parseInt(this.numberThree);
    },
    computeSubtract: function () {
      this.sum = parseInt(this.numberOne) - parseInt(this.numberTwo) - parseInt(this.numberThree);
    },
  },
});
