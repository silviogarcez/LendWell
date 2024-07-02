import { Component } from '@angular/core';
import { DropdownlistComponent } from "../dropdownlist/dropdownlist.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [DropdownlistComponent]
})
export class HeaderComponent {

}
