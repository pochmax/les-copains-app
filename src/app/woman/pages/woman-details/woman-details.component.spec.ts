import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanDetailsComponent } from './woman-details.component';

describe('WomanDetailsComponent', () => {
  let component: WomanDetailsComponent;
  let fixture: ComponentFixture<WomanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WomanDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
