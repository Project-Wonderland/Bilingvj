import { Component } from '@angular/core';
import { routes } from '../../../../../../src/app/core/core.index';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-edit-quotation',
  templateUrl: './edit-quotation.component.html',
  styleUrls: [ './edit-quotation.component.scss'],
  imports:[BsDatepickerModule,MatSelectModule,CommonModule,RouterLink]
})
export class EditQuotationComponent {
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
