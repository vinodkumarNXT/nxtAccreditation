import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})


export class TablelistService {

  constructor() {}

  async fetchData(url: string) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  async fetchTableConfig(url: string) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching table configuration:', error);
      throw error;
    }
  }

  getTableColumns(config: any) {
    return [
      ...config.columns,
      { name: 'actions', label: 'Actions' }
    ];
  }
}