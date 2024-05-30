import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainertypeComponent } from './containertype.component';

describe('ContainertypeComponent', () => {
  let component: ContainertypeComponent;
  let fixture: ComponentFixture<ContainertypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainertypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainertypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
