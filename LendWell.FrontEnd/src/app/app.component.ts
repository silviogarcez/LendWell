import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/components/header/header.component";
import { PanelComponent } from "./shared/components/panel/panel.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, PanelComponent]
})
export class AppComponent {
  title = 'LendWell.FrontEnd';
}
