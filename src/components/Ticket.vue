<template>
           
    <v-container fluid>
        <v-row>
            <v-col>
                <v-card elevation="15" variant="outlined">
                    <v-row>
                        <v-col cols="2">
                            <v-card-title style="text-align:left" >Einzel-Ticket</v-card-title>    
                        </v-col>
                        <v-col cols="6" style="margin-right:2em"></v-col>
                        <v-divider thickness="4" vertical="true"></v-divider>
                        <v-col></v-col>
                        
                    </v-row>
                    
                    <v-row>
                        <v-col cols="3">
                            Gültig ab 30.01.2023 10:41 bis 30.01.2023 11:41
                            Von 1 Trier-City Nach 4 Trier-Südost, Preisstufe 2
                        </v-col>
                        <v-col cols="5" style="margin-right:2em">
                            Gültig für eine Person und Fahrt. Geltungsdauer Preisstufen 1-3: 1h, ab Preisstufe 4: 3h.
                            Nicht übertragbar, nur gültig in Verbindung mit einem gültigen Lichtbildausweis.
                        </v-col>
                        <v-divider thickness="4" vertical="true"></v-divider>
                        <v-col>
                            <h4>3,10 <v-icon size="22">mdi-currency-eur</v-icon> </h4>
                            <v-btn color="indigo darken-4" @click="changeState(4)">kaufen</v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>


        <v-row>
            <v-col>
                <v-card elevation="15" variant="outlined">
                    <v-row>
                        <v-col cols="3">
                            <v-card-title style="text-align:left" >Einzel-Ticket ermäßigt</v-card-title>    
                        </v-col>
                        <v-col cols="5" style="margin-right:2em"></v-col>
                        <v-divider thickness="4" vertical="true"></v-divider>
                        <v-col></v-col>
                        
                    </v-row>
                    
                    <v-row>
                        <v-col cols="3">
                            Gültig ab 30.01.2023 10:41 bis 30.01.2023 11:41
                            Von 1 Trier-City Nach 4 Trier-Südost, Preisstufe 2
                        </v-col>
                        <v-col cols="5" style="margin-right:2em">
                            Gültig für Kinder und Jugendliche zwischen 6 und 14 Jahren für eine Person und Fahrt. 
                            Geltungsdauer Preisstufen 1-3: 1h, ab Preisstufe 4: 3h.
                            Gültig in Verbindung mit einem gültigen Lichtbildausweis.
                        </v-col>
                        <v-divider thickness="4" vertical="true"></v-divider>
                        <v-col>
                            <h4>1,90 <v-icon size="22">mdi-currency-eur</v-icon> </h4>
                            <v-btn color="indigo darken-4" @click="changeState(4)">kaufen</v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>


        <v-row>
            <v-col>
                <v-card elevation="15" variant="outlined">
                    <v-row>
                        <v-col cols="2">
                            <v-card-title style="text-align:left" >4-Fahrten-Ticket</v-card-title>    
                        </v-col>
                        <v-col cols="6" style="margin-right:2em"></v-col>
                        <v-divider thickness="4" vertical="true"></v-divider>
                        <v-col></v-col>
                        
                    </v-row>
                    
                    <v-row>
                        <v-col cols="3">
                            Gültig ab 30.01.2023 10:41 bis 30.01.2023 11:41
                            Von 1 Trier-City Nach 4 Trier-Südost, Preisstufe 2
                        </v-col>
                        <v-col cols="5" style="margin-right:2em">
                            Ein Abschnitt berechtigt zu einer Fahrt und gilt nur für eine Person innerhalb des aufgedruckten Geltungsbereiches. Geltungsdauer: 1h.
                            Nicht übertragbar, nur gültig in Verbindung mit einem gültigen Lichtbildausweis.
                        </v-col>
                        <v-divider thickness="4" vertical="true"></v-divider>
                        <v-col>
                            <h4>9,30 <v-icon size="22">mdi-currency-eur</v-icon> </h4>
                            <v-btn color="indigo darken-4" @click="changeState(4)">kaufen</v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col></v-col>
        </v-row>
        <v-row>
            <v-col></v-col>
        </v-row>

        <v-row>
            <v-col cols="1">
                <v-btn variant="flat" color="grey lighten-4" @click="changeState(2)">Zurück</v-btn>
            </v-col>
        </v-row>
    </v-container>  
      
    
    </template>
  <script>
  export default {
      name:'TicketView',
      methods: {
            changeState(newState) {
                this.$emit('changeState', newState)
            },
        }
  }
  </script>
  
    
    