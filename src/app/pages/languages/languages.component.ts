import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { LanguageContainerComponent } from '../../components/language-container/language-container.component';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [NavigationComponent, LanguageContainerComponent],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent {

}
