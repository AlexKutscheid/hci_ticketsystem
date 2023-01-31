<template>


<v-container fluid>

  <v-row justify="space-between" class="text-center">
    <v-col cols="2">
      <v-card style="margin-top:14px; width: min-content;">
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
              <v-list-item prepend-icon="mdi-magnify" title="Suchen" value="myfiles" to="/home" ></v-list-item>
              <v-list-item prepend-icon="mdi-ticket-confirmation-outline" title="Tickets ansehen" value="shared" to="/showTickets"></v-list-item>
              <v-list-item prepend-icon="mdi-plus-box-outline" title="Ticket hinzufügen" value="starred" to="/addTickets"></v-list-item>
            </v-list>

            <template v-slot:append>

              <div class="pa-2">
                <v-btn block color="indigo darken-4" to="/"> 
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
         
  
  
  
  
  
           
           <v-container fluid>
        <v-card variant="outlined" cols="10" style="padding-left">
          
          <!--hier-->
          <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
      style="margin-top:2em"
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name der reisenden Person"
        required
      ></v-text-field>
  
      <v-text-field
        v-model="auftragsnummer"
        :rules="numberRules"
        label="Auftragsnummer"
        type = "number"
        required
      ></v-text-field>
      
      <v-row>
        <v-col cols="10"></v-col>
      <v-col>
        <v-btn
        color="indigo darken-4"
        class="me-4"
        @click="validate"
        style="margin-bottom:1em"
      >
        Suchen
      </v-btn>  
      </v-col>
      
      
    </v-row>

    </v-form>
          <!---->
           
        </v-card>
          </v-container>
           
           
          </v-col>
    
        </v-row>
      </v-container>
      
    
    </template>
  
    
        
  <script>
      export default ({
          name: 'TicketsHinzufügen ',
      });
  </script>