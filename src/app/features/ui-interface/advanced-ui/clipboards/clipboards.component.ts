import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard'; 
@Component({
    selector: 'app-clipboards',
    templateUrl: './clipboards.component.html',
    styleUrls: ['./clipboards.component.scss'],
    imports: [CommonModule,ClipboardModule,FormsModule,ReactiveFormsModule]
})
export class ClipboardsComponent  {
  copyFromInput= 'http://www.admin-dashboard.com';
 
}
