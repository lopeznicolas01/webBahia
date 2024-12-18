import { Component } from '@angular/core';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent {
  shows = [
    { date: '21/12/2024', location: 'Radio Escena, Santiago', ticketLink: 'https://www.portaldisc.com/evento/bahiaestelarangora21diciembreradioescena', isTicketAvailable: true },
    { date: '10/01/2025', location: 'Bar Ramblas, Santiago', ticketLink: 'https://www.ejemplo.com/compra2', isTicketAvailable: false }
  ];
}
