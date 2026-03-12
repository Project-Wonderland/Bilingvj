import { Component, OnInit } from '@angular/core';
import { routes } from '../../../../../../src/app/core/core.index';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DateRangePickerComponent } from '../../../common/date-range-picker/date-range-picker.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@Component({
  selector: 'app-ticket-kanban',
  imports:[MatSelectModule,CommonModule,DragDropModule,RouterLink,BsDatepickerModule],
  templateUrl: './ticket-kanban.component.html',
  styleUrls: [ './ticket-kanban.component.scss']
})
export class TicketKanbanComponent implements OnInit {
  routes = routes
  public lstOne: CompanyCard[] = [];
  public lstTwo: CompanyCard[] = [];
  public lstThree: CompanyCard[] = [];
  public lstFour: CompanyCard[] = [];
  ngOnInit(): void {
    this.lstOne = [
      {
        kanbanPower: "Low",
        PowerClass:"badge bg-light badge-sm border-info d-flex align-items-center justify-content-center text-info fs-12 fw-medium",
        Name: "Support For Theme",
        Status:"Open"
      },
      {
        kanbanPower: "Medium",
        PowerClass:
          "badge bg-soft-orange badge-sm border d-flex align-items-center justify-content-center text-orange fs-12 fw-medium text-danger",
        Name: "Verify Your Email",
        Status:"Open"
      },
    ];
    this.lstTwo = [
      {
        kanbanPower: "Low",
        PowerClass:"badge bg-light badge-sm border-info d-flex align-items-center justify-content-center text-info fs-12 fw-medium",
        Name: "Support For Theme",
        Status:"Pending"
      },
      {
        kanbanPower: "Medium",
        PowerClass:
          "badge bg-soft-orange badge-sm border d-flex align-items-center justify-content-center text-orange fs-12 fw-medium text-danger",
        Name: "Verify Your Email",
        Status:"Pending"
      },
      {
        kanbanPower: "Low",
        PowerClass:"badge bg-light badge-sm border-info d-flex align-items-center justify-content-center text-info fs-12 fw-medium",
        Name: "Support For Theme",
        Status:"Pending"
      },
      {
        kanbanPower: "Medium",
        PowerClass:
          "badge bg-soft-orange badge-sm border d-flex align-items-center justify-content-center text-orange fs-12 fw-medium text-danger",
        Name: "Verify Your Email",
        Status:"Pending"
      },
    ];
    this.lstThree = [
      {
        kanbanPower: "Low",
        PowerClass:"badge bg-light badge-sm border-info d-flex align-items-center justify-content-center text-info fs-12 fw-medium",
        Name: "Support For Theme",
        Status:"Open"
      },
      {
        kanbanPower: "Medium",
        PowerClass:
          "badge bg-soft-orange badge-sm border d-flex align-items-center justify-content-center text-orange fs-12 fw-medium text-danger",
        Name: "Verify Your Email",
        Status:"Open"
      },
    ];
    this.lstFour = [
      {
        kanbanPower: "Low",
        PowerClass:"badge bg-light badge-sm border-info d-flex align-items-center justify-content-center text-info fs-12 fw-medium",
        Name: "Support For Theme",
        Status:"Pending"
      },
      {
        kanbanPower: "Medium",
        PowerClass:
          "badge bg-soft-orange badge-sm border d-flex align-items-center justify-content-center text-orange fs-12 fw-medium text-danger",
        Name: "Verify Your Email",
        Status:"Pending"
      },
    ];


  }
  //  drap and drop
  onDrop(event: CdkDragDrop<CompanyCard[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
interface CompanyCard {
  kanbanPower: string;
  PowerClass: string;
  Name: string;
  Status: string;
}


