import { AboutMeComponent } from './about-me/about-me.component';
import { FineArtComponent } from './gallery-components/fine-art/fine-art.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


 
const routes: Routes = [
  //{ path: '', redirectTo: '/', pathMatch: 'full' },
  //{ path: 'dashboard', component: DashboardComponent },
    //{ path: 'fine-art', component: FineArtComponent , pathMatch: 'full' },
    //{ path: 'about-me', component: AboutMeComponent , pathMatch: 'full'}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}