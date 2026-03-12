import { Component } from '@angular/core';
import { routes } from '../../../../../../src/app/core/core.index';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-add-purchases-orders',
  imports:[MatSelectModule,CommonModule,FormsModule,RouterLink,BsDatepickerModule],

  templateUrl: './add-purchases-orders.component.html',
  styleUrls: [ './add-purchases-orders.component.scss']
})
export class AddPurchasesOrdersComponent {
  routes=routes
trash:boolean=false;
isTrash():void{
  this.trash=true;
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
