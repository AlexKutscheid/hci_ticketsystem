<template>
    <TicketHinzufügen />
</template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  import TicketHinzufügen from '../components/TicketsHinzufügen.vue'
  
  export default defineComponent({
    name: 'TicketsHinzufügenView',
  
    components: {
      TicketHinzufügen,
    },
  });
  </script>
  