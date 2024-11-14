import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-store-location',
  standalone: true,
  imports: [],
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
    this.map = L.map('map').setView([51.505, -0.09], 13);

	const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(this.map);

	const marker = L.marker([51.5, -0.09]).addTo(this.map)
		.bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();

	const circle = L.circle([51.508, -0.11], {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5,
		radius: 500
	}).addTo(this.map).bindPopup('I am a circle.');

	const polygon = L.polygon([
		[51.509, -0.08],
		[51.503, -0.06],
		[51.51, -0.047]
	]).addTo(this.map).bindPopup('I am a polygon.');


	const popup = L.popup()
		.setLatLng([51.513, -0.09])
		.setContent('I am a standalone popup.')
		.openOn(this.map);

  }
}
