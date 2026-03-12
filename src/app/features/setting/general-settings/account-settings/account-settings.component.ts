import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-account-settings',
  imports:[CommonModule,MatSelectModule,BsDatepickerModule],
  templateUrl: './account-settings.component.html',
  styleUrls: [ './account-settings.component.scss']
})
export class AccountSettingsComponent {

}
