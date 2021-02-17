import { TestBed } from '@angular/core/testing';

import { InforPaginaService } from './infor-pagina.service';

describe('InforPaginaService', () => {
  let service: InforPaginaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InforPaginaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
