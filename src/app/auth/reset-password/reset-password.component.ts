import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  imports:[CommonModule,RouterLink,FormsModule]
})
export class ResetPasswordComponent {
  public routes = routes;
  constructor(private router:Router){}
  redirectPage():void{
    this.router.navigate([routes.success])
  }
  public show_password:boolean[] = [false];
  togglePassword(index:number):void{
    this.show_password[index]=!this.show_password[index]
  }
}
