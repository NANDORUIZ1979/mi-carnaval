import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FinderInputComponent } from "../../shared/components/finder-input/finder-input.component";
import { LocationsService } from '../../shared/services/locations.service';

@Component({
  selector: 'app-store-location',
  standalone: true,
  imports: [FinderInputComponent],
  templateUrl: './store-location.component.html',
  styleUrl: './store-location.component.css'
})
export class StoreLocationComponent implements OnInit {
  private map: any;

  private latitude: number = 0;
  private longitude: number = 0;

  constructor(
    @Inject(PLATFORM_ID)
    private platformId: Object,
    private locationService: LocationsService
  ) {
      this.locationService.getPosition().then(pos => {
        this.latitude = pos.lat;
        this.longitude = pos.lng;
      });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('leaflet').then((leaflet) => { this.loadConfigMap(leaflet); });
    }
  }

  loadConfigMap(leaflet: any): void {
    console.log('User position: ', this.latitude + ', ' + this.longitude);
    this.map = leaflet.map('map').setView([this.latitude, this.longitude], 13);

    leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(this.map);

    leaflet.marker([this.latitude, this.longitude]).addTo(this.map)
    .bindPopup('Disfrutas desde este lugar')
    .openPopup();
  }
}
