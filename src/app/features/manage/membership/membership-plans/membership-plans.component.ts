import { Component } from '@angular/core';
import { routes } from '../../../../../../src/app/core/core.index';
import { MatSliderModule } from '@angular/material/slider';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-membership-plans',
  imports:[MatSliderModule,CommonModule,MatSortModule,FormsModule,RouterLink],
  templateUrl: './membership-plans.component.html',
  styleUrls: [ './membership-plans.component.scss']
})
export class MembershipPlansComponent {
routes=routes
}
