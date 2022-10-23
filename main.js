import { createApp } from 'vue';
import store from './store';
import TicTacToe from './TicTacToe.vue';

createApp(TicTacToe).use(store).mount('#root');