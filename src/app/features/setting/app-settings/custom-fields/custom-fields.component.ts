import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-custom-fields',
  imports:[CommonModule,MatSelectModule],
  templateUrl: './custom-fields.component.html',
  styleUrls: [ './custom-fields.component.scss']
})
export class CustomFieldsComponent {

}
