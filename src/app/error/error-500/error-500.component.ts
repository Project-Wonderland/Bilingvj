import { Component } from '@angular/core';
import { routes } from '../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error-500',
  imports: [CommonModule,RouterLink],
  templateUrl: './error-500.component.html',
  styleUrls: [ './error-500.component.scss']
})
export class Error500Component {
routes=routes
}
