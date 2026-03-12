import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../../../../../../src/app/core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-modals',
    templateUrl: './modals.component.html',
    styleUrls: ['./modals.component.scss'],
    imports: [CommonModule,RouterLink]
})
export class ModalsComponent {
  public routes = routes;
}
