/* eslint-disable class-methods-use-this */
import GameSavingData from './GameSavingData';
import readGameSaving from './readGameSaving';

export default class GameSavingLoader {
  load() {
    return new Promise((resolve, reject) => {
      readGameSaving().then((buffer) => {
        const save = new GameSavingData(buffer);
        const data = save.json();
        if (data) {
          resolve(data);
        } else {
          reject();
        }
      }).catch(() => 'Данные не получены');
    });
  }
}
