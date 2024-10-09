import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { ImpressumComponent } from './impressum/impressum.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'datenschutz', component: DatenschutzComponent},
  { path: 'impressum', component: ImpressumComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    DatenschutzComponent,
    ImpressumComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
