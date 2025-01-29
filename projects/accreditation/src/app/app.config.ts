import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

import { routes } from './app.routes';

import { provideStore } from '@ngrx/store'; // Use provideStore
import { chatReducer } from 'shared-lib';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
      provideAnimations(),
      provideToastr(),
      NgxSpinnerService,  // Add NgxSpinnerService to providers
      provideStore({ chat: chatReducer }),
    ]
  
};
