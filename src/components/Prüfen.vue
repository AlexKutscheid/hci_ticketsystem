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
            <v-card style="margin-left:1em; padding-top:1em" variant="outlined">

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

        <v-row>        
                <v-col cols="3"></v-col>
                <v-col cols="1">
                  <h3 style="margin-right:1em">Porta</h3>
                </v-col>
                <v-col cols="4"></v-col>
                <v-col cols="2">
                  <h3 style="margin-right:2em">Campus 2</h3>
                </v-col>

                <v-col>
                </v-col>
        </v-row>

        <v-row justify="space-between" class="text-center">
                <v-col cols="1"></v-col>
                <v-col cols="1">
                    <v-btn block color="blue-grey" style="margin-left:1em">3</v-btn>
                </v-col>
                <v-col cols="1">
                    <v-icon style="margin-top:0.3em">mdi-arrow-right-bold</v-icon>
                </v-col>
                <v-col cols="1">
                    <v-btn block color="blue-grey">4</v-btn>
                </v-col>
                <v-col cols="1"></v-col>
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
            <v-card style="margin-left:1em; padding-top:1em" variant="outlined">

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
          name: 'PrüfenView ',
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