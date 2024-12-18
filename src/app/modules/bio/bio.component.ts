import { Component } from '@angular/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent {
  bioTitle = 'Nosotros';
  bioDescription = `Bahía Estelar
es una banda
proveniente de Santiago de Chile,
con un estilo marcado por el indie
rock y synth pop alternativo.
El proyecto propone viajes a diversos
paisajes y estéticas acordes a su
sonoridad, estableciéndose como
música apta para escuchar en
movimiento y contenido lirico donde
los sentimientos de perdida,
romance e introspección son el
retrato final de una propuesta
donde bailar y llorar van de la mano.
La banda, actualmente, se encuentra
dentro del movimiento indie, siendo
parte de las influencias activas de
la música nacional y a prontas de
su primer material discográfico
de larga duración.
  `;

  members = [
    { name: 'Matías Pontigo', role: 'Sintetizadores / Voz', photo: 'assets/images/mati.jpg' },
    { name: 'Gustavo Lazo', role: 'Guitarra / Voz', photo: 'assets/images/gus.jpg' },
    { name: 'Matías Parra', role: 'Bajo', photo: 'assets/images/pabloxd.jpg' },
    { name: 'Nicolás López', role: 'Batería', photo: 'assets/images/nico.jpg' }
  ];
}
