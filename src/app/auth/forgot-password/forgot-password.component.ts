import { Component} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
    imports:[CommonModule,RouterLink,FormsModule]
})
export class ForgotPasswordComponent  {
  public routes = routes;
  constructor(private router:Router){}
  redirectPage():void{
    this.router.navigate([routes.emailVerification])
  }
}
