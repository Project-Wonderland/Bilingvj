import { Component, ViewChild } from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService, routes } from '../../../../../src/app/core/core.index';
import { apiResultFormat, subscription } from '../../../../../src/app/core/models/models';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexGrid,
  ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
  ChartComponent,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { Chart, registerables } from 'chart.js';
import { CommonModule } from '@angular/common';
import { pageSelection, PaginationService, tablePageSize } from '../../../shared/custom-pagination/pagination.service';
import { DateRangePickerComponent } from '../../common/date-range-picker/date-range-picker.component';
import { CustomPaginationComponent } from '../../../shared/custom-pagination/custom-pagination.component';
import { FormsModule } from '@angular/forms';

export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
}
Chart.register(...registerables);@Component({
    selector: 'app-subscription',
    templateUrl: './subscription.component.html',
    styleUrls: ['./subscription.component.scss'],
    imports: [CommonModule,DateRangePickerComponent,CustomPaginationComponent,FormsModule,MatSortModule,NgApexchartsModule]
})
export class SubscriptionComponent {
  routes=routes
   showFilter=false; 
   selectedFilter:boolean[]=[false];
   isFilter():void{
     this.showFilter=!this.showFilter;
   }
   isSelectedFilter(index:number){
     this.selectedFilter[index]=!this.selectedFilter[index]
   }
   formatLabel(value: number): string {
     if (value >= 1000) {
       return Math.round(value / 1000) + 'k';
     }
     return `${value}`;
   }
   public smalltask1: Partial<ChartOptions> | any;
   public smalltask2: Partial<ChartOptions> | any;
   public smalltask3: Partial<ChartOptions> | any;
   public smalltask4: Partial<ChartOptions> | any;
   @ViewChild('chart') chart!: ChartComponent;
   ngOnInit(): void{

  this.smalltask1 = {
    chart: {
      width: 100,
      height:80,
      type: 'donut',
      toolbar: {
        show: false,
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '50%' // Adjusts the size of the donut hole
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [90,10],
    colors: ['#7539FF','rgba(67, 87, 133, .09)'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          show: false
        }
      }
    }],
    legend: {
      show: false
    },
  };
  this.smalltask2 = {
    chart: {
      width: 100,
      height:80,
      type: 'donut',
      toolbar: {
        show: false,
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '50%' // Adjusts the size of the donut hole
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [70,30],
    colors: ['#3F8BFE','rgba(67, 87, 133, .09)'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          show: false
        }
      }
    }],
    legend: {
      show: false
    },
  };
  this.smalltask3 = {
    chart: {
      width: 100,
      height:80,
      type: 'donut',
      toolbar: {
        show: false,
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '50%' // Adjusts the size of the donut hole
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [30,70],
    colors: ['#27AE60','rgba(67, 87, 133, .09)'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          show: false
        }
      }
    }],
    legend: {
      show: false
    },
  };
  this.smalltask4 = {
    chart: {
      width: 100,
      height:80,
      type: 'donut',
      toolbar: {
        show: false,
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '50%' // Adjusts the size of the donut hole
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [20,80],
    colors: ['#EF1E1E','rgba(67, 87, 133, .09)'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          show: false
        }
      }
    }],
    legend: {
      show: false
    },
  };
  }
   // pagination variables
   initChecked=false;
   public pageSize = 10;
   public tableData: subscription[] = [];
   public tableDataCopy: subscription[] = [];
   public actualData: subscription[] = [];
   public currentPage = 1;
   public skip = 0;
   public limit: number = this.pageSize;
   public serialNumberArray: number[] = [];
   public totalData = 0;
   public pageSelection: pageSelection[] = [];
   dataSource!: MatTableDataSource<subscription>;
   public searchDataValue = '';
   public row=true;
   constructor(
     private data: DataService,
     private router: Router,
     private pagination: PaginationService
   ) {
     this.data.getSubscription().subscribe((apiRes: apiResultFormat) => {
       this.actualData = apiRes.data;
       this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
         if (this.router.url == this.routes.subscriptions) {
           this.getTableData({ skip: res.skip, limit: res.limit });
           this.pageSize = res.pageSize;
         }
       });
     });
   }
   private getTableData(pageOption: pageSelection): void {
     this.data.getSubscription().subscribe((apiRes: apiResultFormat) => {
       this.tableData = [];
       this.tableDataCopy = [];
       this.serialNumberArray = [];
       this.totalData = apiRes.totalData;
       apiRes.data.map((res: subscription, index: number) => {
         const serialNumber = index + 1;
         if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
           res.sNo = serialNumber;
           this.tableData.push(res);
           this.tableDataCopy.push(res);
           this.serialNumberArray.push(serialNumber);
         }
       });
       this.dataSource = new MatTableDataSource<subscription>(this.actualData);
       this.pagination.calculatePageSize.next({
         totalData: this.totalData,
         pageSize: this.pageSize,
         tableData: this.tableData,
         serialNumberArray: this.serialNumberArray,
       });
     });
   }
   
   public searchData(value: string): void {
     this.searchDataValue = value.trim().toLowerCase();
     this.dataSource.filter = this.searchDataValue;
     this.tableData = this.dataSource.filteredData;
     this.row = this.tableData.length > 0;
   
     if (this.searchDataValue !== '') {
       // Handle filtered data
       this.pagination.calculatePageSize.next({
         totalData: this.tableData.length,
         pageSize: this.pageSize,
         tableData: this.tableData,
         serialNumberArray: this.tableData.map((_, i) => i + 1), // Generates serials like [1, 2, 3...]
       });
     } else {
       // Handle reset to full data
       this.pagination.calculatePageSize.next({
         totalData: this.totalData,
         pageSize: this.pageSize,
         tableData: this.tableData,
         serialNumberArray: this.serialNumberArray,
       });
     }
   }
   
   public sortData(sort: Sort) {
     const data = this.tableData.slice();
   
     if (!sort.active || sort.direction === '') {
       this.tableData = data;
     } else {
       this.tableData = data.sort((a, b) => {
         const aValue = (a as never)[sort.active];
   
         const bValue = (b as never)[sort.active];
         return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
       });
     }
   }
   public changePageSize(pageSize: number): void {
     this.pageSelection = [];
     this.limit = pageSize;
     this.skip = 0;
     this.currentPage = 1;
     this.pagination.tablePageSize.next({
       skip: this.skip,
       limit: this.limit,
       pageSize: this.pageSize,
     });
   }
   selectAll(initChecked: boolean) {
     if (!initChecked) {
       this.tableData.forEach((f) => {
         f.isSelected = true;
       });
     } else {
       this.tableData.forEach((f) => {
         f.isSelected = false;
       });
     }
   }
}
