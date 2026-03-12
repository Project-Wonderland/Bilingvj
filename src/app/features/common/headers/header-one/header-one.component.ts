import { Component } from '@angular/core';
import { MenuItem } from '../../../../../../src/app/core/models/models';
import { AuthService, DataService, routes } from '../../../../../../src/app/core/core.index';
import { SideBarService } from '../../../../../../src/app/core/services/side-bar/side-bar.service';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
interface breadCrumbData{
  hasSubData:boolean;
  data:string;
  data2?:string;
  base:string;
  route?:string;
}
interface url{
  url:string
}
@Component({
    selector: 'app-header-one',
    templateUrl: './header-one.component.html',
    styleUrls: ['./header-one.component.scss'],
    imports: [CommonModule,RouterLink]
})

export class HeaderOneComponent  {
  public miniSidebar = false;
  public headerSidebarStyle = '1';
  public routes = routes;
  base='';
  page='';
  last='';
  currentRoute = '';
  themeColor = 'light';
  public themeMode: string = '';
  mobileSidebar=false;
  elem=document.documentElement
  bread_Crumb:any[] = [];
  constructor(
    private auth: AuthService,
     public sideBar: SideBarService, 
     private data: DataService,
      public router: Router,
    ) {
    this.sideBar.toggleSideBar.subscribe((res: string) => {
      if (res == 'true') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
     
    });
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getRoutes(event);
      }
    });
    this.getRoutes(this.router);
    this.sideBar.headerSidebarStyle.subscribe((res: string) => {
      this.headerSidebarStyle = res;
    });
    this.data.getBreadCrumb.subscribe((res:breadCrumbData[]) => {
      this.bread_Crumb = res;
  });
  this.sideBar.themeColors.subscribe((res: string) => {
    this.themeColor = res;
  });
  }

  private getRoutes(route: url): void {
    const splitVal = route.url.split('/');
    this.currentRoute = route.url;
    this.base = splitVal[1];
    this.page = splitVal[2];
    this.last = splitVal[3];
  }

  public logOut(): void {
    this.auth.logout();
  }
  public toggleSideBar(): void {
    this.sideBar.switchSideMenuPosition();
  }
  public toggleMobileIcon(): void {
    this.sideBar.switchMobileSideBarPosition();
    this.mobileSidebar=!this.mobileSidebar;
  }
  overlayClose(){
    this.mobileSidebar=false;
  }
  fullscreen() {
    if(!document.fullscreenElement) {
      this.elem.requestFullscreen();
    }
    else {
      document.exitFullscreen();
    }
  }
  ngOnInit(): void {
    const themeColor = localStorage.getItem('themeColor') || 'light';
    this.sideBar.changeThemeColor(themeColor);
  }
}
