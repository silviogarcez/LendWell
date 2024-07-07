import { Component, inject, Input, ElementRef } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { TittleComponent } from "../tittle/tittle.component";
import { InputComponent } from "../input/input.component";
import { CommonModule } from '@angular/common';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IInput } from '../../../core/models/input/interfaces/IInput';
import { Mortgage } from '../../../core/models/mortgage/Mortgage';
import { IMortgage } from '../../../core/models/mortgage/interfaces/IMortgage';

@Component({
    selector: 'app-panel',
    standalone: true,
    templateUrl: './panel.component.html',
    styleUrl: './panel.component.css',
    imports: [HeaderComponent, TittleComponent, InputComponent, CommonModule, ReactiveFormsModule ]
})
  
export class PanelComponent {
  tittle: string|undefined;
  subtittle: string|undefined;  
  inputList : IInput[] = [{Description: "Borrowwing Amount", Name:"BorrowwingAmount" , Value :"0", Order: 0, Required : true, IsInput : true }, {Description: "Repayment Period", Name:"RepaymentPeriod", Value :["Select","30 Years", "35 Years", "40 Years"], Order: 2, Required : true, IsInput : false }, {Description: "Deposit Amount",Name:"DepositAmout", Value :"0", Order: 4, Required : true, IsInput : true },{Description: "Purchase Price", Name:"PurchasePrice", Value :"0", Order: 1, Required : true, IsInput : true }, {Description: "Total Household Income", Name:"TotalHouseHoldIncome", Value :"0", Order: 3, Required : true, IsInput : true }, {Description: "Additional Funding", Name:"AdditionalFunding", Value :"0", Order: 5, Required : false, IsInput : true }];  
  fb = inject(NonNullableFormBuilder);
  form = this.fb.group({});
  mortgage : IMortgage = new Mortgage();
  disabled: boolean|undefined = false;
  
  
   constructor(private route: ActivatedRoute, private router: Router, private el: ElementRef){    
    this.tittle = "Your Mortgage";
    this.subtittle = "Calculate Your Mortgage";    

    this.inputList.forEach(field => {
      this.form.addControl(field.Name, new FormControl('', Validators.required)); 
    });
  }

  OnSubmit() {
    
     if (this.form?.valid)
     {
      this.form.get('BorrowwingAmount')?.disable();
      this.form.get('RepaymentPeriod')?.disable();
      this.form.get('DepositAmout')?.disable();
      this.form.get('PurchasePrice')?.disable();
      this.form.get('TotalHouseHoldIncome')?.disable();
      this.form.get('AdditionalFunding')?.disable();      
      let elements = document.getElementsByClassName("needblur");          

      Array.from(elements).forEach((el) => {
        el.classList.remove("blur");
      });
     }        
  }

  GoBack(){
    this.router.navigate(['/mortgage']);
    this.form.get('BorrowwingAmount')?.enable();
    this.form.get('RepaymentPeriod')?.enable();
    this.form.get('DepositAmout')?.enable();
    this.form.get('PurchasePrice')?.enable();
    this.form.get('TotalHouseHoldIncome')?.enable();
    this.form.get('AdditionalFunding')?.enable(); 
    let elements = document.getElementsByClassName("needblur");          

      Array.from(elements).forEach((el) => {
        el.classList.add("blur");
      });
  }
}