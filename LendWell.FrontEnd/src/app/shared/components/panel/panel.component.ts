import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { TittleComponent } from "../tittle/tittle.component";
import { IInput } from '../../../core/models/input/interfaces/IInput';
import { InputComponent } from "../input/input.component";
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from "../buttons/buttons.component";
import { AbstractControl, FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
    selector: 'app-panel',
    standalone: true,
    templateUrl: './panel.component.html',
    styleUrl: './panel.component.css',
    imports: [HeaderComponent, TittleComponent, InputComponent, CommonModule, ButtonsComponent, ReactiveFormsModule ]
})
  
export class PanelComponent {
  tittle: string|undefined;
  subtittle: string|undefined;  
  inputList : IInput[] = [{Description: "Borrowwing Amount", Name:"BorrowwingAmount" , Value :"0", Order: 0, Required : true, IsInput : true }, {Description: "Repayment Period", Name:"RepaymentPeriod", Value :["30 Years", "35 Years", "40 Years"], Order: 2, Required : true, IsInput : false }, {Description: "Deposit Amount",Name:"DepositAmount", Value :"0", Order: 4, Required : true, IsInput : true },{Description: "Purchase Price", Name:"PurchasePrice", Value :"0", Order: 1, Required : true, IsInput : true }, {Description: "Total Household Income", Name:"TotalHouseholdIncome", Value :"0", Order: 3, Required : true, IsInput : true }, {Description: "Additional Funding", Name:"AdditionalFunding", Value :"0", Order: 5, Required : false, IsInput : true }];
  //inputList : IInput[] = [{Description: "Borrowwing Amount", Name:"BorrowwingAmount" , Value :"0", Order: 0, Required : true, IsInput : true }];
  fb = inject(NonNullableFormBuilder);
  form = this.fb.group({});
  
  constructor(){
    this.tittle = "Your Mortgage";
    this.subtittle = "Calculate Your Mortgage";    
    
    this.inputList.forEach(field => {
      this.form.addControl(field.Name, new FormControl('', Validators.required)); 
    });
  }

  onSubimit() {
    throw new Error('Method not implemented.');
  }
}