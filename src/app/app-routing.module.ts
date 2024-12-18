import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { BioComponent } from './modules/bio/bio.component';
import { GalleryComponent } from './modules/gallery/gallery.component';
import { ShowsComponent } from './modules/shows/shows.component';
import { ContactComponent } from './modules/contact/contact.component';
import { ReleasesComponent } from './modules/releases/releases.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Página principal
  { path: 'bio', component: BioComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'shows', component: ShowsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'releases', component: ReleasesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
