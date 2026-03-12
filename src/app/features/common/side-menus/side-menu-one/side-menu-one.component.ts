import { CommonModule } from '@angular/common';
import { Component, OnDestroy} from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService, DataService, routes } from '../../../../../../src/app/core/core.index';
import { MenuItem, SideBar, SideBarMenu, subMenus } from '../../../../../../src/app/core/models/models';
import { SideBarService } from '../../../../../../src/app/core/services/side-bar/side-bar.service';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { de } from 'intl-tel-input/i18n';

interface SubMenu {
  menuValue: string;
  route?: string;
  base?: string;
  showSubRoute?: boolean;
  SubMenus?: SubMenu[];
  hasSubRouteTwo2?:boolean;
}

interface MainMenus {
  menu: SubMenu[];
}

interface SideBarData {
  
  mainMenus?: MainMenus[];
  active: boolean;
  icon: string;
  showAsTab: boolean;
  separateRoute: boolean;
  menu: MenuItem[];
  menuValue: string;
  showSubRoute: boolean;
  route: string;
  hasSubRoute: boolean;
  base: string;
  url:string;
  tittle:string;
  hasSubRouteTwo2?:boolean;
  subMenus: subMenus[];

}
interface url{
  url:string
}
@Component({
    selector: 'app-side-menu-one',
    templateUrl: './side-menu-one.component.html',
    styleUrls: ['./side-menu-one.component.scss'],
    imports: [CommonModule,RouterLink,NgScrollbarModule,RouterLinkActive]
})
export class SideMenuOneComponent implements OnDestroy {
  public routes = routes;
  public headerSidebarStyle = '1';
  public primarySkinStyle = '0';
  public mobileSidebar = false;
  public multilevel: Array<boolean> = [false, false, false];
  
  public toggleSidebar(): void {
    this.sideBar.switchSideMenuPosition();
  }
  base = 'index';
  page = '';
  last = '';
  currentRoute = '';
  openMenuItem: any = null;
  openSubmenuOneItem: any = null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  side_bar_data:any[] = [];
  side_bar_data1:SideBarData[] = [];

  constructor(
    public router: Router,
    private data: DataService,
    public sideBar: SideBarService,
    private auth: AuthService
  ) {
    debugger;
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getRoutes(event);
      }
    });
    this.getRoutes(this.router);
    this.sideBar.headerSidebarStyle.subscribe((res: string) => {
      this.headerSidebarStyle = res;
    });
    this.sideBar.primarySkinStyle.subscribe((res: string) => {
      this.primarySkinStyle = res;
    });
    this.sideBar.toggleMobileSideBar.subscribe((res:string) => {
      if (res == "true") {
        this.mobileSidebar = true;
      } else {
        this.mobileSidebar = false;
      }
    });
    // get sidebar data as observable because data is controlled for design to expand submenus
    debugger;

      this.data.getSideBarData.subscribe((res: SideBarData[]) => {

        const allowedSections = [
          'Inventory & Sales',
          'Purchases',
          'Finance & Accounts'
        ];

        this.side_bar_data = res.filter(item =>
          allowedSections.includes(item.tittle)
        );

      });
  }

 

  private getRoutes(route: url): void {
    const splitVal = route.url.split('/');
    this.currentRoute = route.url;
    this.base = splitVal[1];
    this.page = splitVal[2];
    this.last = splitVal[3];
  }

  public miniSideBarMouseHover(position: string): void {
    if (position == 'over') {
      this.sideBar.expandSideBar.next("true");
    } else {
      this.sideBar.expandSideBar.next("false");
    }
  }

  public expandSubMenus(menu: { menuValue: string; showSubRoute: boolean; }): void {
    sessionStorage.setItem('menuValue', menu.menuValue);
    this.side_bar_data.map((mainMenus: MainMenus) => {

      mainMenus.menu.map((resMenu) => {
        // collapse other submenus which are open
        if (resMenu.menuValue == menu.menuValue) {
          menu.showSubRoute = !menu.showSubRoute;
        } else {
          resMenu.showSubRoute = false;
        }
      });
    });
  }
  isOpen=false;
  public expandSubMenusActive(): void {
    const activeMenu = sessionStorage.getItem('menuValue'); // Was 'base' — changed to 'menuValue'
  
    if (!Array.isArray(this.side_bar_data)) {
      console.warn('side_bar_data is not initialized');
      return;
    }
  
    this.side_bar_data.forEach((mainMenu: SideBar) => {
      if (!Array.isArray(mainMenu.menu)) return;
  
      mainMenu.menu.forEach((resMenu: SideBarMenu) => {
        if (activeMenu) {
          // Show only the menu matching the stored menuValue
          resMenu.showSubRoute = (resMenu.menuValue === activeMenu);
        } else {
          // No session value: Show only 'index' base routes
          resMenu.showSubRoute = (resMenu.base === 'index');
        }
      });
    });
  
    this.isOpen = !activeMenu;
  }
  openMenu(menu: any): void {
    if (this.openMenuItem === menu) {
      this.openMenuItem = null;
    } else {
      this.openMenuItem = menu;
    }
  }
  openSubmenuOne(subMenus: any): void {
    if (this.openSubmenuOneItem === subMenus) {
      this.openSubmenuOneItem = null;
    } else {
      this.openSubmenuOneItem = subMenus;
    }
  }

  public navigateAuth(menuValue: string): void {
    //navigate to login page once authenticated
    if (menuValue == 'Authentication') localStorage.removeItem('authenticated');
  }
ngOnInit():void{
  this.expandSubMenusActive();
}
  ngOnDestroy(): void {
    this.sideBar.resetMiniSidebar();
  }
  public logOut(): void {
    this.auth.logout();
  }
  multiLevel1 = false;
  multiLevel2 = false;
  multiLevel3 = false;
  multiLevelOne() {
    this.multiLevel1 = !this.multiLevel1;
  }
  multiLevelTwo() {
    this.multiLevel2 = !this.multiLevel2;
  }
  multiLevelThree() {
    this.multiLevel3 = !this.multiLevel3;
    this.multiLevel2=true;
  }
  sidebarfooter = false;
  closefooter():void{
    this.sidebarfooter= true
  }
}
