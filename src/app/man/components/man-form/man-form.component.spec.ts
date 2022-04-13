import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManFormComponent } from './man-form.component';

describe('ManFormComponent', () => {
  let component: ManFormComponent;
  let fixture: ComponentFixture<ManFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
