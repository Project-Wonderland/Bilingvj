import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
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
  NgApexchartsModule,
} from 'ng-apexcharts';
import { routes } from '../../../../../src/app/core/core.index';
import { RouterLink } from '@angular/router';
import { DateRangePickerComponent } from '../../common/date-range-picker/date-range-picker.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

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
};

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.scss'],
    imports: [CommonModule,RouterLink,NgApexchartsModule,DateRangePickerComponent,BsDatepickerModule]
})
export class DashboardComponent {
  public routes = routes;
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      chart: {
        height: 390,
        type: 'bar',
        toolbar: {
          show: false,
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',
          borderRadius: 10,
          borderRadiusApplication: 'end', // this makes only the top of vertical bars rounded
          endingShape: 'rounded',
        },
      },
      colors: ['#7539FF'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      
      series: [{
        name: 'Income',
        data: [28, 28, 43, 75, 45, 38, 47,28, 33, 23, 58, 40]
      }],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          style: {
            colors: '#051321', 
            fontSize: '14px',
          }
        }
      },
      yaxis: {
        max: 100,
        labels: {
          offsetX: -15,
          style: {
            colors: '#051321', 
            fontSize: '14px',
          }
        }
      },
      grid: {
        borderColor: '#CED2D4',
        strokeDashArray: 5,
        padding: {
          left: -8,
          right: -15, 
        },
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val:any) {
            return "" + val + "%"
          }
        }
      }
    };
  }
}
