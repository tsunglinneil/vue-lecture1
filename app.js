var vm1 = new Vue({
	el: '#app1',
  data: {
  	title: 'Vue First Instance & Showing Lifecycle'
  },
  beforeCreate: function() {
  	console.log('beforeCreate()');
  },
  created: function() {
  	console.log('created()');
  },
  beforeMount: function() {
  	console.log('beforeMount()');
  },
  mounted: function() {
  	console.log('mounted()');
  },
  beforeUpdate: function() {
  	console.log('beforeUpdate()');
  },
  updated: function() {
  	console.log('updated()');
  },
  beforeDestroy: function() {
  	console.log('beforeDestroy()');
  },
  destroyed: function() {
  	console.log('destroyed()');
  },
  methods: {
  	destroy: function() {
    	this.$destroy();
    }
  }
});

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'Vue Second Instance'
  },
  methods: {
    onChange: function() {
      vm1.title = 'Changed By Vue 2!';
    }
  }
});

var vm3 = new Vue({
	template: '<h1>Vue Third Instance by mounting template</h1>'
});

vm3.$mount("#app3");