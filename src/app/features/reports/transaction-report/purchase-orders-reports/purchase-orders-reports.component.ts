import { Component, ViewChild } from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService, routes } from '../../../../../../src/app/core/core.index';
import { apiResultFormat, purchase } from '../../../../../../src/app/core/models/models';
import { pageSelection, PaginationService, tablePageSize } from '../../../../../../src/app/shared/custom-pagination/pagination.service';
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
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomPaginationComponent } from '../../../../shared/custom-pagination/custom-pagination.component';
import { MatSliderModule } from '@angular/material/slider';
import { DateRangePickerComponent } from '../../../common/date-range-picker/date-range-picker.component';
import { DateRangePicker2Component } from '../../../common/date-range-picker-2/date-range-picker-2.component';
export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
}
@Component({
  selector: 'app-purchase-orders-reports',
  imports:[CommonModule,FormsModule,CustomPaginationComponent,MatSortModule,
    MatSliderModule,DateRangePickerComponent,DateRangePicker2Component,NgApexchartsModule
  ],
  templateUrl: './purchase-orders-reports.component.html',
  styleUrls: [ './purchase-orders-reports.component.scss']
})
export class PurchaseOrdersReportsComponent {
  routes=routes
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return `${value}`;
  }
  
  showFilter=false; 
  selectedFilter:boolean[]=[false];
  isFilter():void{
    this.showFilter=!this.showFilter;
  }
  isSelectedFilter(index:number){
    this.selectedFilter[index]=!this.selectedFilter[index]
  }
  @ViewChild('chart') chart!: ChartComponent;
  public radialChart: Partial<ChartOptions> | any;
  public radialChart2: Partial<ChartOptions> | any;
  public radialChart3: Partial<ChartOptions> | any;
  public radialChart4: Partial<ChartOptions> | any;
  ngOnInit():void{
    this.radialChart= {
      chart: {
        type: 'donut',
        height: 49,
        width: 49,
      },
      series: [75, 25], // Adjust this for progress percentage
      labels: ['Completed', 'Remaining'],
      colors: ['#7539FF', '#EFEEFF'],
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: false
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: '80%', // Adjust for better inner circle spacing
            labels: {
              show: true,
              name: {
                show: false
              },
              value: {
                show: true,
                fontSize: '10px', // Small font to fit the size
                fontWeight: 600,
                offsetY: 0,
                color: '#7539FF',
                formatter: function () {
                  return '75%'; // or any other center label
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
    this.radialChart2={
      chart: {
        type: 'donut',
        height: 49,
        width: 49,
      },
      series: [75, 25], // Adjust this for progress percentage
      labels: ['Completed', 'Remaining'],
      colors: ['#27AE60', '#E9F7EF'],
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: false
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: '80%', // Adjust for better inner circle spacing
            labels: {
              show: true,
              name: {
                show: false
              },
              value: {
                show: true,
                fontSize: '10px', // Small font to fit the size
                fontWeight: 600,
                offsetY: 0,
                color: '#7539FF',
                formatter: function () {
                  return '75%'; // or any other center label
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
    this.radialChart3= {
      chart: {
        type: 'donut',
        height: 49,
        width: 49,
      },
      series: [75, 25], // Adjust this for progress percentage
      labels: ['Completed', 'Remaining'],
      colors: ['#E2B93B', '#FCF8EB'],
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: false
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: '80%', // Adjust for better inner circle spacing
            labels: {
              show: true,
              name: {
                show: false
              },
              value: {
                show: true,
                fontSize: '10px', // Small font to fit the size
                fontWeight: 600,
                offsetY: 0,
                color: '#7539FF',
                formatter: function () {
                  return '75%'; // or any other center label
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
    this.radialChart4= {
      chart: {
        type: 'donut',
        height: 49,
        width: 49,
      },
      series: [75, 25], // Adjust this for progress percentage
      labels: ['Completed', 'Remaining'],
      colors: ['#EF1E1E', '#FDE9E9'],
      legend: {
        show: false
      },
      dataLabels: {
        show:false,
        enabled: false
      },
      stroke: {
        show: false
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: '80%', // Adjust for better inner circle spacing
            labels: {
              show: true,
              name: {
                show: false
              },
              value: {
                show: true,
                fontSize: '10px', // Small font to fit the size
                fontWeight: 600,
                offsetY: 0,
                color: '#7539FF',
                formatter: function () {
                  return '75%'; // or any other center label
                }
              }
            }
          }
        }
      },
      tooltip: {
        show:false,
        enabled: false
      }
    }
  }
  // pagination variables
  initChecked=false;
  public pageSize = 10;
  public tableData: purchase[] = [];
  public tableDataCopy: purchase[] = [];
  public actualData: purchase[] = [];
  public currentPage = 1;
  public skip = 0;
  public limit: number = this.pageSize;
  public serialNumberArray: number[] = [];
  public totalData = 0;
  public pageSelection: pageSelection[] = [];
  dataSource!: MatTableDataSource<purchase>;
  public searchDataValue = '';
  public row=true;
  constructor(
    private data: DataService,
    private router: Router,
    private pagination: PaginationService
  ) {
    this.data.getpurchaseorder().subscribe((apiRes: apiResultFormat) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
        if (this.router.url == this.routes.purchasesOrdersReport) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  private getTableData(pageOption: pageSelection): void {
    this.data.getpurchaseorder().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.tableDataCopy = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: purchase, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.tableDataCopy.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<purchase>(this.actualData);
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
