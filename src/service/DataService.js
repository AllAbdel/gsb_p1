export default class DataService{
  async getVisiteur(unLogin,unMdp){
      var params = new URLSearchParams({
          login:unLogin,
          mdp:unMdp
      });
      var response= await fetch('http://localhost/restGSB/connexion?'+params);
      var items=await response.json();
      return items;
  }

  async getLesMedecins(unMedecin){
      var params = new URLSearchParams({
          nom:unMedecin,
      });
      var response= await fetch('http://localhost/restGSB/medecins?'+params);
      var items=await response.json();
      console.log(items);
      return items;
  }
}