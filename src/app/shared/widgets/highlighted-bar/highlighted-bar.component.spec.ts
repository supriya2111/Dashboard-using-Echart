import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightedBarComponent } from './highlighted-bar.component';

describe('HighlightedBarComponent', () => {
  let component: HighlightedBarComponent;
  let fixture: ComponentFixture<HighlightedBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightedBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightedBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
