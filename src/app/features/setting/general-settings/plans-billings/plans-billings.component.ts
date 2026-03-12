import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-plans-billings',
  imports:[CommonModule,MatSelectModule],
  templateUrl: './plans-billings.component.html',
  styleUrls: [ './plans-billings.component.scss']
})
export class PlansBillingsComponent {

}
