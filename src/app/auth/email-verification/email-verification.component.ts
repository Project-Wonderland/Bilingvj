import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { routes } from '../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss'],
  imports:[CommonModule,RouterLink]
})
export class EmailVerificationComponent {
  routes=routes
  constructor(private router:Router){}
  redirectPage(){
    this.router.navigate([routes.twoStepVerification])
  }
}
