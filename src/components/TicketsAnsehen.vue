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
          <v-table>
      <thead>
        <tr>
          <th class="text-center">
            Datum
          </th>
          <th class="text-center">
            Strecke
          </th>
          <th class="text-center">
            QR-Code
          </th>
          <th style=""></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in tickets"
          :key="item.datum"
        >
          <td>{{ item.datum }}</td>
          <td>{{ item.strecke }}</td>
          <td>{{ item.qrCode }}</td>
          <td> <v-btn variant="text" icon="mdi-information-outline"> </v-btn> </td>
        </tr>
      </tbody>
    </v-table>
  
          <!---->
           
        </v-card>
          </v-container>
           
           
          </v-col>
    
        </v-row>
      </v-container>
      
    
    </template>
        
  <script>
      export default ({
          name: 'TicketsAnsehen ',
          data () {
      return {
        tickets: [
          {
            datum: "12.02.2023",
            strecke: "Trier Hbf - Kaiserthermen",
            qrCode: "",
          },{
            datum: "12.02.2023",
            strecke: "Trier Hbf - Kohlenstr.",
            qrCode: "",
          },{
            datum: "15.02.2023",
            strecke: "Trier Hbf - Behringstr.",
            qrCode: "",
          },{
            datum: "19.02.2023",
            strecke: "Trier Hbf - Saarstr.",
            qrCode: "",
          },{
            datum: "21.02.2023",
            strecke: "Trier Hbf - Treviris",
            qrCode: "",
          },{
            datum: "29.02.2023",
            strecke: "Trier Hbf - Galerie",
            qrCode: "",
          },
        ],
      }
    },
      });
  </script>