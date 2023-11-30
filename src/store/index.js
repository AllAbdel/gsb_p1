import DataService from '@/service/DataService'
import { createStore } from 'vuex'

export default createStore({
  state: {
    dataService : new DataService(),
    utilisateur : {},
    medecin:{}
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
