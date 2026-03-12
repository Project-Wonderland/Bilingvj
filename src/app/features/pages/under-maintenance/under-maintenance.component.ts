import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-under-maintenance',
  imports: [CommonModule,RouterLink],
  templateUrl: './under-maintenance.component.html',
  styleUrls: [ './under-maintenance.component.scss']
})
export class UnderMaintenanceComponent {
routes=routes
}
