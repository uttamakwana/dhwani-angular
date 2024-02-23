import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LanguagesComponent } from './pages/languages/languages.component';
import { LanguageDashboardComponent } from './pages/language-dashboard/language-dashboard.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { CameraComponent } from './pages/camera/camera.component';

export const routes: Routes = [
 { path: '', component: LandingComponent },
 { path: 'login', component: LoginComponent },
 { path: 'register', component: RegisterComponent },
 { path: 'home', component: HomeComponent },
 { path: 'dashboard', component: DashboardComponent },
 { path: 'langauges', component: LanguagesComponent },
 { path: 'language-dashboard', component: LanguageDashboardComponent },
 { path: 'user-profile', component: UserProfileComponent },
 { path: 'camera', component: CameraComponent },
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})

export class AppRoutingModule { }
