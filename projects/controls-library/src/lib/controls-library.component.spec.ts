import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsLibraryComponent } from './controls-library.component';

describe('ControlsLibraryComponent', () => {
  let component: ControlsLibraryComponent;
  let fixture: ComponentFixture<ControlsLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlsLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
