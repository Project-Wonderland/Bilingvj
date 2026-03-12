import { Component } from '@angular/core';
import { routes } from '../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
  imports:[CommonModule,FormsModule,RouterLink]
})
export class SuccessComponent {
routes=routes
}
