import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TittleComponent } from "../tittle/tittle.component";
import { BarstageComponent } from "../barstage/barstage.component";

@Component({
    selector: 'app-panelcalculation',
    standalone: true,
    templateUrl: './panelcalculation.component.html',
    styleUrl: './panelcalculation.component.css',
    imports: [MatIconModule, TittleComponent, BarstageComponent]
})
export class PanelcalculationComponent {
tittle: string|undefined;
subtittle: string|undefined;
bill: any;
stages: string[] = ["barActive", "barInactive", "barInactive"];

  constructor(){
    this.tittle = "";
    this.subtittle = "";
    this.bill = "€1,000";    
  }
}
