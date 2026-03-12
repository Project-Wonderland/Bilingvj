import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../../../../../../src/app/core/core.index';

@Component({
    selector: 'app-alerts',
    templateUrl: './alerts.component.html',
    styleUrls: ['./alerts.component.scss'],
    imports: [CommonModule]
})
export class AlertsComponent {
  public routes = routes;

}
