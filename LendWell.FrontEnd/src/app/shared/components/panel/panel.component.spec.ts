import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PanelComponent } from './panel.component';
import { HeaderComponent } from '../header/header.component';
import { TittleComponent } from '../tittle/tittle.component';
import { InputComponent } from '../input/input.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('PanelComponent', () => {
  let component: PanelComponent;
  let fixture: ComponentFixture<PanelComponent>;
  let de: DebugElement;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ],
      imports: [
        HeaderComponent,
        TittleComponent,
        InputComponent,
        CommonModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => 'mockId' } } }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the header component', () => {
    const headerEl = de.query(By.css('app-header'));
    expect(headerEl).toBeTruthy();
  });

  it('should render the title component with correct inputs', () => {
    component.tittle = 'Your Mortgage';
    component.subtittle = 'Calculate Your Mortgage';
    fixture.detectChanges();

    const titleEl = de.query(By.css('app-tittle'));
    expect(titleEl).toBeTruthy();
    expect(titleEl.componentInstance.tittle).toBe('Your Mortgage');
    expect(titleEl.componentInstance.subtittle).toBe('Calculate Your Mortgage');
  });

  it('should render the correct number of input components', () => {
    component.inputList = [
      { Name: 'BorrowwingAmount', Description: 'Borrowwing Amount', Value: '0', Order: 0, Required: true, IsInput: true },
      { Name: 'RepaymentPeriod', Description: 'Repayment Period', Value: ['Select', '30 Years', '35 Years', '40 Years'], Order: 2, Required: true, IsInput: false },
      { Name: 'DepositAmout', Description: 'Deposit Amount', Value: '0', Order: 4, Required: true, IsInput: true },
      { Name: 'PurchasePrice', Description: 'Purchase Price', Value: '0', Order: 1, Required: true, IsInput: true },
      { Name: 'TotalHouseHoldIncome', Description: 'Total Household Income', Value: '0', Order: 3, Required: true, IsInput: true },
      { Name: 'AdditionalFunding', Description: 'Additional Funding', Value: '0', Order: 5, Required: false, IsInput: true }
    ];
    component.ngOnInit();
    fixture.detectChanges();

    const inputEls = de.queryAll(By.css('app-input'));
    expect(inputEls.length).toBe(6);
  });

  it('should call GoBack method on Go Back button click', () => {
    spyOn(component, 'GoBack').and.callThrough();
    const button = de.query(By.css('.buttonBack')).nativeElement;
    button.click();
    expect(component.GoBack).toHaveBeenCalled();
  });

  it('should call OnSubmit method on Next Step button click', () => {
    spyOn(component, 'OnSubmit').and.callThrough();
    const button = de.query(By.css('.buttonNext')).nativeElement;
    button.click();
    expect(component.OnSubmit).toHaveBeenCalled();
  });

  it('should disable form controls on valid form submission', () => {
    component.form.get('BorrowwingAmount')?.setValue('100000');
    component.form.get('RepaymentPeriod')?.setValue('30 Years');
    component.form.get('DepositAmout')?.setValue('10000');
    component.form.get('PurchasePrice')?.setValue('200000');
    component.form.get('TotalHouseHoldIncome')?.setValue('50000');
    component.form.get('AdditionalFunding')?.setValue('5000');
    
    fixture.detectChanges();
    component.OnSubmit();
    
    expect(component.form.get('BorrowwingAmount')?.disabled).toBeTrue();
    expect(component.form.get('RepaymentPeriod')?.disabled).toBeTrue();
    expect(component.form.get('DepositAmout')?.disabled).toBeTrue();
    expect(component.form.get('PurchasePrice')?.disabled).toBeTrue();
    expect(component.form.get('TotalHouseHoldIncome')?.disabled).toBeTrue();
    expect(component.form.get('AdditionalFunding')?.disabled).toBeTrue();
  });

  it('should enable form controls on Go Back', () => {
    component.form.get('BorrowwingAmount')?.disable();
    component.form.get('RepaymentPeriod')?.disable();
    component.form.get('DepositAmout')?.disable();
    component.form.get('PurchasePrice')?.disable();
    component.form.get('TotalHouseHoldIncome')?.disable();
    component.form.get('AdditionalFunding')?.disable();

    fixture.detectChanges();
    component.GoBack();
    
    expect(component.form.get('BorrowwingAmount')?.enabled).toBeTrue();
    expect(component.form.get('RepaymentPeriod')?.enabled).toBeTrue();
    expect(component.form.get('DepositAmout')?.enabled).toBeTrue();
    expect(component.form.get('PurchasePrice')?.enabled).toBeTrue();
    expect(component.form.get('TotalHouseHoldIncome')?.enabled).toBeTrue();
    expect(component.form.get('AdditionalFunding')?.enabled).toBeTrue();
  });

});
