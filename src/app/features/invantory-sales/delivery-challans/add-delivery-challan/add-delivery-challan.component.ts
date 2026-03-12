import { Component } from '@angular/core';
import { routes } from '../../../../../../src/app/core/core.index';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-add-delivery-challan',
  imports:[MatSelectModule,CommonModule,RouterLink,BsDatepickerModule],
  templateUrl: './add-delivery-challan.component.html',
  styleUrls: [ './add-delivery-challan.component.scss']
})
export class AddDeliveryChallanComponent {
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
