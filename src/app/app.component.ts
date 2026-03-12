import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, Event, RouterOutlet } from '@angular/router';
import { SpinnerService } from './core/core.index';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet,CommonModule],
})
export class AppComponent {
   title = 'Kanakku';
      public base = '';
  public page = '';

  constructor(private spinner: SpinnerService, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.spinner.show();
        const URL = event.url.split('/');
        this.base =URL[1] ? URL[1].replaceAll('-',' '): '';
        this.page = URL[2] ? URL[2].replace('-',' '): '';
      }
       if(this.base === 'index'){
        this.page = 'Admin Dashboard'
      }
      if(this.base === 'admin dashboard' || this.base === 'inventory'
        ||this.base ==='suppliers' || this.base === 'supplier payments' ||this.base === 'expense' ||this.base === 'incomes'
        ||this.base ==='money transfer' || this.base === 'pages' ||this.base === 'designation' ||this.base === 'attendance'
        ||this.base === 'payments'
        ||this.base ==='transactions' || this.base === 'announcements' ||this.base === 'newsletters' ||this.base === 'starter'
        ||this.base ==='contact messages' || this.base === 'tickets' ||this.base === 'testimonials' ||this.base === 'faq'||this.base === 'profile'
        ||this.base ==='gallery' || this.base === 'timeline' ||this.base === 'pricing' ||this.base === 'privacy policy'||this.base === 'terms and conditions'
        || this.base === 'coming soon' ||this.base === 'under maintenance' 
        ||this.base ==='layout single' || this.base === 'layout transparent' ||this.base === 'layout rtl' 
        ||this.base ==='layout mini' || this.base === 'layout without header' ||this.base === 'layout dark' 
        ||this.base ==='notifications' 
      ){
        this.page = this.base
      }
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.spinner.hide();
        }, 800);
      }
    });
  }
 
 
}
