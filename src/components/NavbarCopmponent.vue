<template>
    <v-toolbar border density="comfortable">
        <v-col class="d-flex justify-space-around">
        <v-btn to="/accueil">Accueil</v-btn>
        </v-col>
        <v-col class="d-flex justify-space-around">
        <v-btn to="/Rapports">Rapports</v-btn>
        </v-col>
        <v-col class="d-flex justify-space-around">
        <v-btn to="/Medecins">Medecins</v-btn>
        </v-col>
    </v-toolbar>
</template>

<script>
export default {
    name: 'NavbarComponent'
}
</script>
