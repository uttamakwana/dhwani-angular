import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { MatIconModule } from '@angular/material/icon';


@Component({
 selector: 'app-user-profile',
 standalone: true,
 imports: [NavigationComponent, MatIconModule],
 templateUrl: './user-profile.component.html',
 styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
 imagePath = "./user.png";
}
