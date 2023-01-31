<template>
    <AdminAnpassenV />
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import AdminAnpassenV from '../components/AdminAnpassen.vue';
  
  export default defineComponent({
    name: 'AdminAnpassen',
  
    components: {
        AdminAnpassenV,
    },
  });
  </script>
  