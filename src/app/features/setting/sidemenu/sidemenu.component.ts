import { Component} from '@angular/core';
import { Event, NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonService, DataService, routes, SideBarService } from '../../../../../src/app/core/core.index';
import { mainMenus, SideBarData } from '../../../../../src/app/core/models/models';
import { CommonModule } from '@angular/common';
interface url{
  url:string
}
@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.scss'],
    imports:[CommonModule,RouterLink,RouterLinkActive]
})
export class SidemenuComponent  {
  url: string|number;
  public routes = routes;
  side_bar_data:any[] = [];
  openMenuItem: any = null;
  openSubmenuOneItem: any = null;
  base = '';
  page = '';
  last = '';
  currentRoute = '';
  constructor(private router: Router,public sideBar: SideBarService,private data: DataService, public common:CommonService) {
    this.url = this.router.url;
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.url = this.router.url;
      }
    });
    this.common.baseRoute.subscribe((res: string) => {
      this.base = res;
    });
    this.common.pageRoute.subscribe((res: string) => {
      this.page = res;
    });
    this.common.lastRoute.subscribe((res: string) => {
      this.last = res;
    });
    this.getRoutes(this.router);
    this.data.getSideBarData.subscribe((res:SideBarData[]) => {
      this.side_bar_data = res;
  });
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
  private getRoutes(route: url): void {
    const splitVal = route.url.split('/');
    this.currentRoute = route.url;
    this.base = splitVal[1];
    this.page = splitVal[2];
    this.last = splitVal[3];
  }

}
