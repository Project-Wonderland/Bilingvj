import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

import { CommonService, routes } from '../../../../../src/app/core/core.index';
import { SettingsService } from '../../../../../src/app/core/services/settings/settings.service';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexGrid,
  ApexResponsive,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DateRangePickerComponent } from '../../common/date-range-picker/date-range-picker.component';

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | any;
  xaxis: ApexXAxis | any;
  fill: ApexFill | any;
  tooltip: ApexTooltip | any;
  stroke: ApexStroke | any;
  legend: ApexLegend | any;
  title: ApexTitleSubtitle | any;
  colors: string[] | any;
  subtitle: ApexTitleSubtitle | any;
  grid: ApexGrid | any;
  responsive:ApexResponsive | any;

};
Chart.register(...registerables);

@Component({
  selector: 'app-modal-dashboard',
  imports:[CommonModule,NgApexchartsModule,RouterLink,DateRangePickerComponent],
  templateUrl: './modal-dashboard.component.html',
  styleUrls: [ './modal-dashboard.component.scss']
})
export class ModalDashboardComponent {
routes=routes;
base = '';
  @ViewChild('chart')
  chart!: ChartComponent;
  public revenueChart: Partial<ChartOptions>;
  public invoiceIncome: Partial<ChartOptions>;
  public salesChart: Partial<ChartOptions> | any;
  constructor( private common: CommonService,private layout:SettingsService) {
    this.common.baseRoute.subscribe((res: string) => {
      this.base = res;
      if (this.base === 'layout-single'){
        layout.changeLayoutMode('single');
      }else if (this.base === 'layout-default'){
        layout.changeLayoutMode('default');
      }else if (this.base === 'layout-mini'){
        layout.changeLayoutMode('mini');
      }else if (this.base === 'layout-transparent'){
        layout.changeLayoutMode('transparent');
      }else if (this.base === 'layout-without-header'){
        layout.changeLayoutMode('without-header');
      }else if (this.base === 'layout-rtl'){
        layout.changeLayoutMode('rtl');
      }else if (this.base === 'layout-boxed'){
        layout.changeLayoutWidth('box');
      }else if (this.base === 'layout-dark'){
        layout.changeThemeColor('dark');
      }else {

        // layout.changeLayoutMode('1');
        // layout.changeLayoutWidth('1');
        // layout.changeThemeColor('1');
      }
    });
    this.revenueChart=
    {
      chart: {
        height: 360,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: false,
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
        }
      }],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 5, 
          borderRadiusWhenStacked: 'all',
          endingShape: 'rounded',
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
      enabled: false
    },
      colors: ['#7539FF', '#F8F5FF'],
      series: [ {
        name: 'Outstanding',
        data: [0, 10, 30, 50, 25, 38, 40]
      },{
        name: 'Received ',
        data: [30, 30, 80, 70, 80, 80, 80]
      },],
      grid: {
        borderColor: '#E2E4E6',
        strokeDashArray: 5,
        padding: {
          right: -10, left: -10, 
        },
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yaxis: {
        min: 0,
        max: 100,
        labels: { show: false }
      },
      fill: {
        opacity: 1
      },
  }
  this.invoiceIncome={
    chart: {
      height: 60,
      type: 'area',
      background: '#ffffff',
      toolbar: {
        show: false,
      }
    },
    colors: ['#27AE60'],
    fill: {
      type: 'solid',
      opacity: 0 // Ensure solid fill
  },    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    series: [{
      name: 'Income',
      data: [30, 35, 45, 40, 55, 45, 56, 53, 68, 63, 70, 80]
    }],
    grid: {
      show: false, // Set false to hide all grid lines
      padding: { left: -10, right: -10, top: -30, bottom: -28 } 
  },
      yaxis: {
        min: 0,
        max: 80,
        labels: { show: false }  // Hides Y-axis values
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
      labels: { show: false }
    },
  }
  this.salesChart={
    series: [35, 40, 25], // Percentages for each section
    chart: {
        type: 'donut',
        height: 300,
    },
    labels: [ 'Dell XPS 13', 'Nike T-shirt', 'Apple iPhone 15'], // Labels for the data
    colors: ['#F38BBB', '#5297FE', '#7DCEA0'], // Colors from the image
    plotOptions: {
        pie: {
          startAngle: -110, // Start from the top
          endAngle: 110, // End at the bottom
            donut: {
                size: '60%',
                labels: {
                    show: false,
                    total: {
                        show: true,
                        label: 'Leads',
                        formatter: function (w:any) {
                            return '589';
                        }
                    }
                }
            }
        }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false,
    },
    label: {
      show: false,
    }
  }
  }

  ngOnDestroy(): void {
    this.layout.layoutMode.next('default');
    this.layout.themeColor.next('light');
    this.layout.changeLayoutMode('default');
    this.layout.changeLayoutWidth('fluid');
    this.layout.changeThemeColor('light');
  }
}
