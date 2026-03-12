import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';

import {
  AuthService,
  CommonService,
  DataService,
  routes,
} from '../core/core.index';
import { SideBarService } from '../core/services/side-bar/side-bar.service';
import { MenuItem, RouterObject, mainMenu, mainMenus } from '../core/models/models';
import { SettingsService } from '../core/services/settings/settings.service';
import { CommonModule } from '@angular/common';
import { SideMenuThreeComponent } from './common/side-menus/side-menu-three/side-menu-three.component';
import { SideMenuTwoComponent } from './common/side-menus/side-menu-two/side-menu-two.component';
import { SideMenuOneComponent } from './common/side-menus/side-menu-one/side-menu-one.component';
import { HeaderOneComponent } from './common/headers/header-one/header-one.component';
import { LayoutComponent } from './common/layout/layout.component';



@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: [ './features.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule,RouterModule,SideMenuThreeComponent,SideMenuTwoComponent,SideMenuOneComponent,HeaderOneComponent,LayoutComponent],
})
export class FeaturesComponent{
  public toggle = false;
  public miniSidebar = false;
  public expandMenu : boolean | string= false;
  public mobileSidebar = false;


  public base = '';
  public page = '';
  public last = '';

  public routes = routes;
  public hideheader =true;
  public sidebar =true;
  public stickysidebar =false;
  layoutMode = 'fluid';
  layoutWidth = 'fluid';
  showPreloader = false;
  selectedColor = '84, 109, 254, 1';
  selectedColor1 = '555, 555, 555, 1';
  horizontalColor='555, 555, 555, 1';
  dthemeColor= '84, 109, 254, 1';
  constructor(
    private sideBar: SideBarService,
    public router: Router,
    private data: DataService,
    private common: CommonService,
    private settings: SettingsService,
    private breakpointObserver:BreakpointObserver
  ) {
    this.getRoutes(this.router);

    this.common.baseRoute.subscribe((res: string) => {
      this.base = res?.replace('-', ' ');
    });
    this.common.pageRoute.subscribe((res: string) => {
      this.page = res?.replace('-', ' ');
    });
    this.common.lastRoute.subscribe((res: string) => {
      this.last = res?.replace('-', ' ');
    });
    // <* condition to check weather login *>


    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getRoutes(event);
        localStorage.removeItem('isMobileSidebar');
        this.mobileSidebar = false;

        // <* to check session time *>
        this.sessionOut();
        // <* to check session time *>
      }
    });
    // <* condition to check weather login *>

    // <* condition to check side bar position *>
    this.sideBar.toggleSideBar.subscribe((res: string) => {
      if (res == 'true') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });
    // <* condition to check side bar position *>

    // <* condition to check mobile side bar position *>
    this.sideBar.toggleMobileSideBar.subscribe((res: string) => {
      if (res == 'true' || res == "true") {
        this.mobileSidebar = true;
      } else {
        this.mobileSidebar = false;
      }
    });
    // <* condition to check mobile side bar position *>
    this.sideBar.expandSideBar.subscribe((res:  boolean | string) => {
      this.expandMenu = res;
      // <* to collapse submenu while toggling side menu*>
      if (res == false && this.miniSidebar == true) {
        this.data.sideBar.map((mainMenus: mainMenus) => {
          mainMenus.menu.map((resMenu: MenuItem) => {
            resMenu.showSubRoute = false;
          });
        });
      }
      // <* to expand submenu while hover toggled side menu*>
      if (res == true && this.miniSidebar == false) {
        this.data.sideBar.map((mainMenus: mainMenu) => {
          mainMenus.menu.map((resMenu: MenuItem) => {
            const menuValue = sessionStorage.getItem('menuValue');
            if (menuValue && menuValue == resMenu.menuValue) {
              resMenu.showSubRoute = true;
            } else {
              resMenu.showSubRoute = false;
            }
          });
        });
      }
    });
    this.settings.layoutMode.subscribe((layout) => {
      this.layoutMode = layout;
      if (layout == 'mini') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });
    this.settings.layoutWidth.subscribe((layout) => {
      this.layoutWidth = layout;
      if (layout == 'box') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });
    this.settings.sidebarColor2.subscribe((res: string) => {
      this.selectedColor = res;
    });
    this.settings.topbarColor3.subscribe((res: string) => {
      this.selectedColor1 = res;
    });
    this.settings.topbarColor4.subscribe((res: string) => {
      this.horizontalColor = res;
    });
    this.settings.primaryColor1.subscribe((res: string) => {
      this.dthemeColor = res;
    });
    // <* to check layout position *>

     // <* to check layout colors *>

     // <* to check layout topcolor *>

    // <* to check layout width *>
    this.sideBar.layoutWidth.subscribe((res: string) => {
      this.layoutWidth = res;
    });
    // <* to check layout position *>
    // <* to check layout direction *>

    // <* to check layout view *>

    // <* to check layout width *>

    // <* to check layout direction *>
    // <* to check session time *>
    this.sessionOut();
    // <* to check session time *>
  }





  public getScrollContentPages(): boolean {
    if (
      this.base == 'dashboard' ||
      this.base == 'customer' ||
      this.page == 'categories' ||
      this.base == 'reports' ||
      this.base == 'expenses' ||
      this.base == 'payments' ||
      this.base == 'estimates' ||
      this.base == 'invoices'||
      this.page == 'calls'
    )
      return false;
    else return true;
  }

  private getRoutes(route: RouterObject): void {
    const splitVal =  route?.url.split('/');
    this.common.currentRoute.next(route.url);
    this.common.baseRoute.next(splitVal[1]);
    this.common.pageRoute.next(splitVal[2]);
    this.common.lastRoute.next(splitVal[3]);



    // sidebar hide
    if(
      (this.common.pageRoute.getValue() == 'general-invoice1')
    ) 
    {
      this.sidebar = false;
    }else {
      this.sidebar = true ;
    }
    //rightsideview hide

  }

  private sessionOut(): void {
    const loginTime: Date|string = localStorage.getItem('timeOut') || Date();
    // convert to date object
    const timeOut: Date = new Date(loginTime);


  
  }
  
  public toggleMobileIcon(): void {
    this.sideBar.switchMobileSideBarPosition();
  }

  // handleMouseEnter(event: MouseEvent): void {
  //   if (this.expandMenuCondition()) {
  //     const target = event.target as HTMLElement;
  //     const closestSidebar = target.closest('.sidebar');
      
  //     if (closestSidebar) {
  //       // Handle adding classes and sliding down
  //     } else {
  //       // Handle removing classes and sliding up
  //     }
  //   }
  // }
  ngOnInit():void{
    this.breakpointObserver.observe(['(min-width: 991.98px)'])
    .subscribe((result: { matches: any; }) => {
      if (result.matches) {
        this.mobileSidebar = false;
      } 
    });
  }
  ngOnDestroy(): void {
    this.sideBar.changeThemeColor('light');
  }

}
