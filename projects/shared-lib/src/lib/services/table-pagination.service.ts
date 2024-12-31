import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class TablePaginationService {

  pageSizeOptions: number[] = [10];

  constructor() {}

  loadTableData(listData: any[]): MatTableDataSource<any> {
    const dataSource = new MatTableDataSource(listData || []);
    this.generatePageSizeOptions(listData.length);
    return dataSource;
  }

  generatePageSizeOptions(dataLength: number): void {
    if (dataLength <= 10) {
      this.pageSizeOptions = [5, 10];
    } else if (dataLength <= 30) {
      this.pageSizeOptions = [5, 10, 15, 20];
    } else if (dataLength <= 50) {
      this.pageSizeOptions = [5, 10, 25, 50];
    } else if (dataLength <= 100) {
      this.pageSizeOptions = [10, 25, 50, 100];
    } else {
      this.pageSizeOptions = [10, 25, 50, 100, dataLength];
    }
  }

  initializePaginator(dataSource: MatTableDataSource<any>, paginator: any, sort: any): void {
    dataSource.paginator = paginator;
    dataSource.sort = sort;
    paginator.pageSize = 10; // Default page size
  }
}