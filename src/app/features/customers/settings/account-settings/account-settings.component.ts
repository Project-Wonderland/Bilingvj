import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-account-settings',
  imports:[CommonModule,MatSelectModule],
  templateUrl: './account-settings.component.html',
  styleUrls: [ './account-settings.component.scss']
})
export class AccountSettingsComponent {

}
