import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../../../../../../src/app/core/core.index';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
  imports: [CommonModule,RouterLink]
})
export class LinksComponent {
routes=routes
}
