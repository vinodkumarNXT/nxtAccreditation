import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { SharableModule, FormsService, SnackbarService } from 'school-erp-public';

@Component({
  selector: 'lib-nba-dashboard',
  standalone: true,
  imports: [SharableModule],
  providers: [FormsService, SnackbarService, provideNativeDateAdapter()],
  templateUrl: './nba-dashboard.component.html',
  styleUrl: './nba-dashboard.component.css'
})
export class NbaDashboardComponent {


      // List of light background colors
 lightColors = [
  '#FFF0F5', '#FFFAF0', '#F0FFF0', '#F0F8FF', '#F5F5F5',
  '#E6E6FA', '#FFF8E8', '#FAFAD2', '#F5FFFA', '#E0FFFF',
  '#F8F8FF', '#FDF5E6', '#FFEBE8', '#F0E68C', '#EDEDED'
];


// Array of card data with random background colors
cards = [
  {
    imageSrc: '../../../assets/images/thesis.png',
    title: 'Excellence in Education, Endorsed by Accreditation.',
    description: 'Thesis :',
    count: 124,
    backgroundColor: this.getRandomLightColor()
  },
  {
    imageSrc: '../../../assets/images/trophy.png',
    title: 'Empowering Minds through Accredited Excellence',
    description: 'Awards',
    count: 436,
    backgroundColor: this.getRandomLightColor()
  },
  {
    imageSrc: '../../../assets/images/workshop.png',
    title: 'Accredited Workshops: Empowering Minds, Elevating Standards.',
    description: 'Workshops:',
    count: 3324,
    backgroundColor: this.getRandomLightColor()
  },
  {
    imageSrc: '../../../assets/images/books.png',
    title: 'Accredited Knowledge, Boundless Horizons',
    description: 'Books :',
    count: 4234,
    backgroundColor: this.getRandomLightColor()
  },
  {
    imageSrc: '../../../assets/images/h-index.png',
    title: 'Accredited Excellence, Measured by H-Index Impact',
    description: 'H-index :',
    count: 123142,
    backgroundColor: this.getRandomLightColor()
  },
  {
    imageSrc: '../../../assets/images/citations.png',
    title: 'Accredited Quality, Recognized by Citations',
    description: 'Citations :',
    count: 1232,
    backgroundColor: this.getRandomLightColor()
  },
  {
    imageSrc: '../../../assets/images/grant.png',
    title: 'Accredited Innovation, Fueled by Grants',
    description: 'Grants :',
    count: 12312312,
    backgroundColor: this.getRandomLightColor()
  },
  {
    imageSrc: '../../../assets/images/trust.png',
    title: 'Accredited Partnerships, Strengthened by MOUs.',
    description: 'MOUs',
    count: 12313,
    backgroundColor: this.getRandomLightColor()
  }
];


   // Function to get a random light color from the array
   getRandomLightColor() {
    const randomIndex = Math.floor(Math.random() * this.lightColors.length);
    return this.lightColors[randomIndex];
  }


  
}
