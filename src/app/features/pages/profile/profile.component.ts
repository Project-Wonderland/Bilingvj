import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-profile',
  imports: [CommonModule,BsDatepickerModule,MatSelectModule],
  templateUrl: './profile.component.html',
  styleUrls: [ './profile.component.scss']
})
export class ProfileComponent {

}
