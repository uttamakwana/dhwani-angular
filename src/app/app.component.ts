import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from "@angular/material/icon"

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';



@Component({
 selector: 'app-root',
 standalone: true,
 imports: [RouterOutlet, MatIconModule, ],
 templateUrl: './app.component.html',
 styleUrl: './app.component.css',

})

export class AppComponent {
 title = 'Dhawni';
}
