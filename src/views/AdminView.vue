<template>
    <AdminStartV />
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import AdminStartV from '../components/AdminStart.vue';
  
  export default defineComponent({
    name: 'AdminView',
  
    components: {
      AdminStartV,
    },
  });
  </script>
  