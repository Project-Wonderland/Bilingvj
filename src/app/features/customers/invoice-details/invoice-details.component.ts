import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-invoice-details',
  imports:[CommonModule,MatSliderModule,
    FormsModule,RouterLink
  ],
  templateUrl: './invoice-details.component.html',
  styleUrls: [ './invoice-details.component.scss']
})
export class InvoiceDetailsComponent {
routes=routes;
modal=false;
closeModal():void{
  this.modal=!this.modal
  const backdrop = document.querySelector('.modal-backdrop.fade.show');
  if (backdrop) {
    backdrop.classList.add('d-none');
  }
}
}
