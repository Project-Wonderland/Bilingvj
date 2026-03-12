import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-date-range-picker-2',
  
  templateUrl: './date-range-picker-2.component.html',
  styleUrls: ['./date-range-picker-2.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule,
  ],
})
export class DateRangePicker2Component {
  bsValue1 = new Date();
  bsRangeValue1: Date[];
  maxDate1 = new Date();

  constructor() {
    this.maxDate1.setDate(this.maxDate1.getDate() + 7);
    this.bsRangeValue1 = [this.bsValue1, this.maxDate1];
  }
}
