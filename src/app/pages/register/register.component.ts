import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
 selector: 'app-register',
 standalone: true,
 imports: [MatIconModule],
 templateUrl: './register.component.html',
 styleUrl: './register.component.css'
})

export class RegisterComponent {
 constructor(private router: Router) {
 }
 navigateToLogin() {
  this.router.navigateByUrl("/login");
 }
 handleRegister() {
  alert("Coming soon!")
 }
 handleSignUpWithGoogle() {
  alert("Coming soon!")
 }
}
