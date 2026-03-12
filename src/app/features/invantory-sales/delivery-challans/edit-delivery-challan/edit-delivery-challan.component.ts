import { Component } from '@angular/core';
import { routes } from '../../../../../../src/app/core/core.index';
import { MatSelectModule } from '@angular/material/select';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-delivery-challan',
  imports:[MatSelectModule,BsDatepickerModule,CommonModule,FormsModule,RouterLink],
  templateUrl: './edit-delivery-challan.component.html',
  styleUrls: ['./edit-delivery-challan.component.scss']
})
export class EditDeliveryChallanComponent {
routes=routes
trash:boolean=false;
isTrash():void{
  this.trash=true;
}
formData: any[] = []; // Initialize with an empty object to start with one row

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
