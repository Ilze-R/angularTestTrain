import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Sheep } from '../types';

import { SheepService } from './sheep.service';

fdescribe('SheepService', () => {
  let service: SheepService;
  let httpClientMock = {
    get: (url: string): Sheep | Sheep[] => {
      return [];
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: httpClientMock }],
    });
    service = TestBed.inject(SheepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('gatherFlock()', () => {
    beforeAll(() => {
      spyOn(httpClientMock, 'get');
    });

    it('it should call httpClient method get', () => {
      service.gatherFlock();
      expect(httpClientMock.get).toHaveBeenCalled();
    });
  });

  describe('findSheep()', () => {
    beforeAll(() => {
      spyOn(httpClientMock, 'get').and.returnValue({
        name: 'Sheep name',
        title: 'SheepTitle',
        tagline: 'Sheep tag',
      });
    });

    it('should return Sheep object', () => {
      const result = service.findSheep('Steeve');
      expect(httpClientMock.get).toHaveBeenCalledWith(
        'https://baal.fdp.workers.dev/sheep/Steeve'
      );

      expect(result).toBeTruthy();
      // expect(result).toEqual({
      //   name: 'Sheep name',
      //   title: 'SheepTitle',
      //   tagline: 'Sheep tag',
      // });
    });
  });
});
