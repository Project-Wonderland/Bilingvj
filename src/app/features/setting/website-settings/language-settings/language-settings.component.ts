import { Component } from '@angular/core';
import { routes } from '../../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-language-settings',
  imports:[CommonModule,RouterLink],
  templateUrl: './language-settings.component.html',
  styleUrls: [ './language-settings.component.scss']
})
export class LanguageSettingsComponent {
routes=routes
}
