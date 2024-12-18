import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  images: string[] = [
    'assets/images/full-luces.JPG',
    'assets/images/gus rara.jpg',
    'assets/images/full-quebrada.JPG',
    'assets/images/full-viel1.JPG',
    'assets/images/pov batero clan.jpg',
    'assets/images/gus clan.jpg',
    'assets/images/full-viel2.jpg',
    'assets/images/mati-viel.JPG',
    'assets/images/full-luces2.JPG'
  ];

  currentIndex: number = 0;

  // Ir a la foto anterior
  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1; // Vuelve al final
    }
  }

  // Ir a la siguiente foto
  nextSlide() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Vuelve al inicio
    }
  }
}
