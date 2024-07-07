import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarstageComponent } from './barstage.component';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

describe('BarstageComponent', () => {
  let component: BarstageComponent;
  let fixture: ComponentFixture<BarstageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [BarstageComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the stages correctly', () => {
    component.stages = ['barActive', 'barInactive', 'barInactive'];
    fixture.detectChanges();
    
    const stageElements = fixture.debugElement.queryAll(By.css('.stage'));
    expect(stageElements.length).toBe(3);
    expect(stageElements[0].nativeElement.classList).toContain('barActive');
    expect(stageElements[1].nativeElement.classList).toContain('barInactive');
    expect(stageElements[2].nativeElement.classList).toContain('barInactive');
  });

  it('should update the stages dynamically', () => {
    component.stages = ['barActive', 'barInactive'];
    fixture.detectChanges();
    
    let stageElements = fixture.debugElement.queryAll(By.css('.stage'));
    expect(stageElements.length).toBe(2);
    expect(stageElements[0].nativeElement.classList).toContain('barActive');
    expect(stageElements[1].nativeElement.classList).toContain('barInactive');
    
    component.stages = ['barInactive', 'barActive', 'barActive'];
    fixture.detectChanges();
    
    stageElements = fixture.debugElement.queryAll(By.css('.stage'));
    expect(stageElements.length).toBe(3);
    expect(stageElements[0].nativeElement.classList).toContain('barInactive');
    expect(stageElements[1].nativeElement.classList).toContain('barActive');
    expect(stageElements[2].nativeElement.classList).toContain('barActive');
  });

  it('should handle undefined stages gracefully', () => {
    component.stages = undefined;
    fixture.detectChanges();
    
    const stageElements = fixture.debugElement.queryAll(By.css('.stage'));
    expect(stageElements.length).toBe(0);
  });
});
