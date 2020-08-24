import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: "Hello from VueX",
    count: 0
  },
  mutations: { // sync ONLY
    increment(state,payload) {
      state.count+=payload;
    },
    decrement(state,payload) {
      state.count-=payload;
    }
  },
  actions: { // async ONLY
    
    increment(state,payload) {
      state.commit('increment',payload);
    },
    decrement(state,payload) {
      state.commit('decrement',payload);
    }
    
  },
  getters: {
    message(state) {
      return state.message.toUpperCase();
    },
    counter(state)  {
      return state.count;
    }
  },
  methods: { // these don't work
    increaseCount() {
     this.$store.dispatch('increment', 10);
    },
    decrementCount() {
      this.$store.dispatch('decrement',10);
    }
  },
  modules: {}
});

