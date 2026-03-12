import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invoice-medical',
  imports: [CommonModule],
  templateUrl: './invoice-medical.component.html',
  styleUrls: [ './invoice-medical.component.scss']
})
export class InvoiceMedicalComponent {
routes=routes
}
