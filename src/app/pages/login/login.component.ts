import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
 selector: 'app-login',
 standalone: true,
 imports: [MatIconModule],
 templateUrl: './login.component.html',
 styleUrl: './login.component.css',
})

export class LoginComponent {
 constructor(private router: Router) { }
 email = "";
 password = "";
 toaster = inject(ToastrService);
 navigateToRegister() {
  this.router.navigateByUrl("/register")
 }
 handleLogin() {
  const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!this.email || !this.password) {
   return this.toaster.error("All fields are required!", "Error", { timeOut: 2000, progressBar: true, progressAnimation: "increasing", closeButton: true })
  }
  if (!emailPattern.test(this.email)) {
   return this.toaster.error("Please provide a vaild email!", "Error", { timeOut: 2000, progressBar: true, progressAnimation: "increasing", closeButton: true })
  }
  if (emailPattern.test(this.email) && this.password === "user") {
   this.toaster.success("Enjoy dhwani!😊", "Login successfull!", { timeOut: 2000, progressBar: true, progressAnimation: "increasing", closeButton: true })
   setTimeout(() => {
    this.router.navigateByUrl("/dashboard")
   }, 2000)
  } else {
   this.toaster.error("Email or password may be wrong!", "Error!", { timeOut: 2000, progressBar: true, progressAnimation: "increasing", closeButton: true })
  }
  return 0;
 }
 handleEmailChange(event: any) {
  this.email = event.target.value;
 }
 handlePasswordChange(event: any) {
  this.password = event.target.value;
 }
 handleSignInWithGoogle() {
  alert("Coming soon!")
 }
}
