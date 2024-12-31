import { endpoints } from 'projects/shell/environments/endpoint';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'projects/shell/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  async getImageAsBase64(fileName: string): Promise<string> {
    const fileDownload = endpoints.DownloadFile; // Construct the correct URL
    
    const url = `${environment.apiBaseURL}/${fileDownload}/${fileName}`; 
    try {
      const response = await axios.get(url, { responseType: 'arraybuffer' });
      
      // Convert ArrayBuffer to Base64
      const base64String = this.arrayBufferToBase64(response.data);

      // Return Base64 data URL
      return `data:image/png;base64,${base64String}`; // Adjust MIME type as needed
      
    } catch (error) {
      console.error('Error fetching image:', error);
      throw new Error('Unable to fetch image'); // Re-throwing with a custom message
    }
  }

  // Convert ArrayBuffer to Base64
  private arrayBufferToBase64(arrayBuffer: ArrayBuffer): string {
    const uint8Array = new Uint8Array(arrayBuffer);
    let binaryString = '';
    const len = uint8Array.byteLength;
    for (let i = 0; i < len; i++) {
      binaryString += String.fromCharCode(uint8Array[i]);
    }
    return btoa(binaryString);
  }
}
