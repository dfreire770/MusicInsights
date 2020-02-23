import { TestBed } from '@angular/core/testing';

import { UIService } from './uiservice.service';

describe('UIServiceService', () => {
  let service: UIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
