<template>
    <NavbarCopmponent />
    Bienvenue {{ this.$store.state.utilisateur.nom +" "+this.$store.state.utilisateur.prenom }}
</template>



<script>
import NavbarCopmponent from '@/components/NavbarCopmponent.vue';

export default {
    components: { NavbarCopmponent }
}

</script>

