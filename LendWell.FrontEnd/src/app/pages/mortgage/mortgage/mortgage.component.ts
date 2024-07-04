import { Component } from '@angular/core';
import { PanelcalculationComponent } from "../../../shared/components/panelcalculation/panelcalculation.component";
import { PanelComponent } from "../../../shared/components/panel/panel.component";

@Component({
    selector: 'app-mortgage',
    standalone: true,
    templateUrl: './mortgage.component.html',
    styleUrl: './mortgage.component.css',
    imports: [PanelcalculationComponent, PanelComponent]
})
export class MortgageComponent {

}
