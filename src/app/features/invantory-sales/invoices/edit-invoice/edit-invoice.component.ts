import { Component } from '@angular/core';
import { routes } from '../../../../../../src/app/core/core.index';
import { MatSelectModule } from '@angular/material/select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.scss'],
  imports:[MatSelectModule,BsDatepickerModule,CommonModule,RouterLink],
})
export class EditInvoiceComponent {
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
