/* global Vue, axios*/

Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.title }}. Completed {{ todo.completed }}</li>",
});

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      todos: [],
    };
  },
  methods: {
    loadTodos: function () {
      axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
        console.log(response.data);
        this.todos = response.data;
      });
    },
  },
  beforeMount() {
    this.loadTodos();
  },
});
