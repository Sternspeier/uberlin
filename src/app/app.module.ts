import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TextWrapperComponent } from './components/text-wrapper/text-wrapper.component';
import { AboutComponent } from './components/about/about.component';
import { T1SoundingTheTrumpet1Component } from './components/t1-sounding-the-trumpet1/t1-sounding-the-trumpet1.component';

const appRoutes: Routes = [
  {path: '', component: T1SoundingTheTrumpet1Component},
  {path: 'about', component: AboutComponent},
  {path: 'sounding-the-trumpet-1', component: T1SoundingTheTrumpet1Component}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    TextWrapperComponent,
    AboutComponent,
    T1SoundingTheTrumpet1Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
