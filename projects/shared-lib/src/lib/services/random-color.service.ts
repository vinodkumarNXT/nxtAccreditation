import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomColorService {
  private colorMap: Map<string, string> = new Map(); // Stores the colors for each item

  constructor() {}

  // Generates a random color in HEX format
  private generateRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getRandomColorForItem(item: string): string {
    // If the color for this item has already been generated, return it
    if (this.colorMap.has(item)) {
      return this.colorMap.get(item)!;
    }
    // Generate a new random color for the item
    const randomColor = this.generateRandomColor();
    // Store the color associated with the item
    this.colorMap.set(item, randomColor);
    return randomColor;
  }

  
}
