import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
// import { defineFullCalendarElement } from '@fullcalendar/web-component';
// @fullcalendar plugins
// import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import { Calendar, CalendarOptions, DateSelectArg, EventApi, EventClickArg } from '@fullcalendar/core';
// import listPlugin from '@fullcalendar/list';
// import { INITIAL_EVENTS } from './event-utilites';
import { routes } from '../../../../../src/app/core/core.index';
import { CommonModule } from '@angular/common';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { CustomCalendarComponent } from '../../common/custom-calendar/custom-calendar.component';


// defineFullCalendarElement();

@Component({
    selector: 'app-calender',
    templateUrl: './calender.component.html',
    styleUrls: ['./calender.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports:[CommonModule,FormsModule,DatePickerModule,CustomCalendarComponent]
})
export class CalenderComponent  {
  routes = routes
  showEventDetailsModal = false;
  eventDetails = { title: '' };
  date: Date[] | undefined;
  dropdownOpen = false;
  selectedTime: Date = new Date();
  addtime2: Date | undefined;
  addtime: Date | undefined;
  time: Date[] | undefined; 
  time2: Date[] | undefined; 
  bsInlineValue = new Date()


  ngOnInit(): void {}
    // Open the dropdown
    openDropdown() {
      this.dropdownOpen = true;
    }

    // Close the dropdown
    closeDropdown() {
      this.dropdownOpen = false;
    }

    // Update displayed time when selection changes
    onTimeChange() {
      this.closeDropdown(); // Close dropdown after time selection
    }
  ngAfterViewInit(): void {



    // Initialize FullCalendar
    
  }
  
  handleEventDetailsClose() {
    this.showEventDetailsModal = false;
  }
  

}


