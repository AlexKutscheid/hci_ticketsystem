<template>
    <v-container fluid>
  
  <v-card elevation="15" color="grey" variant="outlined" cols="10" style="padding-left:1em;">
  
      <v-row justify="space-between" class="text-center"> 
          <v-col cols="2">
              <h4 style="padding-top:10px; text-align:left"> Von: Trier Hbf. </h4>
          </v-col>
      </v-row>
  
      <v-row justify="space-between" class="text-center"> 
          <v-col cols="2">
              <h4 style="padding-bottom: 20px ; text-align:left"> Nach: Universität, Trier </h4>
          </v-col>
      </v-row>
  
      
  
  
  
          <v-card elevation="15" color="black" variant="outlined" style="margin-top: 10px; margin-bottom: 2em; margin-right: 1em;">
  
              <v-row justify="space-between" class="text-center"> 
              <v-col cols="2">
                  <h4 style="padding-top:20px">Verbindungen</h4>
              </v-col>
              <v-col cols="10">
                  
              </v-col>
              </v-row>
  
              <v-row justify="space-between" class="text-center"> 
              <v-col cols="2">
                  <v-btn color="black" variant="outlined" size="small">Früher <v-icon size="x-large">mdi-menu-up</v-icon></v-btn>
              </v-col>
              <v-col cols="10">
                  
              </v-col>
              </v-row>
              
  
          <v-card variant="outlined" style = "margin-top: 20px; margin-bottom: 15px; margin-left: 3.9em; margin-right: 40px;">
  
              <v-row justify="space-between" class="text-center">
                  <v-col cols="4">
                      <h4 style="text-align:start;" >13:57 - 14:19 (0h 25min) , 1 Umstieg(e)</h4>
                  </v-col>
                  <v-col>
                  </v-col>
              </v-row>

              <v-row justify="space-between" class="text-center">
                <v-col cols="1">
                    <v-btn block color="blue-grey" style="margin-left:1em">3</v-btn>
                </v-col>
                <v-col cols="1">
                    <v-icon style="margin-top:0.3em">mdi-arrow-right-bold</v-icon>
                </v-col>
                <v-col cols="1">
                    <v-btn block color="blue-grey">14</v-btn>
                </v-col>

                <v-col cols="7">
                </v-col>
                <v-col>
                    <v-btn color="indigo darken-4" block @click="changeState(3)">
                       Ticket wählen 
                    </v-btn>
                </v-col>

              </v-row>

              <v-row justify="space-between" class="text-center">
                  <v-col cols="1">
                      <h4 style="margin-left:1.5em;text-align:center">Karl-Marx-Haus</h4>
                  </v-col>
                  <v-col cols="1"></v-col>
                  <v-col cols="1">
                    <h4 style="text-align:center">Campus 2</h4>
                  </v-col>
                  <v-col></v-col>
              </v-row>

          </v-card>
  
          <v-card  variant="outlined" style = "margin-top: 20px; margin-bottom: 15px; margin-left: 3.9em; margin-right: 40px;">
              
            <v-row justify="space-between" class="text-center">
                  <v-col cols="4">
                      <h4 style="text-align:start;" >14:03 - 14:34 (0h 34min) , 1 Umstieg(e)</h4>
                  </v-col>
                  <v-col>
                  </v-col>
              </v-row>

              <v-row justify="space-between" class="text-center">
                <v-col cols="1">
                    <v-btn block color="blue-grey" style="margin-left:1em">3</v-btn>
                </v-col>
                <v-col cols="1">
                    <v-icon style="margin-top:0.3em">mdi-arrow-right-bold</v-icon>
                </v-col>
                <v-col cols="1">
                    <v-btn block color="blue-grey">4</v-btn>
                </v-col>

                <v-col cols="7">
                </v-col>
                <v-col>
                    <v-btn color="indigo darken-4" block @click="changeState(3)">
                       Ticket wählen 
                    </v-btn>
                </v-col>
                
              </v-row>

              <v-row justify="space-between" class="text-center">
                  <v-col cols="1">
                      <h4 style="margin-left:1.5em;text-align:center">Porta</h4>
                  </v-col>
                  <v-col cols="1"></v-col>
                  <v-col cols="1">
                    <h4 style="text-align:center">Campus 2</h4>
                  </v-col>
                  <v-col></v-col>
              </v-row>
  
          </v-card>  
         
          
  
          <v-row justify="space-between" class="text-center" style="margin-bottom:1em"> 
              <v-col cols="2">
                  <v-btn color="black" style="margin-right:0.5em; margin-top:0.4%" variant="outlined" size="small">Später <v-icon size="x-large">mdi-menu-down</v-icon></v-btn>
              </v-col>
              <v-col cols="10">
                  
              </v-col>
              </v-row>
      </v-card>
      
      <v-row>
                <v-col cols="1"><v-btn style="margin-bottom:1em" variant="flat" color="grey lighten-4" @click="changeState(1)">Zurück</v-btn></v-col>
              </v-row>
  </v-card>
  </v-container>
  </template>
        
  <script>
      export default ({
          name: 'AuswahlView',
          methods: {
            changeState(newState) {
                this.$emit('changeState', newState)
            }
        }
      });
  </script>
        