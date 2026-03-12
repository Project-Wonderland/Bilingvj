import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../../../../src/app/core/core.index';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-add-credit-notes',
  imports:[MatSelectModule,CommonModule,RouterLink,BsDatepickerModule],
  templateUrl: './add-credit-notes.component.html',
  styleUrls: ['./add-credit-notes.component.scss'],
})
export class AddCreditNotesComponent {
routes=routes
formData: any[] = []; 
trash=false;
isTrash():void{
this.trash=true;
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
constructor(private router:Router){}
redirectPage():void{
  this.router.navigate([routes.creditNotes])
}
}
