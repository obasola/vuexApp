
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style    src="./style.css"></style>
<template src="./hwTemplate.html"></template>

<script>

export default {
 data() {  
   return {
     welcome: 'Hello Darryl',
   };
 },
 computed: {
   message() {
     
     //return this.$store.state.message;
     return this.$store.getters.message;
   },
   count() {
     return this.$store.getters.counter;
   }
 },
 methods: {
  inclicked() {       
       //return this.$store.commit('increment',8); 
       return  this.$store.dispatch('increment', 10);
  },
   declicked() {
       this.$store.dispatch('decrement',10);    
       //return this.$store.commit('decrement',8);     
  }
 }
};
</script>

