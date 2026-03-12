import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidemenuComponent } from './sidemenu/sidemenu.component';


@Component({
    selector: 'app-setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.scss'],
    imports:[RouterModule,SidemenuComponent]
})
export class SettingComponent{

}
