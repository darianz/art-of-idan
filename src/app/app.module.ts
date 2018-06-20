import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FineArtComponent } from './gallery-components/fine-art/fine-art.component';
import { TabsComponent } from './tabs/tabs.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule } from '@angular/material';
import { CoverImageComponent } from './cover-image/cover-image.component';
import { FooterComponent } from './footer/footer.component';
import { AboutMeComponent } from './about-me/about-me.component';


@NgModule({
  declarations: [
    AppComponent,
    FineArtComponent,
    TabsComponent,
    CoverImageComponent,
    FooterComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    RouterModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
