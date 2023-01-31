<template>
    <AdminAnlegenV />
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import AdminAnlegenV from '../components/AdminAnlegen.vue';
  
  export default defineComponent({
    name: 'AdminAnlegen',
  
    components: {
        AdminAnlegenV,
    },
  });
  </script>
  