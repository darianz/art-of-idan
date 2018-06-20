import { AboutMeComponent } from './about-me/about-me.component';
import { FineArtComponent } from './gallery-components/fine-art/fine-art.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



 const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  // { path: 'dashboard', component: DashboardComponent },

  { path: 'about-me', component: AboutMeComponent },
  { path: 'fine-art', component: FineArtComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

