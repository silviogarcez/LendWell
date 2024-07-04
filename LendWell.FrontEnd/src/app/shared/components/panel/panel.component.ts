import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { TittleComponent } from "../tittle/tittle.component";
import { IInput } from '../../../core/models/input/interfaces/IInput';
import { InputComponent } from "../input/input.component";
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from "../buttons/buttons.component";
// import  {MatCurrencyFormatModule} from 'mat-currency-format';

@Component({
    selector: 'app-panel',
    standalone: true,
    templateUrl: './panel.component.html',
    styleUrl: './panel.component.css',
    imports: [HeaderComponent, TittleComponent, InputComponent, CommonModule, ButtonsComponent]
})
export class PanelComponent {

  tittle: string|undefined;
  subtittle: string|undefined;
   inputList : IInput[] = [{Description: "Borrowwing Amount", Value :"0", Order: 0, Required : true, IsInput : true }, {Description: "Repayment Period", Value :["30 Years", "35 Years", "40 Years"], Order: 2, Required : true, IsInput : false }, {Description: "Deposit Amount", Value :"0", Order: 4, Required : true, IsInput : true },{Description: "Purchase Price", Value :"0", Order: 1, Required : true, IsInput : true }, {Description: "Total Household Income", Value :"0", Order: 3, Required : true, IsInput : true }, {Description: "Additional Funding", Value :"0", Order: 5, Required : false, IsInput : true }];
  //inputList : IInput[] = [{Description: "Borrowwing Amount", Value :"0", Order: 0, Required : true, , IsInput : true }];
  

  constructor(){
    this.tittle = "Your Mortgage";
    this.subtittle = "Calculate Your Mortgage";    
  }

  
}
