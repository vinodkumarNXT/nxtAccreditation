import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableGridService {

  constructor() {}

  // Data to be fetched, initially empty
  private academicTableList: any[] = [];
  private paginatedTableList: any[] = [];
  private totalRecords: number = 0;
  private pageSize: number = 10; // Default page size
  private currentPage: number = 0;

  // Method to set the academic student list and update pagination
  setAcademicStudentList(studentList: any[], pageSize: number = 10) {
    this.academicTableList = studentList;
    this.pageSize = pageSize;
    this.totalRecords = studentList.length;
    this.updatePaginatedList();
  }

  // Update the paginated list based on current page and page size
  private updatePaginatedList() {
    const startIndex = this.currentPage * this.pageSize;
    this.paginatedTableList = this.academicTableList.slice(startIndex, startIndex + this.pageSize);
  }

  // Get the paginated list
  getPaginatedStudentList() {
    return this.paginatedTableList;
  }

  // Get the total number of records
  getTotalRecords() {
    return this.totalRecords;
  }

  // Get the current page
  getCurrentPage() {
    return this.currentPage;
  }

  // Set the current page
  setCurrentPage(page: number) {
    this.currentPage = page;
    this.updatePaginatedList();
  }

  // Get page size
  getPageSize() {
    return this.pageSize;
  }

  // Set page size
  setPageSize(pageSize: number) {
    this.pageSize = pageSize;
    this.updatePaginatedList();
  }
}
