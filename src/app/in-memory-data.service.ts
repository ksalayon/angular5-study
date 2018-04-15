import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', power: null},
      { id: 12, name: 'Narco', power: null},
      { id: 13, name: 'Bombasto', power: null},
      { id: 14, name: 'Celeritas', power: null},
      { id: 15, name: 'Magneta', power: null},
      { id: 16, name: 'RubberMan', power: null},
      { id: 17, name: 'Dynama', power: null},
      { id: 18, name: 'Dr IQ', power: null},
      { id: 19, name: 'Magma', power: null},
      { id: 20, name: 'Tornado', power: null}
    ];
    return {heroes};
  }

}
