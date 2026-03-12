import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-saas-settings',
  imports:[CommonModule,MatSelectModule],
  templateUrl: './saas-settings.component.html',
  styleUrls: [ './saas-settings.component.scss']
})
export class SaasSettingsComponent {

}
