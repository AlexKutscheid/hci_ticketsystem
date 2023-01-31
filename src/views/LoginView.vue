<template>
    <LoginV />
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import LoginV from '../components/Login.vue';
  
  export default defineComponent({
    name: 'LoginView',
  
    components: {
      LoginV,
    },
  });
  </script>
  