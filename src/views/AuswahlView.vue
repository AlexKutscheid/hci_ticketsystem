<template>
    <AuswahlV />
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import AuswahlV from '../components/Auswahl.vue';
  
  export default defineComponent({
    name: 'AuswahlView',
  
    components: {
      AuswahlV,
    },
  });
  </script>
  