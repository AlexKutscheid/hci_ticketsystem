<template>
    <v-container fluid>
    
        <v-card elevation="15" variant="outlined" cols="10" style="padding-left:10px">
    
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
                <v-col cols="2">
                    <h4 style="padding-top:20px;  text-align:start">Personen:</h4>
                </v-col>
                <v-col cols="10">
                    
                </v-col>
            </v-row>
    
            <v-row justify="space-between" class="text-center">
                <v-col cols="6">
                    <v-select
                        prepend-icon="mdi-account-plus-outline"
                        label="Anzahl"
                        :items="['1 Reisender', '2 Reisende', '3 Reisende', '4 Reisende', '5 Reisende', '6 Reisende']"
                    >
                    </v-select>
                </v-col>
            </v-row>
    
        
            
    
            <v-row justify="space-between" class="text-center">
                <v-col cols="9">
    
                </v-col>
                <v-col>
                    <v-btn color="indigo darken-4" rounded="lg" style="margin-bottom:20px"  @click="changeState(2)">
                        Verbindung suchen
                    </v-btn>
                </v-col>
            </v-row>
    
        </v-card>
    </v-container>
    </template>
      
    <script>
      
      export default ({
        name: 'SucheView',
        methods: {
            changeState(newState) {
                this.$emit('changeState', newState)
            }
        }
      });
    </script>
      