import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withFetch()),

    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'ppw-proyecto',
        appId: '1:327067855954:web:35e841d2da210f2de1438b',
        storageBucket: 'ppw-proyecto.firebasestorage.app',
        apiKey: 'AIzaSyBWOQbOa-cr7e1VhWrVkUf2oTOsZ9jDAR4',
        authDomain: 'ppw-proyecto.firebaseapp.com',
        messagingSenderId: '327067855954',
        measurementId: 'G-JQJ62NSWFR',
      }),
    ),

    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
