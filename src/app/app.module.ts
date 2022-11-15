import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextloaderComponent } from './components/textloader/textloader.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TextWrapperComponent } from './components/text-wrapper/text-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    TextloaderComponent,
    HeaderComponent,
    SidebarComponent,
    TextWrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
