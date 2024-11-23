import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, isStandalone, OnInit, PLATFORM_ID } from '@angular/core';
import { FinderInputComponent } from "../../shared/components/finder-input/finder-input.component";
import { LocationsService } from '../../shared/services/locations.service';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { DeviceInfoService } from '../../core/services/device-info.service';

@Component({
    selector: 'app-store-location',
    imports: [FinderInputComponent, LoadingComponent],
    templateUrl: './store-location.component.html',
    styleUrl: './store-location.component.css'
})
export class StoreLocationComponent implements OnInit {
  private map: any;
  private latitude: number = 0;
  private longitude: number = 0;
  private visitorId: string = '';
  public isLoading: boolean = true;

  constructor(
    @Inject(PLATFORM_ID)
    private platformId: Object,
    private locationService: LocationsService,
    private deviceInfoService: DeviceInfoService
  ) {
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('leaflet').then((leaflet) => { this.loadMap(leaflet); });
    }

    this.visitorId = this.deviceInfoService.getVisitorId();
    console.log('visitorId', this.visitorId);
  }

  loadMap(leaflet: any): void {
    this.getLocationPosition(leaflet);

  }

  loadConfigMap(leaflet: any): void {
    this.map = leaflet.map('map').setView([this.latitude, this.longitude], 13);

    leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(this.map);

    leaflet.marker([this.latitude, this.longitude]).addTo(this.map)
    .bindPopup('Disfrutas desde este lugar')
    .openPopup();
  }

  getLocationPosition(leaflet: any): void {
    this.locationService.getPosition().then(pos => {
      this.latitude = pos.lat;
      this.longitude = pos.lng;
    }).finally(() => {
      console.log('Mapa cargado');
      this.loadConfigMap(leaflet);
      this.isLoading = false;
    })
  }
}
