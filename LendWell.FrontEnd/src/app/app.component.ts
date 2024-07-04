import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MortgageComponent } from "./pages/mortgage/mortgage/mortgage.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MortgageComponent]
})
export class AppComponent {
  title = 'LendWell.FrontEnd';
}
