import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import { LightGallery } from 'lightgallery/lightgallery';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { routes } from '../../../../../src/app/core/core.index';
import { LightboxModule } from 'ngx-lightbox';
import { LightgalleryModule } from 'lightgallery/angular';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
  imports: [CommonModule,LightboxModule,LightgalleryModule]
})
export class SearchListComponent {
  routes=routes
  private lightGallery!: LightGallery;
  private needRefresh = false;
  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
  };
    ngAfterViewInit() {
      if (this.needRefresh) {
        this.lightGallery.refresh();
        this.needRefresh = false;
      }
    }
    onInit = (detail: { instance: LightGallery }): void => {
      this.lightGallery = detail.instance;
    };
    onBeforeSlide = (detail: BeforeSlideDetail): void => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { index, prevIndex } = detail;
    };
}
