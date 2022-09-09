import { TestBed } from '@angular/core/testing';

import { LivrosService } from './livros.service';

describe('HomepageService', () => {
  let service: LivrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
