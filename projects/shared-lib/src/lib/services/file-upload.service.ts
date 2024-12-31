import { Injectable } from '@angular/core';
import { SwalService } from 'school-erp-public';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  public selectedFiles: { fileName: string; fileContent: string }[] = [];
  public progressInfos: { fileName: string; value: number }[] = [];

  constructor( private swalService:SwalService) {}

  // Handles the event triggered when files are selected
  onFilesSelected(event: any): void {
    const allowedTypes = ['application/pdf', 'image/png', 'image/jpg', 'image/jpeg'];
    const maxSizeInBytes = 2 * 1024 * 1024; // 2MB in bytes
    const files = Array.from(event.target.files) as File[];

    // Check if total number of files exceeds limit of 8
    if (this.selectedFiles.length + files.length > 8) {
      // Notify user about the limit exceeded
       this.swalService.warningNotification("You can upload a maximum of 8 files.");
      return;
    }

    // Process each selected file
    this.processFiles(files, allowedTypes, maxSizeInBytes);
  }

  // Processes the selected files
  async processFiles(files: File[], allowedTypes: string[], maxSizeInBytes: number): Promise<void> {
    for (const file of files) {
      // Check if file type is allowed
      if (!allowedTypes.includes(file.type)) {
        // Notify user about the invalid file type
        this.swalService.warningNotification("Only PDF, PNG, JPG, and JPEG files are allowed.");
        continue;
      }

      // Check if file size exceeds the maximum limit
      if (file.size > maxSizeInBytes) {
        const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
        // Notify user about the size limit
        this.swalService.warningNotification(`File size (${fileSizeMB} MB) exceeds the 2MB limit.`);
        continue;
      }

      // Check for duplicate files
      const isDuplicate = this.selectedFiles.some(
        (selectedFile) => selectedFile.fileName === file.name
      );

      if (isDuplicate) {
        // Notify user about duplicate file
        this.swalService.warningNotification(`Duplicate file detected: ${file.name}`);
        continue;
      }

      // Process and add the valid file
      const fileData = await this.getFileData(file);
      this.selectedFiles.push(fileData);
      await this.uploadFile(file); // Upload the file
    }
  }

  // Simulate file upload and update progress
  async uploadFile(file: File): Promise<void> {
    const progressInfo = { fileName: file.name, value: 0 };
    this.progressInfos.push(progressInfo); // Add progress info for the file

    return new Promise<void>((resolve) => {
      this.simulateUploadProgress(progressInfo, resolve); // Simulate upload progress
    });
  }

  // Simulates upload progress
  simulateUploadProgress(progressInfo: { fileName: string; value: number }, resolve: () => void): void {
    let progress = 0;
    const interval = setInterval(() => {
      if (progress < 100) {
        progress += 10; // Increment progress by 10%
        progressInfo.value = progress; // Update progress value
      } else {
        clearInterval(interval); // Stop interval when progress is 100%
        resolve(); // Resolve the promise to indicate completion
      }
    }, 200); // Simulate progress update every 200 milliseconds
  }

  // Converts the file to Base64
  getFileData(file: File): Promise<{ fileName: string; fileContent: string }> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64File = reader.result as string;
        resolve({
          fileName: file.name,
          fileContent: base64File.split(',')[1], // Base64 content
        });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file); // Read file as Data URL
    });
  }

  // Removes a file based on its index
  removeFile(index: number): void {
    this.selectedFiles.splice(index, 1); // Remove from selected files
    this.progressInfos.splice(index, 1); // Also remove progress info
  }



    /**
   * Resets the selected files and progress information after submission.
   */
    resetUploadData(): void {
      this.selectedFiles = [];
      this.progressInfos = [];
    }
}
