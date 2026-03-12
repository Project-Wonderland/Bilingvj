import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from '../../../../../src/app/core/core.index';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  imports: [CommonModule,MatSelectModule,RouterLink]
})
export class TodoListComponent {
routes=routes
}
