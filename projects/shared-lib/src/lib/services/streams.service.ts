import { Injectable } from '@angular/core';
import axios from 'axios';



interface Department {
  value: string;
  text: string;
}

interface Programs {
  [key: string]: Department[];
}



@Injectable({
  providedIn: 'root'
})
export class StreamsOfCourses{

  private jsonURL = 'assets/streams.json';

  async getStreams(): Promise<any> {
    try {
      const response = await axios.get(this.jsonURL);
      return response.data;
    } catch (error) {
      console.error('Error fetching streams data:', error);
      throw error;
    }
  }
}