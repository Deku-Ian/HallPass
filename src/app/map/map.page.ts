import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements AfterViewInit {
  map!: L.Map;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [17.659282, 121.752497], // University coordinates
      zoom: 18,
    });

    const customIcon = L.icon({
      iconUrl: 'assets/icon/favicon.png', // Add your icon in `src/assets/`
      iconSize: [32, 32], // Size of the icon
      iconAnchor: [16, 32], // Anchor point of the icon
      popupAnchor: [0, -30], // Position of the popup
    });

    const pathCoordinates: [number, number][] = [
      [17.659532, 121.751897], // Start point
      [17.659194, 121.752589], // Midpoint
      [17.658734, 121.753474], // Endpoint
    ];
    
    L.polyline(pathCoordinates, {
      color: 'blue',
      weight: 5, // Line thickness
      opacity: 0.7,
      dashArray: '5, 10', // Dashed style
    }).addTo(this.map)
      .bindPopup('Route to Library');
    

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);

    L.marker([17.659282, 121.752497], {icon: customIcon}) // Replace with coordinates
      .addTo(this.map)
      .bindPopup('center').closePopup
      // .bindTooltip('Library Tooltip', { permanent: true, direction: 'top' });
  }
}
