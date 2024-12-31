import { Injectable } from '@angular/core';
import { endpoints } from 'projects/shell/environments/endpoint';
import { schoolErpEndpoint } from 'projects/shell/environments/school-erp-endpoint';

@Injectable({
  providedIn: 'root'
})
export class GlobalApiEndpointService {

  private configMap: { [key: string]: any } = {
    default: schoolErpEndpoint,
    ...endpoints, // Include any other endpoint configurations you have
  };

  constructor() {}

  getEndpoint(any: string): any {
    const endpointConfig = this.configMap[any];

    if (!endpointConfig) {
      throw new Error(`No endpoint configuration found for branch: ${any}`);
    }

    return endpointConfig;
  }}