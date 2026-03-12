import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../../../../../../src/app/core/core.index';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
interface data {
  value: string;
}
@Component({
  selector: 'app-horizontal-form',
  templateUrl: './horizontal-form.component.html',
  styleUrls: ['./horizontal-form.component.scss'],
  imports: [CommonModule,MatSelectModule,FormsModule]
})
export class HorizontalFormComponent {
  routes = routes;
  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';
  public selectedValue4 = '';
  public selectedValue5 = '';

  selectedList1: data[] = [
    { value: 'A+' },
    { value: 'O+' },
    { value: 'B+' },
    { value: 'AB+' },
  ];
  selectedList2: data[] = [
    { value: 'Select State' },
    { value: 'California' },
    { value: 'Texas' },
    { value: 'Florida' },
  ];
  selectedList3: data[] = [
    { value: 'Select Country' },
    { value: 'USA' },
    { value: 'France' },
    { value: 'India' },
    { value: 'Spain' },
  ];
  selectedList4: data[] = [
    { value: 'Choose...' },
    { value: 'One' },
    { value: 'Two' },
    { value: 'Three' },
  ];
  selectedList5: data[] = [
    { value: 'Choose...' },
    { value: 'One' },
    { value: 'Two' },
    { value: 'Three' },
  ];
}
