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
import { RouterLink } from '@angular/router';
import { DateRangePickerComponent } from '../../common/date-range-picker/date-range-picker.component';
import {MatSelectModule} from '@angular/material/select'

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

@Component({
  selector: 'app-admin-dashboard-2',
  templateUrl: './admin-dashboard-2.component.html',
  styleUrls: ['./admin-dashboard-2.component.scss'],
  imports:[CommonModule,NgApexchartsModule,RouterLink,DateRangePickerComponent,MatSelectModule]
})
export class AdminDashboard2Component {
routes=routes
@ViewChild('chart') chart!: ChartComponent;
public salesChart: Partial<ChartOptions> | any;
public invoiceChart: Partial<ChartOptions> | any;
constructor() {
  this.salesChart={
    chart: {
      height: 300,
      type: 'bar',
      toolbar: {
        show: false,
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
    enabled: false
  },
    label: {
      show: false,
    },
    colors: ['#2F80ED', '#E2B93B'],
    series: [ {
      name: 'Received ',
      data: [80, 100, 50, 50, 80, 60, 100, 60, 40, 55, 30, 70]
    },{
      name: 'Pending ',
      data: [40, 60, 60, 60, 20, 80, 40, 20, 50, 70, 40, 60]
    },],
    grid: {
      borderColor: '#E2E4E6',
      strokeDashArray: 5,
      padding: {
        right: -10, left: 0, 
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yaxis: {
      min: 0,
      max: 100,
      labels: {offsetX: -15, 
        formatter: (val:any) => {
          return '$' + val / 1 
        }
      }
    },
    fill: {
      opacity: 1
    },
}
this.invoiceChart={
    series: [40, 35, 25], // Percentages for each section
    chart: {
        type: 'donut',
        height: 240,
    },
    labels: [ 'Invoiced', 'Received', 'Pending'], // Labels for the data
    colors: ['#2F80ED', '#27AE60', '#E2B93B'], // Colors from the image
    plotOptions: {
        pie: {
            donut: {
                size: '70%',
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
      enabled: true
    },
    legend: {
      show: true,
      position: "bottom", 
    },
    label: {
      show: false,
    }

  }
}
}
