import { Component } from '@angular/core';
import { fa } from 'intl-tel-input/i18n';
import { routes } from '../../../../../../src/app/core/core.index';
import { MatSelectModule } from '@angular/material/select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.scss'],
  imports:[MatSelectModule,BsDatepickerModule,CommonModule,RouterLink],
})
export class AddInvoiceComponent {
  routes=routes
  trash:boolean=true;
  isTrash():void{
    this.trash=false;
  }
  formData: any[] = []; 

  addNewRow() {
    this.formData.push({});
  }

  removeRow(index: number) {
      this.formData.splice(index, 1);
  }
  trackByIndex(index: number, item: any) {
    return index;
  }
}
