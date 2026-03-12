import { Component } from '@angular/core';
import { routes } from '../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-notifications',
  imports: [CommonModule,RouterLink],
  templateUrl: './notifications.component.html',
  styleUrls: [ './notifications.component.scss']
})
export class NotificationsComponent {
routes=routes
}
