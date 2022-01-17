import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardCapaFilmeComponent } from './card-capa-filme/card-capa-filme.component';
import { CardPosterFilmeComponent } from './card-poster-filme/card-poster-filme.component';
import { NavFilmeComponent } from './nav-filme/nav-filme.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgImageSliderModule } from 'ng-image-video-gallery';
import { EmbedVideo } from 'ngx-embed-video';import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { NavFooterComponent } from './nav-footer/nav-footer.component';



@NgModule({
  declarations: [
    AppComponent,
    CardCapaFilmeComponent,
    CardPosterFilmeComponent,
    NavFilmeComponent,
    NavFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgImageSliderModule,
    EmbedVideo,
    NgxYoutubePlayerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
