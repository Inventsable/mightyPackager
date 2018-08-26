loadUniversalJSXLibraries();
console.log(appUI);

window.Event = new class {
  constructor() {
    this.vue = new Vue()
  }
  fire(event, data = null) {
    this.vue.$emit(event, data);
  }
  listen(event, callback) {
    this.vue.$on(event, callback);
  }
}

// Event.fire('applied', 'hello there');

var app = new Vue({
  el: '#app',
  data : {
    msg : "Hello there"
  },
  created() {
  },
  methods : {
    }
  },
});
