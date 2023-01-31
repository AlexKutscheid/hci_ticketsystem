<template>


  <v-container fluid>
  
      <v-row justify="space-between" class="text-center">
        <v-col cols="12">
          <v-card elevation="15">
             <v-tabs
                fixed-tabs

                bg-color="cyan darken-2"
                slider-color="black"
                v-model="sliderModel"
              >
                <v-tab disabled>
                  <v-icon
                    size="large"
                    color="cyan darken-2"
                  >
                    mdi-domain
                  </v-icon>
                </v-tab>
  
                <v-tab @click="state=1">
                  Suche
                </v-tab>
  
                <v-tab @click="state=2">
                  Auswahl
                </v-tab>
  
                <v-tab @click="state=3">
                  Ticket
                </v-tab>
  
                <v-tab @click="state=4">
                  Zahlung
                </v-tab>
  
                <v-tab @click="state=5">
                  Prüfen & Buchen
                </v-tab>
  
              </v-tabs>
            </v-card>
        </v-col>
      </v-row>
  
      <v-row justify="space-between" class="text-center">
        <v-col cols="2">
          <v-card elevation="15" style="margin-top:14px; width: min-content;">
            <v-layout>
              <v-navigation-drawer color="cyan darken-2">
                <v-list>
                  <v-list-item
                    prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                    title="Sandra Adams"
                  >
                  </v-list-item>
                </v-list>
  
                <v-divider thickness="5"></v-divider>
  
                <v-list density="compact" nav>
                  <v-list-item prepend-icon="mdi-ticket-confirmation-outline" title="Tickets ansehen" value="shared" to="/showTickets"></v-list-item>
                  <v-list-item prepend-icon="mdi-plus-box-outline" title="Ticket hinzufügen" value="starred" to="/addTickets"></v-list-item>
                </v-list>
  
                <template v-slot:append>
                
                  <div class="pa-2">
                    <v-btn block color="indigo darken-4"  to="/"> 
                      Logout
                    </v-btn>
                  </div>
                </template>
  
              </v-navigation-drawer>
        
              <v-main style="height: 800px"></v-main>
            </v-layout>
          </v-card>
        </v-col>
          
        <v-col cols="10">
          <SucheView v-if="state==1" @changeState="changeState($event)"/>
          <AuswahlView v-if="state==2" @changeState="changeState($event)"/>
          <TicketView v-if="state==3" @changeState="changeState($event)"/>
          <ZahlungView v-if="state==4" @changeState="changeState($event)"/>
          <PrüfenView v-if="state==5" @changeState="changeState($event)"/>
        </v-col>
  
      </v-row>
    </v-container>
  
  </template>
  
  
  <script>
  import SucheView from './Suche.vue';
  import AuswahlView from './Auswahl.vue';
  import TicketView from './Ticket.vue';
  import ZahlungView from './Zahlung.vue';
  import PrüfenView from './Prüfen.vue';
  
  export default {
    name: 'HelloWorld',
    components: {
      SucheView,
      AuswahlView,
      TicketView,
      ZahlungView,
      PrüfenView,
    },
  
    data: () => ({
      state: 1,
      sliderModel: null,
    }),
    methods: {
      changeState(newState){
        this.state = newState;
        this.sliderModel=newState;
      }
    }
  }
  </script>
  