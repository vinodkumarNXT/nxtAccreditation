import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightboxService {
  private images: any[] = [];
  private currentIndex: number = 0;

  constructor() {}

  open(images: any[], index: number): void {
    this.images = images;
    this.currentIndex = index;

    // Logic to open your lightbox here
    this.showLightbox(this.images, this.currentIndex);
  }

  prevImage(): any {
    // Move to the previous image and loop to the end if at the beginning
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    return this.images[this.currentIndex];
  }

  nextImage(): any {
    // Move to the next image and loop to the start if at the end
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    return this.images[this.currentIndex];
  }

  private showLightbox(images: any[], index: number): void {
    // Implement the actual opening of the lightbox using your chosen library/component
    console.log('Opening lightbox with images:', images, 'Current index:', index);
  }
}
