import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tittle',
  standalone: true,
  imports: [],
  templateUrl: './tittle.component.html',
  styleUrl: './tittle.component.css'
})
export class TittleComponent {

  @Input() tittle: string | undefined;
  @Input() subtittle: string | undefined;
}
