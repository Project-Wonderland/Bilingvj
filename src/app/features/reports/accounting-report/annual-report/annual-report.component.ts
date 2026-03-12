import { Component } from '@angular/core';
import { routes } from '../../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DateRangePicker2Component } from '../../../common/date-range-picker-2/date-range-picker-2.component';

@Component({
  selector: 'app-annual-report',
  imports: [CommonModule,FormsModule
    ,DateRangePicker2Component
  ],
  templateUrl: './annual-report.component.html',
  styleUrls: [ './annual-report.component.scss']
})
export class AnnualReportComponent {
  routes=routes
}
