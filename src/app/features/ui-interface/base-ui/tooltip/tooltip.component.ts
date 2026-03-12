import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';
@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  imports: [CommonModule,MatTooltipModule]
})
export class TooltipComponent  {
  html = `<span class="btn-block btn-danger well-sm">Never trust not sanitized HTML!!!</span>`;
 

}
