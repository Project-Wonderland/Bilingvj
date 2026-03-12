import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-plans-settings',
  imports:[CommonModule,MatSelectModule],
  templateUrl: './plans-settings.component.html',
  styleUrls: [ './plans-settings.component.scss']
})
export class PlansSettingsComponent {

}
