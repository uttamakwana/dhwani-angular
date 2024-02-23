import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { LanguageContainerComponent } from '../../components/language-container/language-container.component';

@Component({
  selector: 'app-language-dashboard',
  standalone: true,
  imports: [NavigationComponent, LanguageContainerComponent],
  templateUrl: './language-dashboard.component.html',
  styleUrl: './language-dashboard.component.css'
})
export class LanguageDashboardComponent {

}
