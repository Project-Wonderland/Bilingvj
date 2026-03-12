import { Component } from '@angular/core';
import { routes } from '../../../../../../src/app/core/core.index';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { CustomPaginationComponent } from '../../../../shared/custom-pagination/custom-pagination.component';
import { MatSortModule } from '@angular/material/sort';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-tickets-list',
  imports:[MatSelectModule,RouterLink,MatSortModule,BsDatepickerModule],
  templateUrl: './tickets-list.component.html',
  styleUrls: [ './tickets-list.component.scss']
})
export class TicketsListComponent {
routes=routes
}
