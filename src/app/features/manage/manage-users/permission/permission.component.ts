import { Component } from '@angular/core';
import { routes } from '../../../../../../src/app/core/core.index';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-permission',
  imports:[RouterLink],
  templateUrl: './permission.component.html',
  styleUrls: [ './permission.component.scss']
})
export class PermissionComponent {
routes=routes
}
