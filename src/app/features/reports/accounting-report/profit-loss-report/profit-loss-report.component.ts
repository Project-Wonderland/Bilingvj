import { Component } from '@angular/core';
import { routes } from '../../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { DateRangePicker2Component } from '../../../common/date-range-picker-2/date-range-picker-2.component';

@Component({
  selector: 'app-profit-loss-report',
  imports: [CommonModule,DateRangePicker2Component],
  templateUrl: './profit-loss-report.component.html',
  styleUrls: [ './profit-loss-report.component.scss']
})
export class ProfitLossReportComponent {
routes=routes
}
