import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-thermal-printer',
  imports:[CommonModule,MatSelectModule],
  templateUrl: './thermal-printer.component.html',
  styleUrls: [ './thermal-printer.component.scss']
})
export class ThermalPrinterComponent {

}
