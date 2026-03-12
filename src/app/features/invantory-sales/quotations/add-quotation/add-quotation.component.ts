import { Component } from '@angular/core';
import { routes } from '../../../../../../src/app/core/core.index';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-quotation',
  templateUrl: './add-quotation.component.html',
  styleUrls: [ './add-quotation.component.scss'],
  imports:[BsDatepickerModule,MatSelectModule,CommonModule,RouterLink]
})
export class AddQuotationComponent {
  routes=routes
  trash:boolean=false;
  formData: any[] = []; 
isTrash():void{
  this.trash=true
}
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
