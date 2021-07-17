import { TestBed } from '@angular/core/testing';

import { ChessgamesstatsService } from './chessgamesstats.service';

describe('ChessgamesstatsService', () => {
  let service: ChessgamesstatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChessgamesstatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
