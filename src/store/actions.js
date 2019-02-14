export default {
  addNum({ commit, state }, id) {
    commit('accuScore', id);
    if (state.itemNum < state.itemDetail.length) {
      commit('nextQuestion', 1);
    }
  },
  initializeData({ commit }) {
    commit('dataInitialize');
  },
};
