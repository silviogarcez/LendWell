import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarstageComponent } from './barstage.component';

describe('BarstageComponent', () => {
  let component: BarstageComponent;
  let fixture: ComponentFixture<BarstageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarstageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
