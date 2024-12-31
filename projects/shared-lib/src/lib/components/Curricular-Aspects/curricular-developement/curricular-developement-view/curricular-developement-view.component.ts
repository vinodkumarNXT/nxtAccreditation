import { FormsService, ImageService, MaterialModule } from 'shared-lib';
import { SharableModule } from '../../../../modules/sharable.module';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { endpoints } from 'projects/shell/environments/endpoint';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'lib-curricular-relevance-view',
  standalone: true,
  imports: [ SharableModule, MaterialModule],
  templateUrl: './curricular-developement-view.component.html',
  styleUrl: './curricular-developement-view.component.css'
})
export class CurricularDevelopementViewComponent {

  public data: any;
  public formData: any;

  constructor(
    private imageService: ImageService,
    private lightbox: Lightbox,
    @Inject(MAT_DIALOG_DATA) data: any, private formsService: FormsService) {
    this.data = data;
  }

  ngOnInit(): void {
    this.loadFormData();
  }


// Implementation  Load Form  Start Here
  async loadFormData() {
    try {
      const formData = await this.formsService.getFormData(this.data.id, endpoints.CirDesignAndDevelopment);
      this.formData = formData.data;
      console.log("Getting Form Data", formData);
    } catch (error) {
      console.error('Failed to load form data:', error);
    }
  }

  

// Implementation  Load Form  ENDS Here



openLightbox(fileName: string): void {
  console.log("fileName", fileName);
  
  this.imageService.getImageAsBase64(fileName).then(base64Image => {
    const images = [
      {
        src: base64Image,
        caption: 'Document Image',
        thumb: base64Image
      }
    ];

    this.lightbox.open(images, 0); // 0 is the index of the image to display
  }).catch(error => {
    console.error('Failed to open lightbox', error);
    // Optionally show a user-friendly message here
  });
}


}

