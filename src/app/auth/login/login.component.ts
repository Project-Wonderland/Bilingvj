import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService, routes } from '../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports:[CommonModule,RouterLink,FormsModule]
})
export class LoginComponent {
  public routes = routes;
  public show_password = true;


  constructor(private router: Router) {

  }
  redirectPage():void{
    this.router.navigate([routes.index])
  }


}
