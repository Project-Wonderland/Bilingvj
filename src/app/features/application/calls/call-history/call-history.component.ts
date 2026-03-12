import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../../../../../../src/app/core/core.index';
import { RouterLink } from '@angular/router';
import { DateRangePicker2Component } from '../../../common/date-range-picker-2/date-range-picker-2.component';

@Component({
  selector: 'app-call-history',
  templateUrl: './call-history.component.html',
  styleUrls: ['./call-history.component.scss'],
  imports: [CommonModule,RouterLink,DateRangePicker2Component]
})
export class CallHistoryComponent {
routes=routes
}
