import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelcalculationComponent } from './panelcalculation.component';

describe('PanelcalculationComponent', () => {
  let component: PanelcalculationComponent;
  let fixture: ComponentFixture<PanelcalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelcalculationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelcalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
