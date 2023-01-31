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
                    <h2>Admin</h2>
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
                    <v-list-item prepend-icon="mdi-autorenew" title="Ticket anpassen" value="shared" to="/anpassen"></v-list-item>
                    <v-list-item prepend-icon="mdi-newspaper-plus" title="Ticket anlegen" value="starred" to="/anlegen" ></v-list-item>
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
            <v-col cols="9">

            </v-col>
            <v-col>
                <v-btn color="indigo darken-4" rounded="lg" style="margin-bottom:20px">
                    Verbindung suchen
                </v-btn>
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
      name: 'AdminStart',
    }
    </script>
    