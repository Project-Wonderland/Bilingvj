import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgOtpInputComponent, NgOtpInputModule } from 'ng-otp-input';
import { routes } from '../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-step-verification',
  templateUrl: './two-step-verification.component.html',
  styleUrls: ['./two-step-verification.component.scss'],
  imports:[CommonModule,FormsModule,NgOtpInputModule]
})
export class TwoStepVerificationComponent {
routes=routes
value : any
@ViewChild('otpRef', { static: false }) otpInput?: NgOtpInputComponent;

  handleOtpChange(value: string) {
    console.log('OTP Changed:', value);
  }
  resetOtp() {
    this.otpInput?.setValue('');
  }
constructor(private router:Router){}
redirectPage():void{
  this.router.navigate([routes.resetPassword])
}
}
