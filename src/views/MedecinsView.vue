<template>
    <NavbarCopmponent />
    Bienvenue {{ this.$store.state.utilisateur.nom +" "+this.$store.state.utilisateur.prenom }}
    <RechercheMedecinComponent />
</template>



<script>
import NavbarCopmponent from '@/components/NavbarCopmponent.vue';
import RechercheMedecinComponent from '@/components/RechercheMedecinComponent.vue';

export default {
    components: { NavbarCopmponent, RechercheMedecinComponent }
}

</script>

