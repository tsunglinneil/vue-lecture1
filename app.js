new Vue({
  el: '#app',
  data: {
    greet: 'Hello World',
    name: 'Louis'
  },
  methods: {
    //ES5
    greeting1: function() {
      return 'Greeting 1: ' + this.greet + ' ! ' + this.name + ' ~';
    },
    //ES6
    greeting2() {
      return `Greeting 2: ${this.greet} ! ${this.name} ~`;
    }
  }
});
