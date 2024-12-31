import { Injectable } from '@angular/core';
import { environment } from 'projects/shell/environments/environment';
import { schoolErpEnvironment } from 'projects/shell/environments/school-erp-environment';

@Injectable({
  providedIn: 'root'
})
export class EnvromentGlobalServiceService {

// Configuration map for different services
private configMap: { [key: string]: { appURL: string; apiBaseURL: string; assetsUrl: string } } = {
  accreditation: {
    appURL: environment.production
      ? 'https://prod.accreditation.com/'
      : 'http://192.168.0.104:8000/accreditation/',
    apiBaseURL: environment.production
      ? 'https://prod.accreditation.com/api/'
      : 'http://192.168.0.104:8000/accreditation/api/',
    assetsUrl: environment.production
      ? 'https://prod.accreditation.com/assets/images/'
      : 'http://192.168.0.104:8000/accreditation/assets/images/',
  },
  erp: {
    appURL: schoolErpEnvironment.production
      ? 'https://prod.erp.com/'
      : 'http://192.168.0.104:8000/erp/',
    apiBaseURL: environment.production
      ? 'https://prod.erp.com/api/'
      : 'http://192.168.0.104:8000/erp/api/',
    assetsUrl: environment.production
      ? 'https://prod.erp.com/assets/images/'
      : 'http://192.168.0.104:8000/erp/assets/images/',
  },
  examination: {
    appURL: environment.production
      ? 'https://prod.examination.com/'
      : 'http://192.168.0.104:8000/examination/',
    apiBaseURL: environment.production
      ? 'https://prod.examination.com/api/'
      : 'http://192.168.0.104:8000/examination/api/',
    assetsUrl: environment.production
      ? 'https://prod.examination.com/assets/images/'
      : 'http://192.168.0.104:8000/examination/assets/images/',
  }
};

constructor() {}

// Method to get configuration by key (e.g., 'accreditation', 'erp', 'examination')
getConfig(serviceKey: string): { appURL: string; apiBaseURL: string; assetsUrl: string } {
  return this.configMap[serviceKey] || this.configMap['accreditation']; // Default to accreditation if key not found
}

// Helper methods to retrieve specific parts of the configuration
getAppURL(serviceKey: string): string {
  return this.getConfig(serviceKey).appURL;
}

getApiBaseURL(serviceKey: string): string {
  return this.getConfig(serviceKey).apiBaseURL;
}

getAssetsURL(serviceKey: string): string {
  return this.getConfig(serviceKey).assetsUrl;
}
}

