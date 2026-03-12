import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-email',
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.scss'],
    imports:[CommonModule,RouterLink]
})
export class EmailComponent  {
    routes=routes
show:boolean[]=[false];
toggleMenu(index:number):void{
    this.show[index]=!this.show[index]
}
}
