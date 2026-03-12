import { Component } from '@angular/core';
import { routes } from '../../../../../../src/app/core/core.index';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-roles-permissions',
  imports: [RouterLink],
  templateUrl: './roles-permissions.component.html',
  styleUrls: [ './roles-permissions.component.scss']
})
export class RolesPermissionsComponent {
routes=routes
}
