import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeShareComponent } from './code-share/code-share.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeShareComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


//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