import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
 selector: 'app-navigation',
 standalone: true,
 imports: [MatIconModule],
 templateUrl: './navigation.component.html',
 styleUrl: './navigation.component.css'
})
export class NavigationComponent {
 constructor(private router: Router) { }
 navigateToDashboard() {
  this.router.navigateByUrl("/dashboard")
 }
 navigateToLanguageDashboard() {
  this.router.navigateByUrl("/language-dashboard");
 }
 navigateToUserProfile() {
  this.router.navigateByUrl("/user-profile");
 }
 navigateToCamera() {
  this.router.navigateByUrl("/camera");
 }
}
