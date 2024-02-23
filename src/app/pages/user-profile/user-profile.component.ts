import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

}
