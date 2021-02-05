import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgQrScannerModule } from 'angular2-qrscanner';
import { ScannerComponent } from './pages/scanner/scanner.component';
import { GeneratorComponent } from './pages/generator/generator.component';

@NgModule({
  declarations: [
    AppComponent,
    ScannerComponent,
    GeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgQrScannerModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
