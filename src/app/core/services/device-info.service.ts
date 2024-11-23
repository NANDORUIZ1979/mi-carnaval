import { Injectable } from '@angular/core';
import FingerprintJS from '@fingerprintjs/fingerprintjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceInfoService {
  private visitorId: string = '';

  constructor() {
    const fp = FingerprintJS.load();
    fp
    .then(fp => fp.get())
    .then(result => {
      this.visitorId = result.visitorId
    })
  }

  getVisitorId() {
    return this.visitorId;
  }
}
