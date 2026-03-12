import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-gdpr-cookies',
  imports:[CommonModule,MatSelectModule],
  templateUrl: './gdpr-cookies.component.html',
  styleUrls: [ './gdpr-cookies.component.scss']
})
export class GdprCookiesComponent {

}
