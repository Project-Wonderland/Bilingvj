import { Component } from '@angular/core';
import { SpinnerService } from '../../../../../src/app/core/core.index';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
    imports: [CommonModule]
})
export class SpinnerComponent {
loading$!: Observable<boolean>; 
  constructor(public spinner: SpinnerService) {
    
  }
   ngOnInit() {
    this.loading$ = this.spinner.loading$;
  }





}
