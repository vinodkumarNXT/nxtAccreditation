import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadAndReplaceFilesService {

  progressInfos: { fileName: string; value: number; file: File }[] = []; // New file progress info
  selectedFiles: File[] = []; // Newly selected files for upload
  existingFiles: string[] = []; // List of already uploaded files
  removedFiles: string[] = []; // Track removed files

  constructor() {}

    // Method to handle new file selection
    onFilesSelected(event: any): void {
      const files = event.target.files;
      this.clearAllNewFiles(); // Clear previously selected new files
      for (let i = 0; i < files.length; i++) {
        this.selectedFiles.push(files[i]);
        this.progressInfos.push({
          fileName: files[i].name,
          value: 0, // Initial progress
          file: files[i]
        });
  
        // Simulate file upload or initiate actual upload here
        this.uploadFile(files[i], this.progressInfos.length - 1);
      }
    }
  
    // Method to simulate or initiate file upload (adjust with actual logic)
    private uploadFile(file: File, index: number): void {
      const interval = setInterval(() => {
        if (this.progressInfos[index].value >= 100) {
          clearInterval(interval);
        } else {
          this.progressInfos[index].value += 10;
        }
      }, 500);
    }
  
    // Method to remove a selected (new) file
    removeFile(index: number): void {
      this.selectedFiles.splice(index, 1);
      this.progressInfos.splice(index, 1);
    }
  
    // Method to remove an existing file
    removeExistingFile(fileName: string): void {
      this.removedFiles.push(fileName);
      this.existingFiles = this.existingFiles.filter(file => file !== fileName);
    }
  
    // Set existing files when editing
    setExistingFiles(files: string[]): void {
      this.existingFiles = [...files];
    }
  
    // Method to clear all newly selected files
    clearAllNewFiles(): void {
      this.selectedFiles = [];
      this.progressInfos = [];
    }
  
    // Method to clear everything after submission
    clearAllFiles(): void {
      this.clearAllNewFiles();
      this.removedFiles = [];
    }
}
