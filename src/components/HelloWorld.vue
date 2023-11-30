<template>
  <v-sheet class="bg-blue pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form v-model="form" @submit.prevent="onSubmit">
        <v-text-field
          v-model="login"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          clearable
          label="Login"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          clearable
          label="Mot de passe"
          type =  "password"
          placeholder="Entrez votre mot de passe fdp"
        ></v-text-field>

        <br />

        <v-btn
          @click = "getLogin"
          :loading="loading"
          block
          color="#5cf5b5"
          size="large"
          
          variant="elevated"
        >
          Connexion
        </v-btn>
      </v-form>

      <div v-if="errorMessage" class="error-message mt-4">
        <v-alert v-show = "errorMessage" icon="$error" color="error"
        text = "error">
        </v-alert>
      </div>

      <div v-if="successMessage" class="success-message mt-4">
        <v-alert v-show = "successMessage" icon="$success" color="success"
        text = "success">
        </v-alert>
      </div>
    </v-card>
  </v-sheet>
</template>

<script>
import DataService from '@/service/DataService'
var dataService = new DataService(); // Instanciation de l'objet de type DataService

export default {
  data: () => ({
    form: false,
    login: null,
    password: null,
    loading: false,
    errorMessage: false,
    successMessage: false,
  }),


  methods: {
  getLogin(){
    //appel au dataService pour interroger l'API
    dataService.getVisiteur(this.login,this.password)
    //Si succès, on stocke les données de l'utilisateur
    //dans le store, puis on redirige vers la page d'accueil
    .then(
      (data)=>{
        //Enregistrement dans le store, dans la varaible utilisateur
        this.$store.state.utilisateur = data;
        console.log(data);
        this.successMessage = 'Connexion réussie !';
        this.errorMessage = null;
        this.$router.push("/accueil");

      })
      //on affiche la banière d'erreur
      .catch(
        ()=>{
          this.errorMessage = 'Identifiant ou mot de passe incorrect';
          this.successMessage = null;
      })
  }
  }
};

</script>