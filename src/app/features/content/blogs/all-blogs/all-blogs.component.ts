import { Component } from '@angular/core';
import { routes } from '../../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { NgxEditorModule } from 'ngx-editor';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-blogs',
  imports:[CommonModule,NgxEditorModule,MatSelectModule,
    MatSortModule,FormsModule,RouterLink,
    NgxEditorModule
  ],
  templateUrl: './all-blogs.component.html',
  styleUrls: [ './all-blogs.component.scss']
})
export class AllBlogsComponent {
routes=routes
}
