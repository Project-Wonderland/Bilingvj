import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { MatSelectModule } from '@angular/material/select';
import { DateRangePickerComponent } from '../../common/date-range-picker/date-range-picker.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-packages-grid',
  templateUrl: './packages-grid.component.html',
  styleUrls: ['./packages-grid.component.scss'],
  imports: [CommonModule,MatSelectModule,DateRangePickerComponent,RouterLink]
})
export class PackagesGridComponent {
routes=routes
}
