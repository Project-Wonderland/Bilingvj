import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-localization-settings',
  imports:[CommonModule,MatSelectModule],
  templateUrl: './localization-settings.component.html',
  styleUrls: [ './localization-settings.component.scss']
})
export class LocalizationSettingsComponent {

}
