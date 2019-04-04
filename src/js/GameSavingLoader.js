/* eslint-disable class-methods-use-this */
import GameSavingData from './GameSavingData';
import readGameSaving from './readGameSaving';

export default class GameSavingLoader {
  load() {
    return readGameSaving().then((buffer) => {
      const save = new GameSavingData(buffer);
      return save.json();
    });
  }
}
