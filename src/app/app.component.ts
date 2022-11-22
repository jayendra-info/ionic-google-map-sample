import { Component } from '@angular/core';
import {MapDirectionsService} from '@angular/google-maps';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Angular14GoogleMap';
  ngOnInit(): void {}
  center: google.maps.LatLngLiteral = {
      lat: 32.7767,
      lng: -96.797
  };
  zoom = 4;
  readonly directionsResults$: Observable < google.maps.DirectionsResult | undefined > ;
  constructor(mapDirectionsService: MapDirectionsService) {
      const request: google.maps.DirectionsRequest = {
          destination: {
              lat: 33,
              lng: -97
          },
          origin: {
              lat: 34,
              lng: -98
          },
          waypoints: [{
            location: {
              lat: 32.852,
              lng: -96.78,
            }
          }
          ],
          travelMode: google.maps.TravelMode.DRIVING
      };
      this.directionsResults$ = mapDirectionsService.route(request).pipe(map(response => response.result));
  }
}
