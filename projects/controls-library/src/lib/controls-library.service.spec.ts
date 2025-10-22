import { TestBed } from '@angular/core/testing';

import { ControlsLibraryService } from './controls-library.service';

describe('ControlsLibraryService', () => {
  let service: ControlsLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlsLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
