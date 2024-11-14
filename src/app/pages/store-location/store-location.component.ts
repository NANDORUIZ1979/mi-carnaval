import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import * as L from 'leaflet';
import { FinderInputComponent } from "../../shared/finder-input/finder-input.component";

@Component({
  selector: 'app-store-location',
  standalone: true,
  imports: [FinderInputComponent],
  templateUrl: './store-location.component.html',
  styleUrl: './store-location.component.css'
})
export class StoreLocationComponent implements OnInit {
  map: any;
  private centroid: L.LatLngExpression = [16.81897, 10.16579];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('leaflet').then((L) => {
        this.initMap(L);
      });
    }
  }

  private initMap(L: any): void {
    this.map = L.map('map')
        .setView([46.801111, 8.226667], 8);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap'
    }).addTo(this.map);
  }
}
