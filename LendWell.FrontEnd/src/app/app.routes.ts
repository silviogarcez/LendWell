import { Routes } from '@angular/router';
import { Mortgage } from './core/models/mortgage/Mortgage';

export const routes: Routes = [
    { path: '', redirectTo: 'mortgage', pathMatch: 'full'},
    { path: 'mortgage', component: Mortgage }    
];
