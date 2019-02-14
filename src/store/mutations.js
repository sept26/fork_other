export default {
  nextQuestion(state, num) {
    state.itemNum += num;
  },
  accuScore(state, id) {
    state.answerid.push(id);
  },
  dataInitialize(state) {
    state.itemNum = 1;
    state.answerid = [];
    state.allTime = 0;
  },
  rememberTime(state) {
    state.timer = setInterval(() => {
      state.allTime += 1;
    }, 1000);
  },
};
