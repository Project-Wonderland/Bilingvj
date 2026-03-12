import { Component, ViewChild } from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { DataService, routes } from '../../../../../../src/app/core/core.index';
import { apiResultFormat, reports } from '../../../../../../src/app/core/models/models';
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
  selector: 'app-tax-report',
  imports: [CommonModule,FormsModule,CustomPaginationComponent,
    MatSortModule,NgApexchartsModule,MatSliderModule,DateRangePickerComponent,RouterLink,
    DateRangePicker2Component
  ],
  templateUrl: './tax-report.component.html',
  styleUrls: [ './tax-report.component.scss']
})
export class TaxReportComponent {
  routes=routes
  @ViewChild('chart') chart!: ChartComponent;
  public timeChart: Partial<ChartOptions> | any;
  public timeChart2: Partial<ChartOptions> | any;
  public timeChart3: Partial<ChartOptions> | any;
  public timeChart4: Partial<ChartOptions> | any;
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
  ngOnInit():void{
      this.timeChart = {
        series: [{
          name: "Tax Collected",
          data: [4,6,9,9,7]
        }],
  
        chart: {
          type: 'bar',
          width: 56,
          height:70,
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          },
          dropShadow: {
            enabled: false,
            top: 3,
            left: 14,
            blur: 4,
            opacity: .12,
            color: "#fff"
          },
          sparkline: {
            enabled: !0
          }
        },
        markers: {
          size: 0,
          colors: ["#7539FF"],
          strokeColors: "#fff",
          strokeWidth: 2,
          hover: {
            size: 7
          }
        },
        plotOptions: {
          bar: {
            horizontal: !1,
            columnWidth: "35%",
            endingShape: "rounded"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: !0,
          width: 2.5,
          curve: "smooth"
        },
        colors: ['#7539FF', '#EFEEFF'],
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May"],
          labels: {
            show: false,}
        },
        tooltip: {
          show:false,
          theme: "light",
          fixed: {
            enabled: false
          },
          x: {
            show: true
          },
  
          marker: {
            show: true
          }
        }
      };
      this.timeChart2 = {
        series: [{
          name: "Tax Collected",
          data: [4,6,9,9,7]
        }],
  
        chart: {
          type: 'bar',
          width: 56,
          height:70,
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          },
          dropShadow: {
            enabled: false,
            top: 3,
            left: 14,
            blur: 4,
            opacity: .12,
            color: "#fff"
          },
          sparkline: {
            enabled: !0
          }
        },
        markers: {
          size: 0,
          colors: ["#7539FF"],
          strokeColors: "#fff",
          strokeWidth: 2,
          hover: {
            size: 7
          }
        },
        plotOptions: {
          bar: {
            horizontal: !1,
            columnWidth: "35%",
            endingShape: "rounded"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: !0,
          width: 2.5,
          curve: "smooth"
        },
        colors: ['#27AE60', '#EFEEFF'],
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May"],
          labels: {
            show: false,}
        },
        tooltip: {
          show:false,
          theme: "light",
          fixed: {
            enabled: false
          },
          x: {
            show: true
          },
  
          marker: {
            show: true
          }
        }
      };
      this.timeChart3 = {
        series: [{
          name: "Tax Collected",
          data: [4,6,9,9,7]
        }],
  
        chart: {
          type: 'bar',
          width: 56,
          height:70,
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          },
          dropShadow: {
            enabled: false,
            top: 3,
            left: 14,
            blur: 4,
            opacity: .12,
            color: "#fff"
          },
          sparkline: {
            enabled: !0
          }
        },
        markers: {
          size: 0,
          colors: ["#7539FF"],
          strokeColors: "#fff",
          strokeWidth: 2,
          hover: {
            size: 7
          }
        },
        plotOptions: {
          bar: {
            horizontal: !1,
            columnWidth: "35%",
            endingShape: "rounded"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: !0,
          width: 2.5,
          curve: "smooth"
        },
        colors: ['#E2B93B', '#EFEEFF'],
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May"],
          labels: {
            show: false,}
        },
        tooltip: {
          show:false,
          theme: "light",
          fixed: {
            enabled: false
          },
          x: {
            show: true
          },
  
          marker: {
            show: true
          }
        }
      };
      this.timeChart4 = {
        series: [{
          name: "Tax Collected",
          data: [4,6,9,9,7]
        }],
  
        chart: {
          type: 'bar',
          width: 56,
          height:70,
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          },
          dropShadow: {
            enabled: false,
            top: 3,
            left: 14,
            blur: 4,
            opacity: .12,
            color: "#fff"
          },
          sparkline: {
            enabled: !0
          }
        },
        markers: {
          size: 0,
          colors: ["#7539FF"],
          strokeColors: "#fff",
          strokeWidth: 2,
          hover: {
            size: 7
          }
        },
        plotOptions: {
          bar: {
            horizontal: !1,
            columnWidth: "35%",
            endingShape: "rounded"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: !0,
          width: 2.5,
          curve: "smooth"
        },
        colors: ['#EF1E1E', '#EEEEEE'],
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May"],
          labels: {
            show: false,}
        },
        tooltip: {
          show:false,
          theme: "light",
          fixed: {
            enabled: false
          },
          x: {
            show: true
          },
  
          marker: {
            show: true
          }
        }
      };
  }
  initChecked=false;
  public pageSize = 10;
  public tableData: reports[] = [];
  public tableDataCopy: reports[] = [];
  public actualData: reports[] = [];
  public currentPage = 1;
  public skip = 0;
  public limit: number = this.pageSize;
  public serialNumberArray: number[] = [];
  public totalData = 0;
  public pageSelection: pageSelection[] = [];
  dataSource!: MatTableDataSource<reports>;
  public searchDataValue = '';
  public row=true;
  constructor(
    private data: DataService,
    private router: Router,
    private pagination: PaginationService
  ) {
    this.data.getTaxReport().subscribe((apiRes: apiResultFormat) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
        if (this.router.url == this.routes.taxReport) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  private getTableData(pageOption: pageSelection): void {
    this.data.getTaxReport().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.tableDataCopy = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: reports, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.tableDataCopy.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<reports>(this.actualData);
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
