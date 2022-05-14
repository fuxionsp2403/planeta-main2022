import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgParticlesModule } from "ng-particles";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CardsComponent } from './shared/components/cards/cards.component';
import { ChatComponent } from './shared/components/chat/chat.component';
import { BoxcontainerComponent } from './shared/components/boxcontainer/boxcontainer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import  {  InfiniteScrollModule  }  from  "ngx-infinite-scroll" ;


@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    NavbarComponent,
    FooterComponent,
    CardsComponent,
    ChatComponent,
    BoxcontainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
