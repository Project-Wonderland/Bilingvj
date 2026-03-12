import { Component } from '@angular/core';
import { routes } from '../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error-404',
  imports: [CommonModule,RouterLink],
  templateUrl: './error-404.component.html',
  styleUrls: [ './error-404.component.scss']
})
export class Error404Component {
routes=routes
}
