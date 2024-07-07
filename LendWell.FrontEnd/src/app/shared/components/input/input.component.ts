import { Component, Input } from '@angular/core';
import { IInput } from '../../../core/models/input/interfaces/IInput';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ControlContainer, FormControl, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyDirective } from 'ngx-currency'

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, MatIconModule, FormsModule, ReactiveFormsModule, NgxCurrencyDirective],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  @Input() values: IInput | undefined;  
  value: any;
  
  control:FormControl
  

  @Input('control') set _control(value: FormControl){
      this.control=value as FormControl
  }
  
  constructor(){
    this.control = new FormControl();    
  }
}