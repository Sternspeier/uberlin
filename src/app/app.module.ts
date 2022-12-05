import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TextWrapperComponent } from './components/text-wrapper/text-wrapper.component';
import { AboutComponent } from './components/about/about.component';
import { T1SoundingTheTrumpet1Component } from './components/t1-sounding-the-trumpet1/t1-sounding-the-trumpet1.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { NewsComponent } from './components/news/news.component';
import { ContactComponent } from './components/contact/contact.component';
import { BeStickyDirective } from './directives/be-sticky.directive';
import { T2SoundingTheTrumpet2Component } from './components/t2-sounding-the-trumpet2/t2-sounding-the-trumpet2.component';

const appRoutes: Routes = [
  {path: '', component: T1SoundingTheTrumpet1Component},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'archive', component: ArchiveComponent},
  {path: 'news', component: NewsComponent},
  {path: 'sounding-the-trumpet-1', component: T1SoundingTheTrumpet1Component},
  {path: 'sounding-the-trumpet-2', component: T2SoundingTheTrumpet2Component},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    TextWrapperComponent,
    AboutComponent,
    T1SoundingTheTrumpet1Component,
    ArchiveComponent,
    NewsComponent,
    ContactComponent,
    BeStickyDirective,
    T2SoundingTheTrumpet2Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
