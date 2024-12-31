import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../../accreditation/src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(
    
  ) {}

  async onFormSubmit(formValue: any, endpoint: string) {
    const fullUrl = `${environment.apiBaseURL}${endpoint}`; // Combine base URL with endpoint
    console.log("Full URL:", fullUrl);

    // Retrieve CSRF token from meta tag
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

    // Create Axios instance with CSRF token in headers
    const axiosInstance = axios.create({
      headers: {
        'X-CSRF-TOKEN': csrfToken,
        'Content-Type': 'application/json',
        
      }
    });

    try {
      const response = await axiosInstance.post(fullUrl, formValue);
      console.log('Success!', response);
      return response.data; // Return response data if needed
    } catch (error) {
      console.error('Error!', error);
      throw error; // Re-throw error to handle it in the component if needed
    }
  }

  async getFormData(id: string, endpoint: string) {
    const fullUrl = `${environment.apiBaseURL}${endpoint}/${id}`; 
    try {
      const response = await axios.get(fullUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching form data:', error);
      throw error;
    }
  }


  async getListData(endpoint: string) {
    const fullUrl = `${environment.apiBaseURL}${endpoint}`; 
    try {
      const response = await axios.get(fullUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching form data:', error);
      throw error;
    }
  }

  async updateFormData(formValue: any, id: string, endpoint: string) {
    const fullUrl = `${environment.apiBaseURL}${endpoint}/${id}`; 
    try {
      const response = await axios.put(fullUrl, formValue); // Include formValue in the put request
      return response.data;
    } catch (error) {
      console.error('Error updating form data:', error); // Update error message
      throw error;
    }
  }


  async deleteFormData(id: string, endpoint: string) {
    const fullUrl = `${environment.apiBaseURL}${endpoint}/${id}`;
    try {
      const response = await axios.delete(fullUrl);
      return response.data;
    } catch (error) {
      console.error('Error deleting form data:', error);
      throw error;
    }
  }


  async onFormSubmitWithFile(formData: FormData, endpoint: string) {
    const fullUrl = `${environment.apiBaseURL}${endpoint}`;
    console.log("Full URL:", fullUrl);
    const axiosInstance = axios.create({
      headers: {
        'enctype': 'multipart/form-data'
      }
    });
  
    try {
      const response = await axiosInstance.post(fullUrl, formData);
      console.log('Success!', response);
      return response.data; // Return response data if needed
    } catch (error) {
      console.error('Error!', error);
      throw error; // Re-throw error to handle it in the component if needed
    }
  }
  


  accreditationLogin(email: string, password: string) {
    const endpoint = '/api/login'; // Define your endpoint here
    const fullUrl = `${environment.apiBaseURL}${endpoint}`; // Combine base URL with endpoint
    console.log("Full URL:", fullUrl);

    // Retrieve CSRF token from meta tag
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');

    // Create Axios instance with CSRF token in headers
    const axiosInstance = axios.create({
      headers: {
        'X-CSRF-TOKEN': csrfToken,
        'Content-Type': 'application/json',
      }
    });

    return axiosInstance.post(fullUrl, {
      email: email,
      password: password
    });
  }


  

  async updateDataID( id: any, endpoint: any) {
    const fullUrl = `${environment.apiBaseURL}${endpoint}/${id}`; 
    try {
      const response = await axios.get(fullUrl); // Include formValue in the put request
      return response.data;
    } catch (error) {
      console.error('Error updating form data:', error); // Update error message
      throw error;
    }
  }


  // service method
async updateDataQuery(params: any, endpoint: string) {
  // Construct the query string from the params object
  const queryParams = new URLSearchParams(params).toString();
  const fullUrl = `${environment.apiBaseURL}${endpoint}?${queryParams}`;
  
  try {
    // Making a GET request with the constructed full URL
    const response = await axios.get(fullUrl);
    return response.data; // Return the response data to the calling function
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Propagate the error to be handled elsewhere
  }
}

  // Step 1: Register 2FA and generate QR Code and Secret Key
  async register2fa(endpoint: string): Promise<any> {
    const fullUrl = `${environment.apiBaseURL}${endpoint}`; // Combine base URL with endpoint
    try {
      // Making the GET request to fetch QR code and secret key
      const response = await axios.get(fullUrl);
      return response.data; // Return the data which includes qrCodeUrl and secretKey
    } catch (error) {
      console.error('Error fetching 2FA registration data:', error);
      throw error; // Rethrow error to be handled in the component
    }
  } 




}
