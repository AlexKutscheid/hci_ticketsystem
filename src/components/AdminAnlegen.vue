<template>


    <v-container fluid>
    
        <v-row justify="space-between" class="text-center">
          <v-col cols="12">
            <v-card>
               <v-tabs
                  fixed-tabs
                  
                  bg-color="cyan darken-2"
                  slider-color="black"
                >
                  <v-tab disabled>
                    
                  </v-tab>
    
                  <v-tab disabled>
                    
                </v-tab>
    
                <v-tab disabled>
                    
                </v-tab>
    
                  <v-tab @click="state=3">
                    <h2>Admin - Ticket anlegen</h2>
                  </v-tab>
    
                  <v-tab disabled>
                    
                </v-tab>
    
                <v-tab disabled>
                    
                </v-tab>
    
                <v-tab disabled>
                    
                </v-tab>
    
                </v-tabs>
              </v-card>
          </v-col>
        </v-row>
    
        <v-row justify="space-between" class="text-center">
          <v-col cols="2">
            <v-card style="margin-top:14px; width: min-content;">
              <v-layout>
                <v-navigation-drawer color="cyan darken-2">
                  <v-list>
                    <v-list-item
                      prepend-avatar="https://randomuser.me/api/portraits/men/42.jpg"
                      title="Clifford Romero"
                    >
                    </v-list-item>
                  </v-list>
    
                  <v-divider thickness="5"></v-divider>
                  
                  <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-magnify" title="Verbindungen suchen" value="shared" to="/admin"></v-list-item>
                    <v-list-item prepend-icon="mdi-autorenew" title="Ticket anpassen" value="shared" to="anpassen"></v-list-item>
                    
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


            
            <v-container fluid>
    
    <v-card variant="outlined" cols="10" style="padding-left:10px">

        <v-row justify="space-between" class="text-center"> 
            <v-col>
                <h4 style="padding-top:20px; padding-right:20px; text-align:start;">Verbindung:</h4>
            </v-col>
            <v-col>
                
            </v-col>
        </v-row>

        <v-row justify="space-between" class="text-center">
            <v-col>
                <v-text-field
                label="Von"
                prepend-icon="mdi-map-marker"
                >
                </v-text-field>
            </v-col>

            <v-col>
                <v-text-field
                solo
                label="Nach"
                prepend-icon="mdi-map-marker"
                style="margin-right:20px"
            >
            </v-text-field>
            </v-col>
        </v-row>

        <v-row justify="space-between" class="text-center">
            <v-col cols="2">
                <h4 style="padding-top:20px;  text-align:start">Zeitangaben:</h4>
            </v-col>
            <v-col cols="10">
                
            </v-col>
        </v-row>

        <v-row justify="space-between" class="text-center">
            <v-col>
                <v-text-field
                    prepend-icon="mdi-clock-time-four-outline"
                    label="Abfahrt"
                    type="time"
                >
                </v-text-field>
            </v-col>

            <v-col>
                <v-text-field
                    prepend-icon="mdi-clock-time-seven-outline"
                    label="Ankunft"
                    type="time"
                    style="margin-right:20px"
                >
                </v-text-field>
            </v-col>
        </v-row>

        <v-row justify="space-between" class="text-center">
            <v-col cols="6">
                <h4 style="padding-top:20px;  text-align:start">Tarifzonen:</h4>
            </v-col>
    
        </v-row>



        <v-row justify="space-between" class="text-center">
            <v-col cols="6">
                <v-select
                    
                    prepend-icon="mdi-map"
                    label="Zone A"
                    :items="['Zone  1', 'Zone  2', 'Zone  3', 'Zone  4', 'Zone  5', 'Zone  6']"
                >
                </v-select>
            </v-col>
            <v-col cols="6">
              <v-select
              style="margin-right:20px"
                    prepend-icon="mdi-map"
                    label="Zone B"
                    :items="['Zone 1', 'Zone  2', 'Zone  3', 'Zone  4', 'Zone  5', 'Zone  6']"
                >
                </v-select>
            </v-col>
        </v-row>

        <v-row justify="space-between" class="text-center">
            <v-col cols="6">
                <h4 style="padding-top:20px;  text-align:start">Preisklasse:</h4>
            </v-col>
    
        </v-row>

        <v-row justify="space-between" class="text-center">
            <v-col cols="6">
                <v-select
                    prepend-icon="mdi-currency-eur"
                    label="Tarif"
                    :items="['Tarif 1', 'Tarif 2', 'Tarif 3', 'Tarif 4', 'Tarif 5', 'Tarif 6']"
                >
                </v-select>
            </v-col>
            <v-col cols="6">
                <v-text-field
                solo
                label="Ticketnummer"
                prepend-icon="mdi-ticket-confirmation-outline"
                style="margin-right:20px"
            >
            </v-text-field>
            </v-col>
        </v-row>

    

        

        

        <v-row justify="space-between" class="text-center">
            <v-col cols="10">

            </v-col>
            <v-col cols="2">
                <div style="margin-right:1.2em">
                <v-btn block color="indigo darken-4" rounded="lg" style="margin-bottom:20px;">
                    Anlegen
                </v-btn>
                </div>
            </v-col>
        </v-row>

    </v-card>
</v-container>
            

            
          </v-col>
    





        </v-row>
      </v-container>
    
    </template>
    
    
    <script>
    
    export default {
      name: 'AdminAnlegen',
    }
    </script>
    