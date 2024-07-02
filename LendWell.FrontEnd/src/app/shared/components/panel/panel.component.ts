import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { TittleComponent } from "../tittle/tittle.component";

@Component({
    selector: 'app-panel',
    standalone: true,
    templateUrl: './panel.component.html',
    styleUrl: './panel.component.css',
    imports: [HeaderComponent, TittleComponent]
})
export class PanelComponent {

  tittle: string|undefined;
  subtittle: string|undefined;

  constructor(){
    this.tittle = "Your Mortgage";
    this.subtittle = "Calculate Your Mortgage";
  }
}
