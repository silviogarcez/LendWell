import { Component, Input } from '@angular/core';
import { IInput } from '../../../core/models/input/interfaces/IInput';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

@Input() values: IInput | undefined;
show: boolean;

constructor(){

  if (this.values?.Value)
    this.show = false;
  else
    this.show = true;
}

}
