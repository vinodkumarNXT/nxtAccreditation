import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AssetService {
  private readonly baseUrl = 'http://localhost:5002/assets/shared/';

  getAssetPath(fileName: string): string {
    return `${this.baseUrl}${fileName}`;
  }

  getBasePath(): string {
    return this.baseUrl;
  }
}
