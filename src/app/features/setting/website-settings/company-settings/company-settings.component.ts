import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-company-settings',
  imports:[CommonModule,MatSelectModule],
  templateUrl: './company-settings.component.html',
  styleUrls: [ './company-settings.component.scss']
})
export class CompanySettingsComponent {

}
