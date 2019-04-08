/* eslint-disable class-methods-use-this */
import GameSavingData from './GameSavingData';
import readGameSaving from './readGameSaving';

export default class GameSavingLoader {
  load() {
    return readGameSaving()
      .then(buffer => (buffer ? new GameSavingData(buffer) : new Error('Данные не получены')))
      .then(buffer => buffer.json() || new Error('Данные не получены'))
      .catch(() => 'Данные не получены');
  }
}
