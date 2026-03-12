import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-settings',
  imports:[RouterModule],
  templateUrl: './settings.component.html',
  styleUrls: [ './settings.component.scss']
})
export class SettingsComponent {
routes=routes
}
