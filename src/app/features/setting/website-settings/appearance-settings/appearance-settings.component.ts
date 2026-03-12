import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-appearance-settings',
  imports:[CommonModule,MatSelectModule],
  templateUrl: './appearance-settings.component.html',
  styleUrls: [ './appearance-settings.component.scss']
})
export class AppearanceSettingsComponent {
  active: boolean[] = [true, false, false]; 
  toggleActive(index: number): void {
    this.active = this.active.map((_, i) => i === index);
  }
  active2: boolean[] = [true, false, false]; 
  toggleActive2(index: number): void {
    this.active2= this.active2.map((_, i) => i === index);
  }
}
