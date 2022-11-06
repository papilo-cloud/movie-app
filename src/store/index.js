import Vue from 'vue';
import Vuex from 'vuex';
import data from "../datas/movies.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movie: [...data],
    // movie: [...data]
  },
  getters: {
    getState(state) {
      return state.movie 
    },
    getStates(state) {
      return state.movie.filter(x => x.isBookmarked)
    }
  }, 
  mutations: {
    loadStore(state) {
			if(localStorage.getItem('store')) {
          this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store'))));
        }
       
			},
      // nameScs(state){
      //     state.movie = data
      // },
      TOGGLE_INDX(state, payload){
        const indx = state.movie.find(idx => idx.title == payload)
        indx.isBookmarked = !indx.isBookmarked
        console.log(indx)
      }
  },
  actions: {
    toggleBookmarked(context, payload){
      context.commit('TOGGLE_INDX',payload)
    }
  }, 
  modules: {
  },
});
