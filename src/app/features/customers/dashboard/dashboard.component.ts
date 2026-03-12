import { Component, ViewChild } from '@angular/core';
import { routes } from '../../../../../src/app/core/core.index';
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
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DateRangePicker2Component } from '../../common/date-range-picker-2/date-range-picker-2.component';

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
  labels:ApexDataLabels | any;

};
@Component({
  selector: 'app-dashboard',
  imports:[CommonModule,MatSliderModule,
    FormsModule,RouterLink,NgApexchartsModule,DateRangePicker2Component
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss']
})
export class DashboardComponent {
routes=routes
@ViewChild('chart') chart!: ChartComponent;
public radialChart: Partial<ChartOptions>;
constructor(){
  this.radialChart= {
    chart: {
      type: 'donut',
      height: 164,
    },
    series: [30, 10, 30, 30],
    labels: ['Total', 'Total', 'Total', 'Total'],
    colors: ['#7539FF', '#E2B93B', '#27AE60', '#DD2590'],
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: false, // No gap between segments
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: '70%',
          labels: {
            show: true, // ✅ Ensure donut center is always visible
            name: {
              show: true,
              text: 'Total',
              fontSize: '13px',
              offsetY: -4,
              color: '#5D6772'
            },
            value: {
              show: true,
              fontSize: '18px',
              fontWeight: 700,
              offsetY: 10,
              color: '#051321',
              formatter: function () {
                return "$3656"; // ✅ Always shows this value
              }
            }
          }
        }
      }
    },
    tooltip: {
      enabled: false
    }
  }
}
}
