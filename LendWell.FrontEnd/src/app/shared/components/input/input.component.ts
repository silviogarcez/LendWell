import { Component, Input } from '@angular/core';
import { IInput } from '../../../core/models/input/interfaces/IInput';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

@Input() values: IInput | undefined;

constructor(){

}

}
