import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../../../../../src/app/core/core.index';

@Component({
  selector: 'app-invoice-templates',
  imports:[CommonModule,RouterLink],
  templateUrl: './invoice-templates.component.html',
  styleUrls: [ './invoice-templates.component.scss']
})
export class InvoiceTemplatesComponent{
routes=routes

}
