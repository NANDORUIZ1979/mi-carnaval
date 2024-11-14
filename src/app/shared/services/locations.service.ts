import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(
    @Inject(PLATFORM_ID)
    private platformId: Object
  ) { }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (isPlatformBrowser(this.platformId)) {
        navigator.geolocation.getCurrentPosition(
          resp => resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude }),
          err => reject(err)
        );
      } else {
        reject('Geolocation is not available on the server. Platform is: ' + this.platformId);
      }
    });
  }
}
