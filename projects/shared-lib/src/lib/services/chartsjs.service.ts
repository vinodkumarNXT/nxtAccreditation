import { Injectable } from '@angular/core';
import { Chart, ChartConfiguration, ChartType, registerables } from 'chart.js';


@Injectable({
  providedIn: 'root'
})
export class ChartsjsService {
  private charts: { [id: string]: Chart } = {}; // To store chart instances by their element IDs

  constructor() {
    // Register Chart.js components globally
    Chart.register(...registerables);
  }

  /**
   * Initializes a Chart.js chart
   * @param elementId - The ID of the canvas element
   * @param type - The type of chart (e.g., 'bar', 'line', 'pie', etc.)
   * @param data - The chart data
   * @param options - The chart options
   */
  createChart(
    elementId: string,
    type: ChartType,
    data: any,
    options?: any
  ): void {
    const canvas = document.getElementById(elementId) as HTMLCanvasElement;
    if (!canvas) {
      console.error(`Canvas element with ID '${elementId}' not found.`);
      return;
    }

    // Destroy any existing chart on this canvas
    this.destroyChart(elementId);

    // Create a new chart
    this.charts[elementId] = new Chart(canvas, {
      type,
      data,
      options,
    } as ChartConfiguration);
  }

  /**
   * Updates the data and re-renders a chart
   * @param elementId - The ID of the canvas element
   * @param data - The updated chart data
   * @param options - The updated chart options (optional)
   */
  updateChart(elementId: string, data: any, options?: any): void {
    const chart = this.charts[elementId];
    if (!chart) {
      console.error(`Chart with ID '${elementId}' does not exist.`);
      return;
    }

    // Update the data and options
    chart.data = data;
    if (options) {
      chart.options = options;
    }

    // Re-render the chart
    chart.update();
  }

  /**
   * Destroys a chart instance by element ID
   * @param elementId - The ID of the canvas element
   */
  destroyChart(elementId: string): void {
    const chart = this.charts[elementId];
    if (chart) {
      chart.destroy();
      delete this.charts[elementId];
    }
  }

  /**
   * Destroys all charts managed by the service
   */
  destroyAllCharts(): void {
    Object.keys(this.charts).forEach((id) => this.destroyChart(id));
  }
}