import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-under-construction',
  imports: [CommonModule,RouterLink],
  templateUrl: './under-construction.component.html',
  styleUrls: [ './under-construction.component.scss']
})
export class UnderConstructionComponent {
routes=routes
}
