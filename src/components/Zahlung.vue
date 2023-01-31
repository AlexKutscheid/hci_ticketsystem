<template>
    <v-container fluid>
      <v-card elevation="15"   variant="outlined" cols="10" style="padding-left">
        
        <!--hier-->
        
        <v-radio-group label="Wie möchten Sie zahlen?">
        <v-radio label="PayPal" value="1"></v-radio>
        <v-radio label="giropay" value="2"></v-radio>
        <v-radio label="SEPA-Lastschrift" value="3"></v-radio>
        <v-radio label="Kreditkarte" value="4"></v-radio>
        </v-radio-group>


        <v-container>
    <div class="d-flex align-center flex-column">
    <v-card
      width="400"
      title=" Gesamt: 9,30 EUR"
      text=""
      style="margin-bottom:1em"
      
    ></v-card>
    </div>
    
    <div class="text-center">
  </div>


  <v-dialog
      v-model="dialog"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color=""
          v-bind="props"
        >
          Preis Details
        </v-btn>
      </template>

      <v-card>
        <v-card-text>
          1 reisende Person ab 27 Jahre, 2. Klasse
          Trier Hbf - Koblenz Hbf
          Rheinland-Pfalz-Ticket
          Ihre Fahrkarte gilt in Zügen des Nahverkehrs für beliebig viele Fahrten innerhalb der angegebenen 
          Geltungsdauer im ausgewählten Bundesland, unabhängig von der angegebenen Verbindung. 
          Bis zu 3 Kinder von 6 bis einschließlich 14 Jahren fahren in Begleitung kostenlos.
          Kostenlos mitfahrende Kinder müssen nicht auf dem Ticket vermerkt werden. Bis zu 4 Mitreisende fahren vergünstigt. 
          Ihre Fahrkarte gilt Mo.-Fr. von 9:00 Uhr bis 3:00 Uhr des Folgetags, Sa., So. und an 
          Feiertagen von 0:00 Uhr bis 3:00 Uhr des Folgetags. Mit Ihrer Fahrkarte können Sie auch alle übrigen
          Verkehrsmittel in den im Geltungsbereich des Angebots angegebenen Verbünden nutzen.
          Eine Stornierung (Umtausch oder Erstattung) Ihrer Fahrkarte ist ausgeschlossen.
        </v-card-text>
        <v-card-actions>
          <v-btn color="indigo datken-4" block @click="dialog = false">Schliessen</v-btn>
        </v-card-actions>
      </v-card>
   </v-dialog>



    <v-card-actions>
        <v-row justify="center">
            <v-col cols="1">
                <v-btn variant="flat" color="grey lighten-1" @click="changeState(3)">Zurück</v-btn>
            </v-col>
            
            <v-col cols="10"></v-col>

            <v-col cols="1">
                <v-btn variant="flat" color="indigo darken-4" @click="changeState(5)">
                    Weiter
                </v-btn>
            </v-col>
        </v-row>
    </v-card-actions>
    
    
  </v-container>

        <!---->
         
      </v-card>
        </v-container>
  </template>
        
  <script>
      export default ({
          name: 'ZahlungView ',
          data () {
            return {
                dialog: false,
            }
    },
    methods: {
            changeState(newState) {
                this.$emit('changeState', newState)
            },
        }
      });
  </script>