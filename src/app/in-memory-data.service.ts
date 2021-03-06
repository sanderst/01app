import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Zero' },
      { id: 11, name: 'IronMan' },
      { id: 12, name: 'SpiderMan' },
      { id: 13, name: 'Captain America' },
      { id: 14, name: 'Thor' },
      { id: 15, name: 'Hawkeye' },
      { id: 16, name: 'BlackWidow' },
      { id: 17, name: 'Antman' },
      { id: 18, name: 'Batman' },
      { id: 19, name: 'Flash' },
      { id: 20, name: 'Superman' }
    ];
    return {heroes};
  }
}