import Vuex from 'vuex';

export const SET_WINNER = 'SET_WINNER'; // import { SET_WINNER } from './store'; 이렇게 호출해야 함.
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';
export const NO_WINNER = 'NO_WINNER';

export default new Vuex.Store({ // import store from './store'
  state: {
    tableData: [
      ['','',''],
      ['','',''],
      ['','',''],
    ],
    turn: 'O',
    winner: '',
  },  // vue의 data와 비슷
  getters: {

  }, // vue의 computed와 비슷
  mutations: {
    [SET_WINNER](state, winner) {
      state.winner = winner;
    },
    [CLICK_CELL](state, {row, cell}) {
      //Vue.set(state.tableData[row], cell, state.turn); //Vue 2
      state.tableData[row][cell] = state.turn;  // Vue 3

    },
    [CHANGE_TURN](state) {
      state.turn = state.turn === 'O' ? 'X' : 'O';
    },
    [RESET_GAME](state) {
      state.turn = 'O';
      state.tableData = [
        ['','',''],
        ['','',''],
        ['','',''],
      ];
    },
    [NO_WINNER](state) {
      state.winner = '';
    }
  }, // 수정할때 사용. 동기적으로
  actions: {

  }, // 비동기를 사용할때, 또는 여러 mutations를 연달아 실행할 때,
});