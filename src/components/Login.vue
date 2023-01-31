<template>

    
    <v-container>
        <v-row justify="space-between" class="text-center">
        <v-col cols="2"></v-col>
        <v-col cols="8">
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
  
                <v-tab>
                    <h2>Anmeldedaten</h2>
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
        <v-col cols="2"></v-col>
      </v-row>
        <v-row>
        </v-row>
        <v-row>
            <v-col></v-col>
        </v-row>
        <v-row>
            <v-col></v-col>
        </v-row>
        <v-row>
            <v-col></v-col>
        </v-row>
        <v-row>
            <v-col></v-col>
        </v-row>
        <v-row>
            <v-col></v-col>
        </v-row>
        <v-row>
            <v-col></v-col>
        </v-row>
    

        <v-row> 
            <v-col cols="2"></v-col>
            <v-col cols="8">
                <v-card variant="outlined">
                    <v-divider></v-divider>
                    <v-card-text style="margin-top:2em"> <v-text-field label="Benutzername"></v-text-field> </v-card-text>
                    
                    <v-card-text  style="margin-bottom:1em"> <v-text-field type="password" label="Passwort"></v-text-field> </v-card-text>
                    <v-card-text>
                        <v-row>
                            <v-col cols="2">
                                <v-btn color="indigo darken-4" to="/admin">Admin</v-btn>
                            </v-col>
                            <v-spacer></v-spacer>
                            <v-col style="padding-left:4em" cols="2">
                                <v-btn color="indigo darken-4"  to="/home">User</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                 </v-card>
            </v-col>
            <v-col cols="2"></v-col>
        </v-row>

        <v-footer app bottom fixed padless

            class="bg-indigo darken-4 text-center d-flex flex-column">
    
            <div class="pt-0">
                We're no strangers to love
                You know the rules and so do I (do I)
                
            </div>

            <v-divider></v-divider>

            <div>
                25.10.2009 — <strong>Rick Astley</strong>
            </div>
        </v-footer>

    </v-container>


</template>
        
  <script>
      export default ({
          name: 'LoginV',
      });
  </script>
