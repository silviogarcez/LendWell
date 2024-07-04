import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-barstage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './barstage.component.html',
  styleUrl: './barstage.component.css'
})
export class BarstageComponent {
    
  @Input() stages: string[] | undefined;

  constructor()
  {    
  }
}
