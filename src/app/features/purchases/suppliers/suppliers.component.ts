import { Component } from '@angular/core';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService, routes } from '../../../../../src/app/core/core.index';
import { apiResultFormat, supplier } from '../../../../../src/app/core/models/models';
import { pageSelection, PaginationService, tablePageSize } from '../../../../../src/app/shared/custom-pagination/pagination.service';
import intlTelInput from 'intl-tel-input';
import { MatSliderModule } from '@angular/material/slider';
import { CustomPaginationComponent } from '../../../shared/custom-pagination/custom-pagination.component';
import { MatSelectModule } from '@angular/material/select';
import { DateRangePickerComponent } from '../../common/date-range-picker/date-range-picker.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss'],
  imports:[MatSliderModule,CustomPaginationComponent,MatSortModule,MatSelectModule,DateRangePickerComponent,CommonModule,FormsModule],
})
export class SuppliersComponent {
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
ngAfterViewInit(): void {
  const input = document.querySelector('#phone') as HTMLInputElement;
  const input2 = document.querySelector('#phone2') as HTMLInputElement;
  intlTelInput(input, {
    initialCountry: 'us',
    preferredCountries: ['us', 'gb', 'in'],
    utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js'
  }as any);
  intlTelInput(input2, {
    initialCountry: 'us',
    preferredCountries: ['us', 'gb', 'in'],
    utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js'
  }as any);
      // Restrict input to numbers, "+", and allowed characters
      input.addEventListener('input', () => {
        input.value = input.value.replace(/[^0-9+()-\s]/g, ''); // Removes any character not allowed
      });
      input2.addEventListener('input', () => {
        input2.value = input2.value.replace(/[^0-9+()-\s]/g, ''); // Removes any character not allowed
      });
}
 // pagination variables
 initChecked=false;
 public pageSize = 10;
 public tableData: supplier[] = [];
 public tableDataCopy: supplier[] = [];
 public actualData: supplier[] = [];
 public currentPage = 1;
 public skip = 0;
 public limit: number = this.pageSize;
 public serialNumberArray: number[] = [];
 public totalData = 0;
 public pageSelection: pageSelection[] = [];
 dataSource!: MatTableDataSource<supplier>;
 public searchDataValue = '';
 public row=true;
 constructor(
   private data: DataService,
   private router: Router,
   private pagination: PaginationService
 ) {
   this.data.getSupplier().subscribe((apiRes: apiResultFormat) => {
     this.actualData = apiRes.data;
     this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
       if (this.router.url == this.routes.suppliers) {
         this.getTableData({ skip: res.skip, limit: res.limit });
         this.pageSize = res.pageSize;
       }
     });
   });
 }
 private getTableData(pageOption: pageSelection): void {
   this.data.getSupplier().subscribe((apiRes: apiResultFormat) => {
     this.tableData = [];
     this.tableDataCopy = [];
     this.serialNumberArray = [];
     this.totalData = apiRes.totalData;
     apiRes.data.map((res: supplier, index: number) => {
       const serialNumber = index + 1;
       if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
         res.sNo = serialNumber;
         this.tableData.push(res);
         this.tableDataCopy.push(res);
         this.serialNumberArray.push(serialNumber);
       }
     });
     this.dataSource = new MatTableDataSource<supplier>(this.actualData);
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
