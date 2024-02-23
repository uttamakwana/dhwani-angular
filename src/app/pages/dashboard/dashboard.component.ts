import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { LanguagesComponent } from '../languages/languages.component';
import { Router } from '@angular/router';

@Component({
 selector: 'app-dashboard',
 standalone: true,
 imports: [NavigationComponent, LanguagesComponent],
 templateUrl: './dashboard.component.html',
 styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
 constructor(private router: Router) { }
 navigateToLanguages() {
  this.router.navigateByUrl("/langauges");
 }
}
