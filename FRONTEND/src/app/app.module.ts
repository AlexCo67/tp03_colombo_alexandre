import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CatalogueComponent } from './catalogue/catalogue.component';
import { MonservService } from './monserv.service';
import { HttpClientModule } from '@angular/common/http';

import { TestObserComponent } from './test-obser/test-obser.component';
import { RechercheComponent } from './recherche/recherche.component';
import { RecherchePipe } from './recherche.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestObserComponent,
    CatalogueComponent,
    RechercheComponent,
    RecherchePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
