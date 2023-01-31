<template>
    <TicketsAnsehen />
  </template>
  
  <script>
  import { defineComponent } from 'vue';

  // Components
  import TicketsAnsehen from '../components/TicketsAnsehen.vue';
  
  export default defineComponent({
    name: 'TicketsAnsehenView',
  
    components: {
    TicketsAnsehen
},
  });
  </script>
  