<template>
    <v-container>
      <v-card elevation="15">
        
        <v-row justify="space-between" class="text-center">
                  <v-col cols="3">
                      
                  </v-col>
                  <v-col>
                  </v-col>
        </v-row>


        <v-row>
          <v-col>
            <v-card elevation="3" style="margin-left:1em; padding-top:1em" variant="outlined">

              <v-row>        
                      <v-col>
                        <h3>4-Fahrten-Ticket</h3>
                      </v-col>
                    
                      <v-col cols="10"></v-col>
              </v-row>
              <v-row>        
                      <v-col>
                        <h3 style="text-align:left; padding-left:1em">9,30 EUR</h3>
                      </v-col>
                    
                      <v-col cols="10"></v-col>
              </v-row>

          </v-card>
        </v-col>
        <v-col cols="10"></v-col>
      </v-row>

      <v-row><v-col></v-col></v-row>
      <v-row><v-col></v-col></v-row>
      <v-row><v-col></v-col></v-row>
      <v-row><v-col></v-col></v-row>
      <v-row><v-col></v-col></v-row>

      <v-row>
        <v-col cols="2"></v-col>
        <v-col>

          <v-card elevation="7">
              <v-row>
                <v-col><h3>Porta</h3></v-col>
                <v-col><h3>Campus 2</h3></v-col>
              </v-row>
              <v-row>
                <v-col><v-btn color="blue-grey lighten-2">3</v-btn></v-col>
                <v-col><v-btn color="blue-grey lighten-2" style="margin-bottom:2em">4</v-btn></v-col>
              </v-row>  
          </v-card>

        </v-col>
        <v-col cols="2"></v-col>
      </v-row>

        
        




        <v-row justify="space-between" class="text-center"><v-col></v-col></v-row>
        <v-row justify="space-between" class="text-center"><v-col></v-col></v-row>
        <v-row justify="space-between" class="text-center"><v-col></v-col></v-row>
        <v-row justify="space-between" class="text-center"><v-col></v-col></v-row>

        <v-row justify="space-between" class="text-center">
                  <v-col cols="3">
                      
                  </v-col>
                  <v-col>
                  </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-card elevation="3" style="margin-left:1em; padding-top:1em" variant="outlined">

              <v-row>        
                      <v-col>
                        <h3>Paypal: adams@bsp.de</h3>
                      </v-col>
                    
                      <v-col cols="10"></v-col>
              </v-row>
              <v-row>        
                      <v-col>
                        <h3 style="text-align:left; padding-left:1em">Sandra Adams</h3>
                      </v-col>
                    
                      <v-col cols="10"></v-col>
              </v-row>

          </v-card>
        </v-col>
        <v-col cols="10"></v-col>
      </v-row>

        <v-row justify="space-between" class="text-center"><v-col></v-col></v-row>
        <v-row justify="space-between" class="text-center"><v-col></v-col></v-row>

        <v-row>        
                <v-col cols="10"></v-col>
                <v-col>
                    <v-btn style="margin-bottom:1em" color="indigo darken-4" @click="changeState(1)">Ticket buchen</v-btn>
                </v-col>   
        </v-row>

      </v-card>
    </v-container>

  </template>
        
  <script>
      export default ({
          name: 'Pr??fenView ',
          data: () => ({
            state: 0,
          }),
          methods: {
            changeState(newState) {
                this.$emit('changeState', newState)
            }
        }
      });
  </script>