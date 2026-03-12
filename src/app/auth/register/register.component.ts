import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService, routes } from '../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    imports:[CommonModule,RouterLink]
})
export class RegisterComponent  {
  public isValidConfirmPassword = false;
  public CustomControler: undefined;
  public routes = routes;
  public show_password:boolean[] = [false];
  togglePassword(index:number):void{
    this.show_password[index]=!this.show_password[index]
  }
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.form.controls;
  }

  constructor(private router: Router, private auth: AuthService) {}

  
  submit() {
    if (this.form.value.password != this.form.value.confirmPassword) {
      this.isValidConfirmPassword = true;
    } else {
      this.isValidConfirmPassword = false;
      this.auth.login();
    }
  }

  redirectPage():void{
    this.router.navigate([routes.login])
  }
}
