import { Component } from '@angular/core';
import { routes } from '../../../../../../src/app/core/core.index';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: [ './customer-details.component.scss'],
  imports:[RouterLink]
})
export class CustomerDetailsComponent {
routes=routes
}
