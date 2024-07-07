import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { NgxCurrencyDirective } from 'ngx-currency';
import { IInput } from '../../../core/models/input/interfaces/IInput';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatIconModule,
        ReactiveFormsModule,
        NgxCurrencyDirective
      ],
      declarations: [InputComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render input element based on IInput', () => {
    const mockInput: IInput = {
      Name: 'BorrowwingAmount',
      Description: 'Borrowing Amount',
      Value: '0',
      Order: 0,
      Required: true,
      IsInput: true
    };

    component.values = mockInput;
    component.control = new FormControl(mockInput.Value);
    fixture.detectChanges();

    const inputEl = fixture.debugElement.query(By.css('input'));
    expect(inputEl).toBeTruthy();
    expect(inputEl.nativeElement.value).toBe('0');
  });

  it('should bind FormControl value to input element', () => {
    const mockInput: IInput = {
      Name: 'BorrowwingAmount',
      Description: 'Borrowing Amount',
      Value: '100000',
      Order: 0,
      Required: true,
      IsInput: true
    };

    component.values = mockInput;
    component.control = new FormControl(mockInput.Value);
    fixture.detectChanges();

    const inputEl = fixture.debugElement.query(By.css('input'));
    expect(inputEl.nativeElement.value).toBe('100000');
  });

  it('should update FormControl value on input change', () => {
    const mockInput: IInput = {
      Name: 'BorrowwingAmount',
      Description: 'Borrowing Amount',
      Value: '0',
      Order: 0,
      Required: true,
      IsInput: true
    };

    component.values = mockInput;
    component.control = new FormControl(mockInput.Value);
    fixture.detectChanges();

    const inputEl = fixture.debugElement.query(By.css('input'));
    inputEl.nativeElement.value = '50000';
    inputEl.nativeElement.dispatchEvent(new Event('input'));

    expect(component.control.value).toBe('50000');
  });

  it('should display error message when form control is invalid and touched', () => {
    const mockInput: IInput = {
      Name: 'BorrowwingAmount',
      Description: 'Borrowing Amount',
      Value: '',
      Order: 0,
      Required: true,
      IsInput: true
    };

    component.values = mockInput;
    component.control = new FormControl(mockInput.Value, { validators: Validators.required });
    component.control.markAsTouched();
    fixture.detectChanges();

    const errorEl = fixture.debugElement.query(By.css('.error-message'));
    expect(errorEl).toBeTruthy();
  });
});
