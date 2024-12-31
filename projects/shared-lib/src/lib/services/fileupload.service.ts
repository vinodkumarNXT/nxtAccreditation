import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { endpoints } from 'projects/shell/environments/endpoint';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  private baseUrl = endpoints.fileUpload;

  constructor() {}

  upload(file: File): Promise<AxiosResponse<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return axios.post(`${this.baseUrl}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: (progressEvent) => {
        if (progressEvent.total) {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          console.log(`Upload Progress: ${progress}%`);
        }
      }
    });
  }

  getFiles(): Promise<AxiosResponse<any>> {
    return axios.get(`${this.baseUrl}/files`);
  }

  
}
