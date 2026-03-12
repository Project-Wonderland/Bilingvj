import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-quotations',
  imports:[CommonModule,MatSliderModule,
    FormsModule,MatSelectModule,RouterLink

  ],
  templateUrl: './add-quotations.component.html',
  styleUrls: [ './add-quotations.component.scss']
})
export class AddQuotationsComponent {
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
