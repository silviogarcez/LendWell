import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanelcalculationComponent } from './panelcalculation.component';
import { MatIconModule } from '@angular/material/icon';
import { TittleComponent } from '../tittle/tittle.component';
import { BarstageComponent } from '../barstage/barstage.component';
import { By } from '@angular/platform-browser';

describe('PanelcalculationComponent', () => {
  let component: PanelcalculationComponent;
  let fixture: ComponentFixture<PanelcalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        TittleComponent,
        BarstageComponent
      ],
      declarations: [PanelcalculationComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelcalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial title and subtitle as empty strings', () => {
    expect(component.tittle).toBe('');
    expect(component.subtittle).toBe('');
  });

  it('should have initial bill set to "€1,000"', () => {
    expect(component.bill).toBe('€1,000');
  });

  it('should have stages initialized correctly', () => {
    expect(component.stages).toEqual(["barActive", "barInactive", "barInactive"]);
  });

  it('should render TittleComponent', () => {
    const tittleEl = fixture.debugElement.query(By.css('app-tittle'));
    expect(tittleEl).toBeTruthy();
  });

  it('should render BarstageComponent', () => {
    const barstageEl = fixture.debugElement.query(By.css('app-barstage'));
    expect(barstageEl).toBeTruthy();
  });

  it('should render the bill correctly', () => {
    const billEl = fixture.debugElement.query(By.css('.bill'));
    expect(billEl.nativeElement.textContent).toContain('€1,000');
  });

  it('should pass tittle and subtittle to TittleComponent', () => {
    component.tittle = 'Test Title';
    component.subtittle = 'Test Subtitle';
    fixture.detectChanges();

    const tittleEl = fixture.debugElement.query(By.css('app-tittle'));
    expect(tittleEl.componentInstance.tittle).toBe('Test Title');
    expect(tittleEl.componentInstance.subtittle).toBe('Test Subtitle');
  });

  it('should pass stages to BarstageComponent', () => {
    fixture.detectChanges();
    
    const barstageEl = fixture.debugElement.query(By.css('app-barstage'));
    expect(barstageEl.componentInstance.stages).toEqual(["barActive", "barInactive", "barInactive"]);
  });
});
