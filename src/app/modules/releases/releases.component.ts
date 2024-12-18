import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.scss']
})
export class ReleasesComponent {

  constructor(private sanitizer: DomSanitizer) {}

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  songs = [
    {
      title: 'Lluvia',
      cover: 'assets/images/portada lluvia.png',
      spotifyLink: 'https://open.spotify.com/intl-es/track/34WbZyUzM6Y7qqpBdXDkXR?si=b997ddac116744e1'
    },
    {
      title: 'Cuando las estrellas desaparezcan',
      cover: 'assets/images/portada estrellas.jpg',
      spotifyLink: 'https://open.spotify.com/intl-es/track/1f0IJyv8KS5X8ZvKAZyjLh?si=7803c3512fc947ee'
    },
    {
      title: 'Ríos',
      cover: 'assets/images/portada rios.jpg',
      spotifyLink: 'https://open.spotify.com/intl-es/track/7dvKVOKyYDc7uJ1ptkN1sH?si=e1ff9b60bcd04fdb'
    },
    {
      title: 'De ti, de mi',
      cover: 'assets/images/portada dtdm.jpg',
      spotifyLink: 'https://open.spotify.com/intl-es/track/3JbtSOAGaUj5yfHgsI7PZ8?si=0b235e8838f140e7'
    }
  ];

  videos = [
    {
      title: 'Lluvia - Visualizer',
      youtubeLink: 'https://www.youtube.com/embed/0Szwr84Q61w?si=uew_VDIncHt77BVs'
    },
    {
      title: 'Cuando las estrellas desaparezcan',
      youtubeLink: 'https://www.youtube.com/embed/iauZwfjQuMA?si=smd1_cKWeu3qCL6W'
    }
  ];
}
