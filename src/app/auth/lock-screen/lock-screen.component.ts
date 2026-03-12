import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-lock-screen',
    templateUrl: './lock-screen.component.html',
    styleUrls: ['./lock-screen.component.scss'],
    imports:[CommonModule]
})
export class LockScreenComponent  {
    public show_password = true;
  routes=routes
  constructor(private router:Router){}
  redirectPage():void{
    this.router.navigate([routes.emailVerification])
  }
}
