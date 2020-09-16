import { Client } from  'boardgame.io/react';
import { LightBoard } from './Game';
import { Board } from './Board';

const App = Client({
  game: LightBoard,
  numPlayers: 1,
  board: Board,
  debug: false,
})

export default App;